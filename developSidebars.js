/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  content: [  
    {
      type: 'category',
      label: '🤑 Settlement Layer',
      collapsed: true,
      items: [
        'settlement-layer/k2-tick-tock-fast-blocks',
        {
          type: 'category',
          label: 'Native Contracts',
          collapsed: true,
          items: [
            'settlement-layer/the-attention-game',
            'settlement-layer/the-task-contract',
          ],
        },
        {
          type: 'category',
          label: 'Running a K2 Node',
          link: {
            type: 'doc',
            id: 'settlement-layer/running-a-k2-node',
          },
          collapsed: true,
          items: [
            'settlement-layer/system-requirements',
            'settlement-layer/setup-process',           
          ],
        },
        'settlement-layer/creating-tokens-on-k2',
        'settlement-layer/block-explorer',
        'settlement-layer/wallets',
        'settlement-layer/rent',
      ],
    },
    {
      type: 'category',
      label: '⚙ Koii Software Toolkit (SDK)',
      collapsed: true,
      items: [
        'koii-software-toolkit-sdk/what-is-the-koii-sdk',
        'koii-software-toolkit-sdk/koii-javascript-api',
        'koii-software-toolkit-sdk/using-the-cli',
        'koii-software-toolkit-sdk/task-node-cli',
        'koii-software-toolkit-sdk/create-task-cli',
        'koii-software-toolkit-sdk/wallet-and-faucet',
        {
          type: 'category',
          label: 'Wallet Functions',
          link: {
            type: 'doc',
            id: 'koii-software-toolkit-sdk/wallet-functions/wallet-functions',
          },
          collapsed: true,
          items: [
            'koii-software-toolkit-sdk/wallet-functions/load-wallet',
            'koii-software-toolkit-sdk/wallet-functions/generate-wallet',
          ],
        },
        {
          type: 'category',
          label: 'Register Content',
          link: {
            type: 'doc',
            id: 'koii-software-toolkit-sdk/register-content/register-content',
          },
          collapsed: true,
          items: [
            'koii-software-toolkit-sdk/register-content/burn-koii-attention',
          ],
        },
        {
          type: 'category',
          label: 'Basic Utility Functions',
          link: {
            type: 'doc',
            id: 'koii-software-toolkit-sdk/basic-utility-functions/basic-utility-functions',
          },
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Koii State',
              link: {
                type: 'doc',
                id: 'koii-software-toolkit-sdk/basic-utility-functions/koii-state/koii-state',
              },
              collapsed: true,
              items: [
                'koii-software-toolkit-sdk/basic-utility-functions/koii-state/getattentionid',
                'koii-software-toolkit-sdk/basic-utility-functions/koii-state/getkoiistate',
                'koii-software-toolkit-sdk/basic-utility-functions/koii-state/getkoibalance',
              ],
            },
            {
              type: 'category',
              label: 'NFTs',
              link: {
                type: 'doc',
                id: 'koii-software-toolkit-sdk/basic-utility-functions/nfts/nfts',
              },
              collapsed: true,
              items: [
                'koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftidsbyowner',
                'koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftreward',
                'koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftstate',
                'koii-software-toolkit-sdk/basic-utility-functions/nfts/getnsfwnfts',
              ],
            },
             {
              type: 'category',
              label: 'Arweave And General Utility',
              link: {
                type: 'doc',
                id: 'koii-software-toolkit-sdk/basic-utility-functions/arweave-and-general-utility/arweave-and-general-utility',
              },
              collapsed: true,
              items: [
                'koii-software-toolkit-sdk/basic-utility-functions/arweave-and-general-utility/getblockheight',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🐟 Finnie For Devs',
      collapsed: true,
      items: [
        'finnie-for-devs/welcome-to-finnie',
        'finnie-for-devs/connecting-finnie',
        {
          type: 'category',
          label: 'Koii Network',
          link: {
            type: "generated-index",
            description: "Here are the articles in this section"
          },
          collapsed: true,
          items: [
            'finnie-for-devs/koii-network/transfer-koii',
            'finnie-for-devs/koii-network/signpayload-koii',
            'finnie-for-devs/koii-network/transfer-ar',
            'finnie-for-devs/koii-network/transfernft',
          ],
        },
        {
          type: 'category',
          label: 'Ethereum Network',
          link: {
            type: "generated-index",
            description: "The following chapters will show you how you can use your Finnie wallet to interact with the Ethereum blockchain."
       },
          collapsed: true,
          items: [
            'finnie-for-devs/ethereum-network/send-eth',
            'finnie-for-devs/ethereum-network/send-eth-eip-1559',
            'finnie-for-devs/ethereum-network/contract-deployment',
            'finnie-for-devs/ethereum-network/mint-nft',
          ],
        },
        'finnie-for-devs/other-evm-chains',
      ],
    },
    {
      type: 'category',
      label: '🧙♂ 🧙♂Build Dapps with Koii',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: '👋 Welcome to Koii-X',
          link: {
            type: 'doc',
            id: 'build-dapps-with-koii/welcome-to-koii-x/welcome-to-koii-x',
          },
          collapsed: true,
          items: [
            'build-dapps-with-koii/welcome-to-koii-x/quick-start',
            'build-dapps-with-koii/welcome-to-koii-x/site-metadata',
            'build-dapps-with-koii/welcome-to-koii-x/tech-stack',
            'build-dapps-with-koii/welcome-to-koii-x/environment',
          ],
        },
        {
          type: 'category',
          label: '🎨 Using NFTs as Content',
          link: {
            type: 'doc',
            id: 'build-dapps-with-koii/using-nfts-as-content/using-nfts-as-content',
          },
          collapsed: true,
          items: [
            'build-dapps-with-koii/using-nfts-as-content/create-nfts',
            'build-dapps-with-koii/using-nfts-as-content/fetching-nft-data',
            'build-dapps-with-koii/using-nfts-as-content/display-nfts',
            'build-dapps-with-koii/using-nfts-as-content/lists-and-leaderboards',
            'build-dapps-with-koii/using-nfts-as-content/using-thumbnails',
            'build-dapps-with-koii/using-nfts-as-content/koii-bridges',
          ],
        },
        {
          type: 'category',
          label: '🤖 Integrating Wallets',
          link: {
            type: 'doc',
            id: 'build-dapps-with-koii/integrating-wallets/integrating-wallets',
          },
          collapsed: true,
          items: [
            'build-dapps-with-koii/integrating-wallets/accepting-payments',
            'build-dapps-with-koii/integrating-wallets/ethereum-metamask',
            'build-dapps-with-koii/integrating-wallets/finnie-wallet',
            'build-dapps-with-koii/integrating-wallets/other-wallets',
          ],
        },
        {
          type: 'category',
          label: '🚚 Template Library',
          link: {
            type: 'doc',
            id: 'build-dapps-with-koii/template-library/template-library',
          },
          collapsed: true,
          items: [
            'build-dapps-with-koii/template-library/site-meta-data',
            {
              type: 'category',
              label: '💡 UI Template Layout',
              link: {
                type: 'doc',
                id: 'build-dapps-with-koii/template-library/ui-template-layout/ui-template-layout',
              },
              collapsed: true,
              items: [
                'build-dapps-with-koii/template-library/ui-template-layout/box',
                'build-dapps-with-koii/template-library/ui-template-layout/simplegrid',
                'build-dapps-with-koii/template-library/ui-template-layout/button-and-button-group',
              ],
            },
            {
              type: 'category',
              label: '📃 Leaderboard App',
              link: {
                type: 'doc',
                id: 'build-dapps-with-koii/template-library/leaderboard-app/leaderboard-app',
              },
              collapsed: true,
              items: [
                'build-dapps-with-koii/template-library/leaderboard-app/basic-setup',
                {
                  type: 'category',
                  label: 'Customization',
                  link: {
                    type: 'doc',
                    id: 'build-dapps-with-koii/template-library/leaderboard-app/customization/customization',
                  },
                  collapsed: true,
                  items: [
                    'build-dapps-with-koii/template-library/leaderboard-app/customization/preview-info',
                    'build-dapps-with-koii/template-library/leaderboard-app/customization/services',
                    'build-dapps-with-koii/template-library/leaderboard-app/customization/pages',
                    'build-dapps-with-koii/template-library/leaderboard-app/customization/assets',
                    'build-dapps-with-koii/template-library/leaderboard-app/customization/components',
                    'build-dapps-with-koii/template-library/leaderboard-app/customization/internal-api-hooks',
                    'build-dapps-with-koii/template-library/leaderboard-app/customization/search',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: '💰 Crowdfunding Portal',
              link: {
                type: 'doc',
                id: 'build-dapps-with-koii/template-library/crowdfunding-portal/crowdfunding-portal',
              },
              collapsed: true,
              items: [
                'build-dapps-with-koii/template-library/crowdfunding-portal/installation',
                'build-dapps-with-koii/template-library/crowdfunding-portal/customization',
                'build-dapps-with-koii/template-library/crowdfunding-portal/currencies-and-wallets',
              ],
            },
            'build-dapps-with-koii/template-library/deploy',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '❕ Support',
      collapsed: true,
      items: [
        'support/community-forums',
        'support/contact-support',
      ],
    },
  ],
};

module.exports = sidebars;
