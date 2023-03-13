import Description from "@site/src/components/description";

# ⚡ Quick Start

![Banner](../img/Quick_Start.png)

<Description
  text="Get up and running in minutes!"
/>

Follow the steps below to get started building your first dApp with Koii-X.

In your CLI, run the following code snippet to install the Koii-X App:

```shell
npx create-koii-app
```

Koii-X needs `Node.js` and `Yarn` to install and run.

Check your environment (Copy and paste in your terminal):

```
node --version
yarn --version
```

:::info
The terminal will show your environment version
:::

:::caution
If you fail to install it or think you lack the necessary environment, you can check and install the requirements here. [environment.md](./environment "mention")
:::

After the installation is done, head to the installed project, and inside it run `yarn start`.

:::info
If `yarn start` doesn't work, try:

```
react-scripts --openssl-legacy-provider start
```
:::info

Now you can see the whole structure of Koii-X. When you are ready to deploy your dApp, run:

```
yarn build
yarn deploy
```
