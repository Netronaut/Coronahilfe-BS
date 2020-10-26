// borrowed and based upon https://raw.githubusercontent.com/bence-toth/react-hook-media-query/master/src/index.js
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [doesMatch, onSetDoesMatch] = useState(false);

  useEffect(() => {
    const onUpdateMatch = ({ matches }: { matches: boolean }): void => {
      onSetDoesMatch(matches);
    };

    const matcher = window.matchMedia(query);

    const isModern = 'addEventListener' in matcher;
    if (isModern) {
      matcher.addEventListener('change', onUpdateMatch);
    } else {
      matcher.addListener(onUpdateMatch);
    }

    onUpdateMatch(matcher);

    return (): void => {
      if (isModern) {
        matcher.removeEventListener('change', onUpdateMatch);
      } else {
        matcher.removeListener(onUpdateMatch);
      }
    };
  }, [query, onSetDoesMatch]);

  return doesMatch;
};
