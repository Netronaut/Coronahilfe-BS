import Head from 'next/head';

const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>#EinkaufshilfeBS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Willkommen bei der <span className="accent">#EinkaufshilfeBS</span>
      </h1>

      <p className="description">
        Wir sind Feiwillige, die in der derzeitigen Krise helfen wollen.
      </p>

      <div className="grid">
        <a href="/hilfe" className="card">
          <h3>Hilfe gesucht? &rarr;</h3>
          <p>
            Schreibe uns dein Anliegen, wir finden den passenden Helfer für
            dich.
          </p>
        </a>

        <a href="/helfer" className="card">
          <h3>Helfer werden &rarr;</h3>
          <p>
            Hilf mit, Ältere und Angehörige von Risikogruppen jetzt aktiv zu
            unterstützen.
          </p>
        </a>

        <a href="/über-uns" className="card">
          <h3>Wer sind wir? &rarr;</h3>
          <p>Finde heraus, wer wir sind und warum wir uns engagieren.</p>
        </a>

        <a href="/datenschutz" className="card">
          <h3>Datenschutz &rarr;</h3>
          <p>
            Uns liegt der Schutz deiner Daten am Herzen. Lies hier mehr darüber.
          </p>
        </a>
      </div>
    </main>

    <style jsx>{`
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title,
      .description {
        text-align: center;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
  </div>
);

export default Home;
