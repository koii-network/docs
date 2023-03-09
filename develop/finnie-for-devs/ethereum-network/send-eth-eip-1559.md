import Description from "@site/src/components/description";

# Send ETH (EIP-1559)

<Description
  text="Send type EIP1559 ETH"
/>

According to the specification:

> A transaction pricing mechanism that includes fixed-per-block network fee that is burned and dynamically expands/contracts block sizes to deal with transient congestion.

Example `EIP1559` transaction:

```typescript
const transactionParameters = {
  from: accounts[0],
  to: '0xb076413401172CBB73C082107514De3376E4FF6c',
  value: '0x38D7EA4C68000',
  gasLimit: '0x5208',
  maxFeePerGas: '0x2540be400',
  maxPriorityFeePerGas: '0x3b9aca00',
}

const sendEthEIP1559 = async () => {
  try {
    const transactionHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    console.log('Transaction Hash: ' + transactionHash)
  } catch (error) {
    console.log(error)
  }
}
```

If you would like to read a more detailed description of what `EIP-1559` transaction is, you can check out the official specification document:

:::info
What is EIP-1559 transaction?  
[https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md)
:::



