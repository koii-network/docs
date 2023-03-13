import ContentLink from "@site/src/components/contentLink";

# Create NFTs


![Banner](../img/Create%20NFTs.png)

There are two ways to create new NFTs with Koii-X:

1. Programmatically using our JavaScript Libraries
2. Using the Drag and Drop Widget
   * The [**Finnie Wallet**](../integrating-wallets/finnie-wallet) employs Drag and Drop and users can create NFTs directly from Finnie

### Programmatically

To create an Atomic NFT yourself, write your content in JavaScript and head on over to [**atomicnft.com**](https://atomicnft.com) for help with deploying it.&#x20;

<ContentLink title="Deploy an Atomic NFT" description="koii network" link="https://atomicnft.com/en/Example-deployment-script" imageLink="https://atomicnft.com/assets/images/icons/Koii_Icon.png" />

### The Drag and Drop Widget

The leaderboard template contains a drag-and-drop NFT minting widget. This widget makes it very easy for users to create NFTs from within your dApp.

```jsx
// Drag and drop widget: src/compoents/widgets/DragAndDropUploader.tsx

export function DragAndDropUploader() {
// Use Finnie
// Dropzone
// Add NFT details
// helper tools
}

// Used in src/pages/home/index/tsx
<Box
  /* Drag and drop uploader to Koi.rocks */
  <DragAndDropUploader />
</Box>

```
