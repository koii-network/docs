import React from "react";
import ReactPlayer from "react-player";

const JoinTheFun = () => {
  const url =
    "https://www.youtube.com/watch?v=p4m4qThshfg&ab_channel=KoiiNetwork";

  return (
    <section className="mb-10 mx-auto xl:max-w-[1300px] lg:max-w-[1024px] w-100 px-[2rem] ">
      <div className="flex w-full items-center border border-koii-purple-2 rounded-lg">
        <h2 className="font-bold">Join the Fun</h2>
        <div className="player-wrapper">
          <ReactPlayer className="react-player" url={url} width="100%" />
        </div>
      </div>
    </section>
  );
}
export default JoinTheFun