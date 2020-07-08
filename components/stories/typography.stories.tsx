import React from 'react';
import {
  Body,
  Headline,
  TwoLine,
  Secondary,
  Hero,
  Meta,
  Navigation,
  NavigationMedium,
  Splash,
} from '../Typography';
import styled from 'styled-components';

export default {
  title: 'Design',
};

const FontList = styled.section`
  > * {
    margin: 0;
    padding: 1rem;
    border-bottom: 1px solid lightgray;
  }
`;

export const Typography = () => (
  <FontList>
    <Body>Body &mdash; Roboto Regular 24</Body>
    <Headline>Headline &mdash; Roboto Black 51</Headline>
    <TwoLine>TwoLine &mdash; Roboto Bold 70</TwoLine>
    <Secondary>Secondary &mdash; Roboto Bold 28</Secondary>
    <Hero>Hero &mdash; Roboto Medium Italic 28</Hero>
    <Meta>Meta &mdash; Roboto Regular 14</Meta>
    <Navigation>Navigation &mdash; Roboto Medium 28</Navigation>
    <NavigationMedium>
      NavigationMedium &mdash; Roboto Medium 18
    </NavigationMedium>
    <Splash>Splash &mdash; Roboto-Condensed Regular 44</Splash>
  </FontList>
);
