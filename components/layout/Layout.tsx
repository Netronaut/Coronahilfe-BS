import React from 'react';
import Head from 'next/head';
import { GlobalStyle } from './GlobalStyle';
import { Row } from '../Grid';
import { Secondary } from '../Typography';
import { Netronaut, Denkraum, Sandkasten, TUBS } from '../Icons';
import { Header } from './Header';
import { Logo } from './Logo';
import { Badge } from './Badge';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { SectionBreak } from '../SectionBreak';
import { FooterBanner } from './FooterBanner';

export const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>Studentische Einkaufshilfe Braunschweig</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@400;500;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Header>
      <Row>
        <Logo />
        <Badge />
      </Row>
      <Navigation />
    </Header>

    {children}

    <Footer>
      <SectionBreak />
      <Row indent="large">
        <Secondary>Partner &amp; Unterstützer</Secondary>
      </Row>
      <Row indent="large" center>
        <a href="https://www.tu-braunschweig.de/">
          <TUBS />
        </a>
        <a href="https://www.sandkasten.tu-braunschweig.de/">
          <Sandkasten />
        </a>
      </Row>
      <Row indent="large" center>
        <a href="https://denkraum-braunschweig.de/">
          <Denkraum size={300} />
        </a>
        <a href="https://netronaut.de/">
          <Netronaut />
        </a>
      </Row>
      <FooterBanner />
    </Footer>
  </>
);
