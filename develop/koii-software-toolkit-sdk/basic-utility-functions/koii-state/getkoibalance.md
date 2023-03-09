# getKoiBalance

:::danger
This function is based on K1. Know more about K2 and generate a K2 Koii wallet [here](/)
:::

This function returns the KOII balance of a given address.

:::info
This wallet's private key needs to be loaded to retrieve the balance. This function does not take the address as a parameter and return the balance.
:::

### Example Code

:::caution
In the below code example, replace `<walletKeyLocation>` on line 4 with the local path to your wallet key file.
:::

```jsx
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();
async function testGetKoiiBalance() {
    const jwk = await ktools.loadFile(<walletKeyLocation>);
    await ktools.loadWallet(jwk);
    const koiibalance = await ktools.getKoiBalance();
    console.log("KOII balance of given address is ", koiibalance);
}

testGetKoiiBalance();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
KOII balance of the given address is  7459.149283222933
```

### Returns

**Promise ```<Number>```** - Koii balance of a given address as a number.
