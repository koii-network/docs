import React from "react";
import ReactPlayer from "react-player";
import Card from "../newHome/Card";

const JoinTheFun = () => {
  const url =
    "https://www.youtube.com/watch?v=p4m4qThshfg&ab_channel=KoiiNetwork";

  return (
    <section className="mb-10 mx-auto xl:max-w-[1300px] lg:max-w-[1024px] w-100 px-[2rem]">
      <Card
        title=""
        description=""
        image=""
      >
        <div className="flex gap-x-6">
          <div className="flex flex-col w-1/2">
            <h2 className="text-2xl font-bold mb-4">Join the Fun</h2>
            <p className="mb-6">
              Install Koii on any computer in under 5 minutes, and start growing your share of the new web.
              <br /><br />
              Support projects, earn tokens, and help change the world.
            </p>
            <div className="flex gap-x-2 justify-start items-center">
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="https://www.koii.network/nodes"
                  className="hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install Koii
                </a>
              </button>
            </div>
          </div>
          
          <div className="player-wrapper aspect-video w-1/2">
            <ReactPlayer
              className="react-player"
              url={url}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}

export default JoinTheFun;