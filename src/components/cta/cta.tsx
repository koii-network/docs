import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Card from "../newHome/Card";
import SocialLinks from "../newHome/SocialLinks";

export const Cta = () => {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig.customFields as { baseUrl: string };
  const [latestVersion, setLatestVersion] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      setIsMobile(
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent,
        ),
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Fetch latest release version
    fetch("https://api.github.com/repos/koii-network/koii-node/releases/latest")
      .then((response) => response.json())
      .then((data) => {
        const version = data.tag_name.replace("v", "");
        setLatestVersion(version);
      })
      .catch(() => {
        setLatestVersion("1.1.4");
      });

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getLatestReleaseDownloadUrl = () => {
    if (isMobile) {
      return "https://www.koii.network/nodes";
    }

    if (!latestVersion) {
      return "https://github.com/koii-network/koii-node/releases/latest";
    }

    const baseUrl = `https://github.com/koii-network/koii-node/releases/download/v${latestVersion}`;
    const platform = window.navigator.platform.toLowerCase();

    if (platform.includes("win")) {
      return `${baseUrl}/koii-node-${latestVersion}-win-x64.exe`;
    } else if (platform.includes("mac")) {
      return `${baseUrl}/koii-node-${latestVersion}-mac-universal.dmg`;
    } else if (platform.includes("linux")) {
      return `${baseUrl}/koii-node-${latestVersion}-linux-amd64.deb`;
    }

    return "https://github.com/koii-network/koii-node/releases/latest";
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const downloadUrl = getLatestReleaseDownloadUrl();
      window.location.href = downloadUrl;
    }
  };

  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_run_node");
    }
  };
  const scrollToPlayerWrapper = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(".player-wrapper");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <section className="w-full px-4 md:px-8 max-w-[1300px] mx-auto flex flex-col gap-5 lg:gap-10 items-center mb-8">
      <section className="w-full flex flex-col gap-6">
        {/* First row */}
        <Card
          title="What is KOii?"
          description="We're building the common infrastructure for better information. The Knowledgeable Open and Infinite Internet has the power to connect everyone, everywhere. We are providing the AI revolution for the people, by the people."
          image={`${baseUrl}/img/write-task.svg`}
          imageHeight=""
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center p-4">
            <div className="flex gap-x-2">
              <SocialLinks />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="https://www.koii.network/docs/concepts/what-are-tasks/what-are-tasks/gradual-consensus"
                  className="hover:no-underline"
                >
                  How it Works
                </a>
              </button>
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.koii.network/whitepaper.pdf"
                  className="hover:no-underline"
                >
                  Whitepaper
                </a>
              </button>
            </div>
          </div>
        </Card>

        {/* Second row */}
        <section className="flex flex-col md:flex-row gap-6">
          {/* First card */}
          <Card
            title="EZWay"
            description="Get started the fast way with open templates. Built for beginners and fast-lane experts, the EZSandbox provides a standard foundation for a simple future."
            image={`${baseUrl}/img/new-home/Tools.png`}
            imageHeight="h-[233.8px]"
            descriptionHeight="h-[7.5rem]"
            badges={[
              { text: "JavaScript", color: "#F7DF1E", textColor: "#000000" },
              { text: "TypeScript", color: "#3178C6", textColor: "#FFFFFF" },
            ]}
          >
            <div className="flex gap-x-2 justify-end items-center p-4">
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="https://www.koii.network/docs/develop/task-development/write-a-task"
                  className="hover:no-underline"
                >
                  More
                </a>
              </button>
            </div>
          </Card>

          {/* Second card */}
          <Card
            title="Orca Containers"
            description="Docker images on Koii's network of edge devices provide a stable foundation for any kind of application. Deploy your machine learning workload, host an existing app, or augment existing systems with edge compute for caching, storage, and more."
            image={`${baseUrl}/img/new-home/orca.png`}
            imageHeight="h-[233.8px]"
            badges={[
              { text: "Docker", color: "#2496ED", textColor: "#FFFFFF" },
              { text: "Python", color: "#3776AB", textColor: "#FFFFFF" },
              { text: "Rust", color: "#000000", textColor: "#FFFFFF" },
              { text: "Java", color: "#007396", textColor: "#FFFFFF" },
              { text: "Solidity", color: "#363636", textColor: "#FFFFFF" },
            ]}
          >
            <div className="flex gap-x-2 justify-end items-center p-4">
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="/docs/develop/write-a-koii-task/orca/intro"
                  className="hover:no-underline"
                >
                  More
                </a>
              </button>
            </div>
          </Card>
        </section>

        {/* Third row */}
        <section className="flex flex-col md:flex-row gap-6">
          {/* First card */}
          <Card
            title="Anthropic"
            description="Deploy agents with Claude to write code, build products, and optimize existing systems."
            image={`${baseUrl}/img/new-home/anthropic.png`}
            imageHeight="h-[233.8px]"
          >
            <div className="flex gap-x-2 justify-end items-center p-4">
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="https://prometheusswarm.ai/create-bounty"
                  className="hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Prometheus
                </a>
              </button>
            </div>
          </Card>

          {/* Second card */}
          <Card
            title="OpenAI"
            description="Get direct access to the world's most powerful reasoning AI, great for planning, designing, and research."
            image={`${baseUrl}/img/new-home/openai.png`}
            imageHeight="h-[233.8px]"
          >
            <div className="flex gap-x-2 justify-end items-center p-4">
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="https://prometheusswarm.ai/create-bounty"
                  className="hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pay in Any Token
                </a>
              </button>
            </div>
          </Card>

          {/* Third card */}
          <Card
            title="HuggingFace"
            description="Our favorite open tech stack- choose a model and deploy to Koii nodes."
            image={`${baseUrl}/img/new-home/huggingface.svg`}
            imageHeight="h-[233.8px]"
            descriptionHeight="h-[4.5rem]"
          >
            <div className="flex gap-x-2 justify-end items-center p-4">
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="/docs/develop/write-a-koii-task/orca/develop-an-orca-task#hugging-face"
                  className="hover:no-underline"
                >
                  Integrate Any Model
                </a>
              </button>
            </div>
          </Card>
        </section>

        {/* Fourth row */}
        <section className="flex flex-col md:flex-row gap-6">
          {/* First card */}
          <Card
            title="$KOII"
            description="Our native token is used to pay transaction fees within the compute network, and can be staked on K2 nodes to provide stable returns and exposure to the Koii ecosystem."
            image={`${baseUrl}/img/new-home/KOII.png`}
            imageHeight="h-[233.8px]"
          >
            <div className="flex gap-x-2 justify-end items-center p-4">
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="https://coinmarketcap.com/currencies/koii/"
                  className="hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trade $KOII
                </a>
              </button>
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="#"
                  className="hover:no-underline"
                  onClick={scrollToPlayerWrapper}
                >
                  Earn Koii
                </a>
              </button>
            </div>
          </Card>

          {/* Second card */}
          <Card
            title="K2"
            description="Koii's native blockchain uses a copy of the Solana Virtual Machine, built with capacity for over 10 billion compute devices."
            image={`${baseUrl}/img/new-home/K2.png`}
            imageHeight="h-[233.8px]"
            descriptionHeight="h-[4.5rem]"
          >
            <div className="flex gap-x-2 justify-end items-center p-4">
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="https://www.koii.network/docs/programDev/Program/MigrateProgram"
                  className="hover:no-underline"
                >
                  Deploy Smart Contracts
                </a>
              </button>
            </div>
          </Card>
        </section>

        {/* Join the Fun section */}
        <section className="flex gap-x-12">
          <Card image="">
            <div className="flex flex-col md:flex-row gap-6 px-4 py-6">
              <div className="flex flex-col w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Join the Fun</h2>
                <p className="mb-6">
                  Install Koii on any computer in under 5 minutes, and start
                  growing your share of the new web.
                  <br />
                  <br />
                  Support projects, earn tokens, and help change the world.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-x-2 justify-start items-center">
                    <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                      <a
                        href="#"
                        className="hover:no-underline"
                        onClick={handleDownload}
                      >
                        Install Koii
                      </a>
                    </button>
                  </div>

                  {/* OS Icons */}
                  <div className="flex gap-3 items-center text-koii-purple-2 text-sm">
                    <span className="flex items-center gap-1">
                      <img
                        src={`${baseUrl}/img/os/windows.svg`}
                        alt="Windows"
                        className="w-4 h-4"
                      />
                    </span>
                    <span className="flex items-center gap-1">
                      <img
                        src={`${baseUrl}/img/os/apple.svg`}
                        alt="macOS"
                        className="w-4 h-4"
                      />
                    </span>
                    <span className="flex items-center gap-1">
                      <img
                        src={`${baseUrl}/img/os/linux.svg`}
                        alt="Linux"
                        className="w-4 h-4"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="player-wrapper aspect-video w-full md:w-1/2">
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=p4m4qThshfg&ab_channel=KoiiNetwork"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </Card>
        </section>
      </section>
    </section>
  );
};
