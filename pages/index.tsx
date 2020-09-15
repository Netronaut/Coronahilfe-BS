import React from 'react';
import Head from 'next/head';
import { Badge, Column, Row, Header, Logo, Navigation, Process, Step, Video } from '../components';
import { Body, Hero, Secondary } from '../components/Typography';
import { Grocery } from '../components/Icons';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Studentische Einkaufshilfe Braunschweig</title>
    </Head>

    <Header>
      <Row>
        <Logo />
        <Badge />
      </Row>
      <Navigation />
    </Header>

    <Row>
      <Body>
        Die Corona-Pandemie schränkt den Alltag in Deutschland ein. Vor allem für gefährdete
        Gruppen, wie ältere Menschen oder Personen mit Vorerkrankungen sind alltägliche Aufgaben mit
        einem Ansteckungsrisiko verbunden. Wir wollen helfen!
      </Body>
      <Hero>
        Wenn sie wegen der aktuellen Situation besorgt sind einkaufen zu gehen, möchten wir ihnen
        unsere Unterstützung anbieten!
      </Hero>
    </Row>

    <Row>
      <Grocery size={260} />
      <Column>
        <Secondary>Wir helfen gerne</Secondary>
        <Body>
          Älteren Menschen, immungechwächten Personen, Menschen mit Vorerkrankungen, Schwangeren,
          Mitarbeitenden des Gesundheitswesens, von Polizei oder Feuerwehr oder bei
          Quarantänefällen.
        </Body>
      </Column>
    </Row>

    <Row indent="medium">
      <Video width={915} height={514} src="https://www.youtube-nocookie.com/embed/g1fbdiMEt1I" />
    </Row>

    <Row vertical indent="large">
      <Secondary>Dabei helfen wir ihnen</Secondary>
      <Body>
        Wir gehen für Sie einkaufen, erledigen rezeptfreie Apothekengänge oder sonstige Besorgungen.
      </Body>
    </Row>

    <Row vertical indent="large">
      <Secondary>So funktioniert es</Secondary>
      <Step num={1}>
        Melden Sie sich bei uns unter <span className="nowrap">0531 1805 9703</span>
      </Step>
      <Step num={2}>Ein Einkaufshelfer wird Ihnen zugeteilt und meldet sich.</Step>
    </Row>

    <Process />

    <Row vertical indent="large">
      <Secondary>Werde Helfer*in</Secondary>
      <Body>
        <p>
          Bist du Student*in der TU und möchtest Einkaufshelfer*in werden? Nichts lieber als das!
          Kommt mit auf unsere TU Sandkasten Seite und werde Teil des Teams:
          <br />
          <a href="mailto:Einkaufshilfe@TU-Sandkasten">Einkaufshilfe @TU Sandkasten</a>.
        </p>

        <p>
          Wenn ihr NICHT in Braunschweig gemeldete Studierende seid und freiwillige Helfer*in werden
          wollt, dann registriert euch bitte über das Portal der Stadt. Bzgl. Verteilung der
          Helfer*innen Kräfte hat das große Vorteile und wir können die uns zur Verfügung stehenden
          Kapazitäten effektiver einsetzen.
          <br />
          <a href="#">Stadt Braunschweig - Hilfe-Bieten-Suchen</a>
        </p>
      </Body>
    </Row>
  </>
);

export default Home;
