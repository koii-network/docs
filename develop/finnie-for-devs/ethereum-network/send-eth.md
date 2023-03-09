# Send ETH

Now, let's see how we can send some `eth` to the other account, using our Finnie wallet that we have already set in the [previous chapter.](../connecting-finnie) First, you can list all the available accounts as below

```jsx
const accounts = await window.ethereum.request({
  method: 'eth_requestAccounts'
})
```

Now, when we have listed all available accounts, we can grab our account which is `accounts[0]` and use it in the transaction payload:

```typescript
const transactionParameters = {
  from: accounts[0], // the account you want to charge
  to: '0xb076413401172CBB73C082107514De3376E4FF6c', // receiver's account
  value: '0x38D7EA4C68000', // transaction value
  gasLimit: '0x5208', // gas limit
  type: '0x0', // type of the transaction
}

const sendEth = async () => {
  try {
    const transactionHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters]
    })
    
    console.log('Transaction Hash: ' + transactionHash)
  } catch (err) {
    console.error(err.data)
  }
}
```
