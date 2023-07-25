---
title: Other EVM Chains
description: The Majority of EVM functionality within Finnie is handled by the same methods as the Metamask standard
image: img/thumbnail.png
sidebar_label: Other EVM Chains
---

# Other EVM Chains

The Majority of EVM functionality within Finnie is handled by the same methods as the [Metamask standard](https://docs.metamask.io/guide/getting-started.html#basic-considerations), and provides the same injected methods. Some useful examples are below.

### eth_requestAccounts

The `eth_requestAccounts` RPC method is the only way to obtain the necessary permissions required to use Finnie for signing transactions. This RPC call will return a promise, allowing you to `await` the result of connect approval. A popup will appear, allowing you to either accept or reject the request. You can also select a specific wallet address to connect to. If the request is approved, the returned promise will be resolved with an array of the connected addresses; otherwise, the returned promise will be rejected.

```
type WalletAddress = String

window.ethereum.request({
    method: 'eth_requestAccounts'
}): Promise<WalletAddress[]>
```

```
try {
    const connectedAddresses = await window.ethereum.request({
        method: 'eth_requestAccounts'
    })
} catch (error) {
    // request rejected
    console.log(error) // { code: 4001, message: 'User rejected' }
}
```

### eth_accounts

This RPC call retrieves all connected wallet addresses. It can also be used to check if the Finnie wallet is connected to the current page. An empty array will be returned if the page is not connected to the Finnie wallet. This RPC call does not require any permission.

```
type WalletAddress = String

window.ethereum.request({
    method: 'eth_accounts'
}): Promise<WalletAddress[]>
```

```
const connectedAddresses = await window.ethereum.request({
    method: 'eth_accounts'
})

console.log(connectedAddresses) // ['example_address']
```

### eth_chainId

Get the current chain ID from the Finnie wallet.

```
type ChainId = String

window.ethereum.request({
    method: 'eth_chainId'
}): Promise<ChainId>
```

```
const chainId = await window.ethereum.request({
    method: 'eth_chainId'
})

console.log(chainId) // 0x1
```

### net_version

Get current network ID from the Finnie wallet.

```
type NetworkId = Number

window.ethereum.request({
    method: 'net_version'
}): Promise<NetworkId>
```

```
const networkId = await window.ethereum.request({
    method: 'net_version'
})

console.log(networkId) // 1
```

### eth_sendTransaction

This RPC method signs and sends a transaction. The `transaction` is added as an argument within the `eth_sendTransaction` method. A popup will appear, allowing you to approve or reject the transaction, and the details of your transaction will be displayed. If the transaction is approved, the returned promise will be resolved with the transaction hash; otherwise, the returned promise will be rejected.

```
type TransactionHash = String

interface TransactionPayload {
    from: String,
    to: String,
    value?: String,
    gasLimit?: String,
    maxFeePerGas?: String
}

window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionPayload: TransactionPayload]
}): Promise<TransactionHash>
```

```
const transactionPayload = {
    from: 'example_sender_address',
    to: 'example_recipient_address',
    value: '0x38D7EA4C68000',
    gasLimit: '0x5208'
}

try {
    const transactionHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionPayload]
    })
} catch (error) {
    // request rejected
    console.log(error) // { code: 4001, message: 'User rejected' }
}

```

### eth_sign

This RPC call is used for signing messages. When calling this method, a hex string is passed as a parameter. A popup appears, allowing you to either sign the message or not. The returned promise will be resolved with a signature if the request is approved; if not, it will be rejected.

```
type Signature = String
type Message = String
type WalletAddress = String

window.ethereum.request({
    method: 'eth_sign',
    params: [connectedWalletAddress: WalletAddress, message: Message]
}): Promise<Signature>
```

```
const exampleMessage = '0x879a053d4800c6354e76c7985a865d2922c82fb5b3f4577b2fe08b998954f2e0'
const connectedWalletAddress = 'example_wallet_address'

try {
    const signature = await window.ethereum.request({
        method: 'eth_sign',
        params: [connectedWalletAddress, exampleMessage]
    })
} catch (error) {
    // request rejected
    console.log(error) // { code: 4001, message: 'User rejected' }
}

```
