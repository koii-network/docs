import React from "react";
import ReactPlayer from "react-player/youtube";

const Media = () => {
  return (
    <div className="md:w-3/5 w-full h-[300px] laptop-sm:w-[45%] laptop-sm:h-[405px] lg:h-[525px] md:h-[525px] lg:w-1/2">
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
