import React, { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  object-fit: contain;
`;

export type IconProps = {
  size?: number;
};

export const Icon: React.FC<IconProps &
  ImgHTMLAttributes<HTMLImageElement>> = ({ size, ...props }) => (
  <Image style={{ width: `${size}px`, height: `${size}px` }} {...props} />
);

export const Cart: React.FC<IconProps> = props => (
  <Icon src="icons/cart.svg" alt="cart" {...props} />
);

export const Grocery: React.FC<IconProps> = props => (
  <Icon src="icons/grocery.svg" alt="grocery" {...props} />
);

export const Money: React.FC<IconProps> = props => (
  <Icon src="icons/money.svg" alt="money" {...props} />
);

export const Money2: React.FC<IconProps> = props => (
  <Icon src="icons/money 2.svg" alt="money 2" {...props} />
);

export const POI: React.FC<IconProps> = props => (
  <Icon src="icons/poi.svg" alt="poi" {...props} />
);

export const Telephone: React.FC<IconProps> = props => (
  <Icon src="icons/telephone.svg" alt="telephone" {...props} />
);

export const TUBS: React.FC<IconProps> = props => (
  <Icon src="icons/tu-bs-logo.png" alt="tu-bs-logo" {...props} />
);

export const Sandkasten: React.FC<IconProps> = props => (
  <Icon src="icons/sandkasten-logo.png" alt="sandkasten-logo" {...props} />
);

export const Rotary: React.FC<IconProps> = props => (
  <Icon src="icons/rotary-logo.png" alt="rotary-logo" {...props} />
);

export const Netronaut: React.FC<IconProps> = props => (
  <a href="https://netronaut.de" target="blank">
    <Icon src="icons/netronaut-logo.svg" alt="netronaut-logo" {...props} />
  </a>
);
