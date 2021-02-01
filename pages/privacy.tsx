import React from 'react';
import marked from 'marked';
import { Row } from '../components/Grid';
import { Layout } from '../components/layout/Layout';
import { Body } from '../components/Typography';
import content from '../content/privacy.md';

const Privacy: React.FC = () => (
  <Layout>
    <Row>
      <Body dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Row>
  </Layout>
);

export default Privacy;
