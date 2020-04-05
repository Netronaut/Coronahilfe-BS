import Error from 'next/error';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { promises } from 'fs';
import { Navi } from '../components/Navi';

type PageProps = {
  content: string;
  data: {
    title?: string;
    description?: string;
  };
};

const Page: React.FC<PageProps> = ({ data, content }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!data || !content) {
    return <Error statusCode={404} />;
  }

  const { title, description } = data;

  return (
    <>
      <Navi />
      <article className="container">
        <header>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </header>
        <main>
          <ReactMarkdown source={content} />
        </main>
      </article>
    </>
  );
};

export default Page;

export async function getStaticPaths(): Promise<{
  paths: object[];
  fallback: boolean;
}> {
  // no paths are prerendered
  // fallback false means every path is rendered as requested
  return {
    paths: [
      { params: { slug: 'datenschutz' } },
      { params: { slug: 'helfer' } },
      { params: { slug: 'hilfe' } },
      { params: { slug: 'über-uns' } },
    ],
    fallback: true,
  };
}

type StaticProps = {
  props: {
    content?: string;
    data?: object;
  };
};

export async function getStaticProps({ params }): Promise<StaticProps> {
  try {
    const { content, data } = matter(
      await promises.readFile(`content/${params.slug}.md`, 'utf8'),
    );

    return {
      props: {
        content,
        data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
