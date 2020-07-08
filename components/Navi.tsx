import React from 'react';
import Link from 'next/link';
import { theme } from './theme';
import { HomeLogo } from './HomeLogo';

export const Navi = () => (
  <nav className="navi">
    <Link href="/">
      <a className="home">
        <HomeLogo />
      </a>
    </Link>
    <Link href="/hilfe">
      <a>Hilfe</a>
    </Link>
    <Link href="/helfer">
      <a>Helfer</a>
    </Link>
    <Link href="/datenschutz">
      <a>Datenschutz</a>
    </Link>

    <style jsx>{`
      .navi {
        display: flex;
        flex-direction: row;
        align-items: center;

        height: 2.4rem;
        padding: 0 1em;

        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
      }

      .navi a {
        padding: 0 0.5em;
        align-items: center;
        display: flex;

        height: 100%;

        text-decoration: none;
        color: inherit;
        background-color: transparent;
      }

      .navi a:hover {
        color: white;
        background-color: ${theme.colors.accent};
      }
    `}</style>
    <style global jsx>{`
      .home:hover svg line {
        stroke: white;
      }
    `}</style>
  </nav>
);
