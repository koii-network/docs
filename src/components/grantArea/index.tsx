import React from "react";
import ReactPlayer from "react-player";

export const GrantArea = () => {
  const url =
    "https://www.youtube.com/watch?v=p4m4qThshfg&ab_channel=KoiiNetwork";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2 className={"mt-4 mb-10"}>Koii Founder Support Program</h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=p4m4qThshfg&ab_channel=KoiiNetwork" width="500px" height="500px" />
    </div>
  );
};
