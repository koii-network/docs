import React from "react";
import ReactPlayer from "react-player";

interface PlayerProps {
  link: string;
}

const VideoPlayer: React.FC<PlayerProps> = ({ link }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ReactPlayer url={link} />
    </div>
  );
};

export default VideoPlayer;
