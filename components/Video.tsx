type VideoProps = {
  src: string;
  className?: string;
};

export const Video: React.FC<VideoProps> = ({ src, className }) => (
  <div className={className}>
    <iframe
      height="300"
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
