import React from 'react';
import clsx from 'classnames';
import { theme } from './theme';

type BadgeProps = {
  className?: string;
};

export const Badge: React.FC<BadgeProps> = ({ children, className }) => (
  <div className={clsx(className)}>
    {children}
    <style jsx>{`
      background-color: ${theme.colors.creamwhite};
      padding: 0.5em;
      font-size: 250%;
      border-radius: 0.5em;
      border: 4px solid ${theme.colors.darkblue};
      color: ${theme.colors.darkblue};
      line-height: 1;
      align-self: center;
    `}</style>
  </div>
);
