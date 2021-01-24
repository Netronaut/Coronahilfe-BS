import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Row } from '../components/Grid';
import { Layout } from '../components/layout/Layout';
import { Body } from '../components/Typography';
import content from '../content/privacy.md';

const Privacy: React.FC = () => (
  <Layout>
    <Row>
      <Body>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Body>
    </Row>
  </Layout>
);

export default Privacy;
