import React, { ReactComponentElement } from 'react';
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
} from '../components/Icons';
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

const IconCardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 120px;
  box-shadow: 2px 2px 6px -2px rgba(0, 0, 0, 0.5);
  padding: 12px;
`;

const IconCardTitle = styled.div`
  padding: 0.5em;
`;

const IconCard: React.FC<{ icon: ReactComponentElement<any, {}> }> = ({
  icon,
}) => {
  return (
    <div>
      <IconCardImage>
        <icon.type size={96} />
      </IconCardImage>
      <IconCardTitle>&lt;{icon.type.name} /&gt;</IconCardTitle>
    </div>
  );
};

export const Icons: React.FC = () => (
  <>
    <h2>Images</h2>
    <IconGroup>
      <IconCard icon={<Cart />} />
      <IconCard icon={<Grocery />} />
      <IconCard icon={<Money />} />
      <IconCard icon={<Money2 />} />
      <IconCard icon={<POI />} />
      <IconCard icon={<Telephone />} />
    </IconGroup>

    <h2>Partner logos</h2>
    <IconGroup>
      <IconCard icon={<Sandkasten />} />
      <IconCard icon={<TUBS />} />
      <IconCard icon={<Netronaut />} />
      <IconCard icon={<Rotary />} />
    </IconGroup>
  </>
);
