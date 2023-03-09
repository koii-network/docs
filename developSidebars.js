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
