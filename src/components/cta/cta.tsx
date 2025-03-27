import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Card from "../newHome/Card";
import SocialLinks from "../newHome/SocialLinks";

export const Cta = () => {
	const { siteConfig } = useDocusaurusContext();
	const { baseUrl } = siteConfig.customFields as { baseUrl: string };
	const handleClick = () => {
		if (typeof window !== 'undefined' && window.gtag) {
			window.gtag("event", "click_run_node");
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
          <div className="flex gap-x-2 justify-between items-center p-4">
            <div className="flex gap-x-2">
              <SocialLinks />
            </div>

            <div className="flex gap-x-2">
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
        <section className="flex gap-x-6">
          {/* First card */}
          <Card
            title="EZWay"
            description="Get started the fast way with open templates. Built for beginners and fast-lane experts, the EZSandbox provides a standard foundation for a simple future."
            image={`${baseUrl}/img/mint-tokens.svg`}
            descriptionHeight="h-[7.5rem]"
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
            description="Docker images on Koii’s network of edge devices provide a stable foundation for any kind of application. Deploy your machine learning workload, host an existing app, or augment existing systems with edge compute for caching, storage, and more."
            image={`${baseUrl}/img/new-home/orca.png`}
            imageHeight="h-[233.8px]"
          >
            <div className="flex gap-x-2 justify-end items-center p-4">
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="https://www.koii.network/docs/develop/write-a-koii-task/orca/develop-an-orca-task"
                  className="hover:no-underline"
                >
                  More
                </a>
              </button>
            </div>
          </Card>
        </section>

        {/* Third row */}
        <section className="flex gap-x-6">
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
            description="Get direct access to the world’s most powerful reasoning AI, great for planning, designing, and research."
            image={`${baseUrl}/img/new-home/openai.png`}
            imageHeight="h-[233.8px]"
          >
            <div className="flex gap-x-2 justify-end items-center p-4">
              <button className="border cursor-pointer border-koii-purple-2 rounded-full px-4 py-2 bg-transparent text-koii-purple-2">
                <a
                  href="https://prometheusswarm.ai"
                  className="hover:no-underline"
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
                  href="https://www.koii.network/docs/develop/write-a-koii-task/orca/develop-an-orca-task"
                  className="hover:no-underline"
                >
                  Integrate Any Model
                </a>
              </button>
            </div>
          </Card>
        </section>

        {/* Third row */}
        <section className="flex gap-x-6">
          {/* First card */}
          <Card
            title="$KOII"
            description="Our native token is used to pay transaction fees within the compute network, and can be staked on K2 nodes to provide stable returns and exposure to the Koii ecosystem."
            image={`${baseUrl}/img/new-home/anthropic.png`}
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
                <a href="#join-the-fun" className="hover:no-underline">
                  Earn Koii
                </a>
              </button>
            </div>
          </Card>

          {/* Second card */}
          <Card
            title="K2"
            description="Koii’s native blockchain uses a copy of the Solana Virtual Machine, built with capacity for over 10 billion compute devices."
            image={`${baseUrl}/img/new-home/openai.png`}
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

        <section></section>
      </section>
    </section>
  );
};
