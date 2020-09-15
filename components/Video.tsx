import React from 'react';

interface VideoProps {
  src: string;
  className?: string;
  width: number;
  height: number;
}

export const Video: React.FC<VideoProps> = ({ src, className, width, height }) => (
  <div className={className}>
    <iframe
      width={width}
      height={height}
      src={src}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
    <style jsx>{`
      width: 100%;
      max-width: 52rem;

      align-self: center;

      iframe {
        width: 100%;
      }
    `}</style>
  </div>
);
