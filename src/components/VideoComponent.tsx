import React, { useEffect, useState } from 'react';

interface VideoComponentProps {
  videoSrc: string;
  width?: string;
  height?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoSrc, width = "700", height = "auto" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <video width={width} height={height} controls autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
};

export default VideoComponent;