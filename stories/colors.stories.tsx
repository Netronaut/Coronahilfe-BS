import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

export default {
  title: 'Design',
};

const ColorTile = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${props => props.color};
  box-shadow: 2px 2px 6px -2px rgba(0, 0, 0, 0.5);
  padding-top: 4rem;
`;

const ColorList = styled.section`
  display: flex;
  > * {
    margin: 1em;
  }
`;

export const Colors = () => (
  <ThemeConsumer>
    {theme => (
      <ColorList>
        <ColorTile color={theme.colors.blue}>blue</ColorTile>
        <ColorTile color={theme.colors.lightblue}>lightblue</ColorTile>
        <ColorTile color={theme.colors.bluewhite}>bluewhite</ColorTile>
        <ColorTile color={theme.colors.creamwhite}>creamwhite</ColorTile>
        <ColorTile color={theme.colors.red}>red</ColorTile>
      </ColorList>
    )}
  </ThemeConsumer>
);
