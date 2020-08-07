import React from 'react';
import Head from 'next/head';
import { Badge, Video } from '../components';

import { theme } from '../components/theme';

const Home: React.FC = () => (
  <>
    <main className="root">
      <Head>
        <title>#EinkaufshilfeBS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="row">
        <Badge />

        <p className="red fat uppercase center">
          Wenn sie wegen der aktuellen Situation besorgt sind einkaufen zu
          gehen, möchten wir ihnen unsere Unterstützung anbieten!
        </p>
      </section>

      <section>
        <p>
          Die Corona-Pandemie schränkt den Alltag in Deutschland ein. Vor allem
          für gefährdete Gruppen, wie ältere Menschen oder Personen mit
          Vorerkrankungen sind alltägliche Aufgaben mit einem Ansteckungsrisiko
          verbunden. Wir wollen helfen!
        </p>

        <p className="center center-text medium-large">
          <span className="uppercase">Melden sie sich unter</span>
          <br />
          <span className="red fat">0531 1805 9703</span>
        </p>
      </section>

      <Video src="https://www.youtube-nocookie.com/embed/g1fbdiMEt1I" />

      <section className="column">
        <h2>Wir helfen gerne</h2>
        <p>
          Älteren Menschen, immungechwächten Personen, Menschen mit
          Vorerkrankungen, Schwangeren, Mitarbeitenden des Gesundheitswesens,
          von Polizei oder Feuerwehr oder bei Quarantänefällen.
        </p>
      </section>

      <section className="column">
        <h2>Dabei helfen wir ihnen</h2>
        <p>
          Wir gehen für Sie einkaufen, erledigen rezeptfreie Apothekengänge oder
          sonstige Besorgungen.
        </p>
      </section>

      <Badge className="center-text margin-top">
        <div className="sparse">
          <span className="red fat uppercase">Melden sie sich unter</span>
          <br />
          <span className="thin">0531 1805 9703</span>
        </div>
      </Badge>
    </main>

    <main>
      <h1>So funktioniert es</h1>

      <section className="column">
        <ol>
          <li>
            Melden Sie sich bei uns unter{' '}
            <span className="nowrap">0531 1805 9703</span>
          </li>
          <li>Ein Einkaufshelfer wird Ihnen zugeteilt und meldet sich.</li>
        </ol>
      </section>

      <section className="row cols-2">
        <p className="right-text">Absprache per Telefon</p>
        <p></p>
      </section>

      <section className="row cols-2">
        <p></p>
        <p className="left-text">Geldumschlag und Einkaufsliste abholen</p>
      </section>

      <section className="row cols-2">
        <p className="right-text">Einkauf</p>
        <p></p>
      </section>

      <section className="row cols-2">
        <p></p>
        <p className="left-text">Lieferung</p>
      </section>

      <section className="row cols-2">
        <p className="right-text">Wechselgeld aushändigen</p>
        <p>* Einkauf auch per PayPal möglich</p>
      </section>
    </main>

    <style jsx>{`
      main {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        background-color: ${theme.colors.lightblue};
      }

      main:nth-child(2) {
        background-color: ${theme.colors.creamwhite};
      }

      main > * {
        max-width: 52rem;
        margin: 0 auto;
        width: 100%;
      }

      h1 {
        margin: 0;
      }

      ol {
        list-style: none;
        counter-reset: li;
        display: flex;
        flex-direction: row;
        padding: 0;
      }

      li::before {
        position: absolute;
        top: 0;
        content: counter(li) '.';
        color: ${theme.colors.red};
        display: inline-block;
        margin-left: -1em;
        font-size: 3em;
        line-height: 1;
      }

      li {
        flex: 1;
        position: relative;
        counter-increment: li;
        padding-left: 3em;
        margin: 0 2em;
        line-height: 1.5;
      }

      section.cols-2 {
        background-image: url(data:image/svg+xml;utf8,%3Csvg%20height%3D%22100%22%20width%3D%224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20height%3D%22100%22%20width%3D%224%22%20y%3D%220%22%20x%3D%220%22%20stroke-width%3D%220%22%20fill%3D%22%23545d8e%22%2F%3E%0A%3C%2Fsvg%3E);
        background-repeat: repeat-y;
        background-position-x: center;

        padding: 1em 0;
      }

      section.cols-2 > * {
        margin: 0 1.5em;
        width: calc(50% - 3em);
      }

      section.cols-2 > *:first-child {
        position: relative;
      }

      section.cols-2 > *:first-child::after {
        content: '•';
        position: absolute;
        right: -0.95em;
        color: ${theme.colors.red};
        font-size: 2em;
        line-height: 0.5;
      }
    `}</style>
  </>
);

export default Home;
