import React from 'react';
import styled from 'styled-components';
import { POI as POIIcon, Telephone, Money, Cart, Grocery, Money2 } from './Icons';
import { Body } from './Typography';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Banner = styled.div`
  position: absolute;
  height: 535px;
  backgrouns-color: ${({ theme }): string => theme.colors.bluewhite};
`;

const POI = styled(POIIcon)`
  position: absolute;
  top: -5rem;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  ${({
    theme: {
      colors,
      grid: { margin, process },
    },
  }): string => `
    padding: ${margin.xxxl} 0;
    width: ${process.width};
    border: ${process.border.width} solid ${colors.blue};
    border-radius: ${process.border.radius};
  `}
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${({
    theme: {
      grid: { margin },
    },
  }): string => `
    padding: ${margin.l};
  `}

  > * {
    &:first-child {
      flex: 1;
      text-align: right;
      align-self: right;
    }

    &:last-child {
      flex: 1;
      text-align: left;
    }
  }
`;

const Dot = styled.div`
  width: calc(${({ theme }): string => theme.grid.margin.xxxl} * 2);
  flex-shrink: 0;

  &:before {
    content: '';
    position: absolute;
    z-index: 2;
    left: calc(50% - 0.5rem);
    background-color: ${({ theme }): string => theme.colors.red};
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    height: calc(100% + 0.5rem);
    top: calc(50% + 0.5rem);
    left: calc(50% - 2.5px);
    border-right: 5px solid ${({ theme }): string => theme.colors.blue};
  }

  &.last:after {
    border: none;
  }
`;

export const Process: React.FC = () => (
  <Container>
    <Banner />
    <POI size={148} />
    <Group>
      <Item>
        <Body>Absprache per Telefon</Body>
        <Dot />
        <div>
          <Telephone size={120} />
        </div>
      </Item>
      <Item>
        <div>
          <Money size={120} />
        </div>
        <Dot />
        <Body>Geldumschlag und Einkaufsliste abholen</Body>
      </Item>
      <Item>
        <Body>Einkauf</Body>
        <Dot />
        <div>
          <Cart size={120} />
        </div>
      </Item>
      <Item>
        <div>
          <Grocery size={120} />
        </div>
        <Dot />
        <Body>Lieferung</Body>
      </Item>
      <Item>
        <Body>Wechselgeld aushändigen</Body>
        <Dot className="last" />
        <div>
          <Money2 size={120} />
        </div>
      </Item>
    </Group>
  </Container>
);
