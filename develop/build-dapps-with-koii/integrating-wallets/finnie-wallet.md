---
title: Finnie Wallet
description: Integrate your dApp with Finnie wallet
image: img/thumbnail.png
sidebar_label: Finnie Wallet
---

import Description from "@site/src/components/description";

# Finnie Wallet

![Banner](<./img/Finnie_Wallet_(1).png>)

<Description
  text="Integrate your dApp with Finnie wallet. Let's build a send koii dapp in reactjs"
/>

### useFinnie

Let's build a custom **`useFinnie`** hook, as it's recommended to follow this approach, it's your choice to have your own implementation

```jsx
const useFinnie = () => {
  const [finnieLoaded, setFinnieLoaded] = useState(false)

  useEffect(() => {
    window.addEventListener('finnieWalletLoaded', () => {
      setFinnieLoaded(true)
    })
  }, [])

  const connect: Promise<PublicKey> = async () => {
    if (finnieLoaded) {
      return window.k2.connect()
    }
  }

  const disconnect: Promise<void> = async () => {
    if (finnieLoaded) {
      window.k2.disconnect()
    }
  }

  const getPublicKey: PublicKey = () => {
    if (window.k2.isConnected) return window.k2.publicKey
    return null
  }

  const signAndSendTransaction: Promise<String> = (transaction: Transaction) => {
    return window.k2.signAndSendTransaction(transaction)
  }

  return { finnieLoaded, connect, disconnect, getPublickey, signAndSendTransaction }
}

```
First we declare `finnieLoaded` state; as Finnie needs time to process code injection, it will not appear that apis included on app init which is required an eventListener callback to set `finnieLoaded` to true when Finnie loaded.
What should we use `finnieLoaded` for? Let's say we have a connect button, we can use `finnieLoaded` value for it's `disabled` attribute

```jsx
<button disabled={finnieLoaded}>Connect</button>
```

Now let's create a simple UI with a `Connect` button to connect to Finnie and a `Send` button to send 0.1 KOII to an address

```jsx
import { 
  Transaction, 
  Connection, 
  clusterApiUrl, 
  SystemProgram,
  PublicKey
} from '@_koi/web3.js' // you need to install @_koi/web3.js package
import { useFinnie } from "./useFinnie";

const SendKoiiApp = () => {
  const [connected, setConnected] = useState(false)

  const { finnieLoaded, connect, disconnect, getPublicKey, signAndSendTransaction } = useFinnie()

  const handleConnect = async () => {
    try {
      const publicKey = await connect()
      if (publicKey) setConnected(true)
    } catch (err) {
      // user reject the request
    }
  }

  const handleDisconnect = async () => {
    await disconnect()
    setConnected(false)
  }

  const handleSend = async () => {
    const connection = new Connection(clusterApiUrl('devnet')) // currently we have devnet as only up and running network
    const blockHash = (await connection.getRecentBlockhash()).blockHash
    const feePayer = getPublicKey()

    const transaction = new Transaction()
    transaction.recentBlockhash = blockhash
    transaction.feePayer = feePayer

    const recipient = 'example_address' // please replace this value with your recipient's address

    transaction.add(
      SystemProgram.transfer({
        fromPubkey: getPublicKey(),
        toPubkey: new PublicKey(recipient),
        lamports: 100000000 // 0.1 KOII
      })
    )

    const signature = await signAndSendTransaction(transaction)
  }

  return (
    <div>
      <button disabled={finnieLoaded} onClick={handleConnect}>Connect</button>
      <button disabled={!connected} onClick={handleDisconnect}>Disconnect</button>
      <button disabled={!connected} onClick={handleSend}>Send</button>
    </div>
  )
}
```

In this simple send koii application, we have a `Connect` button that will call `window.k2.connect()` method, if the user approves the connect request, it will resolve the returned Promise with the PublicKey of the connected wallet. We also declare the `connected` state which will be used to disable/enable `Disconnect` and `Send` button.

After connecting to Finnie has succeeded, we enable the `Send` and `Disconnect` button.

`Disconnect` will simply call `window.k2.disconnect()`, which will disconnect the current page from Finnie.

`Send` will create a transaction to send 0.1 Koii from your connected wallet to a recipient wallet address. Then, this transaction will be signed and sent using `window.k2.signAndSendTransaction()`.