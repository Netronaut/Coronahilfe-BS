import React from 'react';
import {
  Body,
  Headline,
  TwoLine,
  Secondary,
  Hero,
  Navigation,
  NavigationSmall,
  Splash,
  LogoLower,
} from '../components/Typography';
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

export const Typography = (): React.ReactNode => (
  <FontList>
    <Body>Body &mdash; Roboto Regular 24</Body>
    <Headline>Headline &mdash; Roboto Black 51</Headline>
    <TwoLine>TwoLine &mdash; Roboto Bold 70</TwoLine>
    <Secondary>Secondary &mdash; Roboto Bold 28</Secondary>
    <Hero>Hero &mdash; Roboto Medium Italic 28</Hero>
    <Navigation>Navigation &mdash; Roboto Medium 28</Navigation>
    <NavigationSmall>NavigationSmall &mdash; Roboto Medium 14</NavigationSmall>
    <Splash>Splash &mdash; Roboto-Condensed Regular 44</Splash>
    <LogoLower>LogoLower &mdash; Roboto Regular 51</LogoLower>
  </FontList>
);
