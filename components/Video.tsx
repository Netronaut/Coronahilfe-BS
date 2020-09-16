import React from 'react';
import styled from 'styled-components';

interface VideoProps {
  src: string;
  className?: string;
  width: number;
  height: number;
}

const VideoContainer = styled.div`
  width: 100%;
  max-width: 52rem;

  align-self: center;

  iframe {
    width: 100%;
  }
`;

export const Video: React.FC<VideoProps> = ({ src, width, height }) => (
  <VideoContainer>
    <iframe
      width={width}
      height={height}
      src={src}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  </VideoContainer>
);
