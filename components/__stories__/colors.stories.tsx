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
`;

const ColorList = styled.section`
  display: flex;
  > * {
    margin: 0.4em;
  }
`;

export const Colors = () => (
  <ThemeConsumer>
    {theme => (
      <ColorList>
        <ColorTile color={theme.colors.blue} />
        <ColorTile color={theme.colors.lightblue} />
        <ColorTile color={theme.colors.bluewhite} />
        <ColorTile color={theme.colors.creamwhite} />
        <ColorTile color={theme.colors.red} />
      </ColorList>
    )}
  </ThemeConsumer>
);
