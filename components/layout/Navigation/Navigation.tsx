import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Navigation as NavigationFont, NavigationSmall } from '../../Typography';
import { TUBS, Sandkasten as SandkastenLogo } from '../../Icons';
import { Row, useMediaQuery } from '../../Grid';
import { breakpoints } from '../theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  overflow: auto;

  ${({ theme }): string => `
    height: ${theme.grid.navigation.height};
    padding: 0 10px;
    background-color: ${theme.colors.bluewhite};
  
    ${breakpoints.medium(`
        padding: 0 ${theme.grid.layout.right.small} 0 ${theme.grid.layout.left.small};
    `)}
  
  `};
`;

const MainNav = styled(NavigationFont)`
  a {
    &:after {
      content: '|';
      margin: 0 0.4em;
    }

    &:last-child:after {
      content: '';
    }
  }
`;

const PartnerLogos = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 419px;

  ${({ theme }): string => `
    height: ${theme.grid.navigation.height};
    background-color: ${theme.colors.darkred};
  `}
`;

const Sandkasten = styled(SandkastenLogo)`
  position: absolute;
  right: -5rem;
`;

const SubNavigation = styled(NavigationSmall)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${({ theme }): string => `
    padding: 0 ${theme.grid.layout.right} 0 ${theme.grid.layout.left.small};
    height: ${theme.grid.navigation.subnav.height};
  `}

  a {
    &:after {
      content: '|';
      margin: 0 0.4em;
    }

    &:last-child:after {
      content: '';
    }
  }
`;

export const Navigation: React.FC = () => {
  const isLarge = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Container>
        <MainNav>
          <a href="#über-uns">Über uns</a>
          <a href="#so-funktioniert-es">So funktioniert es</a>
          <a href="#helfer-werden">Helfer werden</a>
          <a href="#partner">Partner</a>
        </MainNav>

        {isLarge && (
          <PartnerLogos>
            <TUBS size={240} />
            <Sandkasten size={168} />
          </PartnerLogos>
        )}
      </Container>

      <Row right nomargin>
        <SubNavigation>
          <Link href="/datenschutzerklärung">
            <a>Datenschutzerklärung</a>
          </Link>
          <Link href="/impressum-kontakt">
            <a>Impressum & Kontakt</a>
          </Link>
        </SubNavigation>
      </Row>
    </>
  );
};
