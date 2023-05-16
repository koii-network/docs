import React from "react";
import ReactPlayer from "react-player/youtube";

const Media = () => {
  return (
    <div className=" w-full h-[300px] laptop-sm:w-[45%] md:w-1/2">
      <ReactPlayer
        url="https://youtu.be/p4m4qThshfg"
        playsinline
        controls
        width="100%"
        className="w-full"
        height="100%"
      />
    </div>
  );
};

export default Media;
