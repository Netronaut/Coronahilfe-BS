import { useLocalJsonForm } from 'next-tinacms-json';

export default function Page({ post }) {
  const [postData] = useLocalJsonForm(post, {
    fields: [
      {
        name: 'title',
        label: 'Post Title',
        component: 'text',
      },
    ],
  });
  return (
    <>
      <h1>{post.data.title}</h1>
    </>
  );
}

Page.getInitialProps = function(ctx) {
  const { slug } = ctx.query;
  const content = require(`../content/${slug}.json`);

  return {
    post: {
      fileRelativePath: `/content/${slug}.json`,
      data: content,
    },
  };
};
