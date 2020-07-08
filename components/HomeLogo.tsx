import React from 'react';

export const HomeLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <g
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="miter"
      fill="none"
    >
      <line x1="5" y1="40" x2="50" y2="5" />
      <line x1="50" y1="5" x2="95" y2="40" />
      <line x1="95" y1="40" x2="95" y2="95" />
      <line x1="95" y1="95" x2="5" y2="95" />
      <line x1="5" y1="95" x2="5" y2="40" />
    </g>
    <style jsx>{`
      width: 1em;
      height: 1em;
      stroke: black;
    `}</style>
  </svg>
);
