import React from "react";
import ReactPlayer from "react-player";

interface PlayerProps {
  link: string;
}

const VideoPlayer: React.FC<PlayerProps> = ({ link }) => {
  return (
    <div>
      <ReactPlayer url={link} />
    </div>
  );
};

export default VideoPlayer;
