import React from 'react';
import {
  Cart,
  TUBS,
  Grocery,
  Money2,
  Money,
  Netronaut,
  Rotary,
  Sandkasten,
  POI,
  Telephone,
} from './Icons';
import styled from 'styled-components';

export default {
  title: 'Design',
};

const IconGroup = styled.section`
  display: flex;
  > * {
    margin: 1em;
  }
`;

const size = '96px';

export const Icons: React.FC = () => (
  <>
    <h2>Images</h2>
    <IconGroup>
      <Cart height={size} />
      <Grocery height={size} />
      <Money height={size} />
      <Money2 height={size} />
      <POI height={size} />
      <Telephone height={size} />
    </IconGroup>

    <h2>Partner logos</h2>
    <IconGroup>
      <Sandkasten height={size} />
      <TUBS height={size} />
      <Netronaut height={size} />
      <Rotary height={size} />
    </IconGroup>
  </>
);
