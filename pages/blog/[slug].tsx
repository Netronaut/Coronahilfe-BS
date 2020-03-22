import Error from 'next/error';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { promises } from 'fs';

import { Post, PostData } from '../../components/post';
import PublishInfo from '../../components/PublishInfo';

type PageProps = {
  post: Post;
};

const Page: React.FC<PageProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

  const { author, publishDate, title } = post.data;

  return (
    <article>
      <header>
        <h1>{title}</h1>
        <PublishInfo {...{ author, publishDate }} />
      </header>
      <main>
        <ReactMarkdown source={post.content} />
      </main>
    </article>
  );
};

export default Page;

export async function getStaticPaths(): Promise<{
  paths: string[];
  fallback: boolean;
}> {
  // no paths are prerendered
  // fallback false means every path is rendered as requested
  return { paths: [], fallback: true };
}

type StaticProps = {
  props: {
    post?: Post;
  };
};

export async function getStaticProps({ params }): Promise<StaticProps> {
  try {
    const { content, data } = matter(
      await promises.readFile(`content/blog/${params.slug}.md`, 'utf8'),
    );

    return {
      props: {
        post: { content, data: data as PostData },
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
