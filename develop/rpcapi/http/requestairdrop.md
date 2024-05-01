# requestAirdrop RPC Method | Solana
Requests an airdrop of lamports to a Pubkey

### Parameters #

Pubkey of account to receive lamports, as a base-58 encoded string

lamports to airdrop, as a "u64"

Configuration object containing the following fields:

### Result #

`<string>` - Transaction Signature of the airdrop, as a base-58 encoded string

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0", "id": 1,
    "method": "requestAirdrop",
    "params": [
      "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri",
      1000000000
    ]
  }
'
```


### Response #

```
{
  "jsonrpc": "2.0",
  "result": "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW",
  "id": 1
}
```
