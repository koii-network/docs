---
title: Offline Transaction Signing with the Koii CLI
description: Learn how to sign a transaction offline.
image: img/thumbnail.png
sidebar_label: Offline Signing
---

It is sometimes necessary to keep signing keys offline, which in turn requires offline signing of transactions. Below you will find the instructions detailing how to sign a transaction offline and submit it online.

## Offline Signing Commands

These commands in the [Koii CLI](/develop/category/koii-command-line-tool) support offline signing:

- `create-stake-account`
- `create-stake-account-checked`
- `deactivate-stake`
- `delegate-stake`
- `split-stake`
- `stake-authorize`
- `stake-authorize-checked`
- `stake-set-lockup`
- `stake-set-lockup-checked`
- `transfer`
- `withdraw-stake`
- `create-vote-account`
- `vote-authorize-voter`
- `vote-authorize-voter-checked`
- `vote-authorize-withdrawer`
- `vote-authorize-withdrawer-checked`
- `vote-update-commission`
- `vote-update-validator`
- `withdraw-from-vote-account`

## Signing Transactions Offline

To sign a transaction offline, you will need to pass the `--sign-only` and `--blockhash <BASE58_HASH>` arguments on the command line

`--sign_only` prints the public key and signature pairs to stdout rather than submitting the transaction, and `--blockhash <BASE58_HASH>` allows you to specify the value for the `recent_blockhash` field in your transaction, eliminating the need to connect to the network to get a recent blockhash.

### Example Signing Command

```sh
koii transfer --sign-only --blockhash F3rXs1PnTq1Ht4B6d8YJkZmNV72MWTCLFkp6JdUoZ5RN recipient-keypair.json 10
```

### Example Signing Output

```sh
Blockhash: F3rXs1PnTq1Ht4B6d8YJkZmNV72MWTCLFkp6JdUoZ5RN
Signers (Pubkey=Signature):   G9nV8XL7P7BkGXPZWm69DZGqmhqVDBZACkZhWyqJvU5G=A9nr12dXHm3TYW1vTLk1w3LX4UXPRkQk9F2LK68Fb1X9vR84UzFEtVmHbL6jVNCb1h5RLWUVhW8XzFzkCvXZCZZYkpXH

{"blockhash":"F3rXs1PnTq1Ht4B6d8YJkZmNV72MWTCLFkp6JdUoZ5RN","signers": ["G9nV8XL7P7BkGXPZWm69DZGqmhqVDBZACkZhWyqJvU5G=A9nr12dXHm3TYW1vTLk1w3LX4UXPRkQk9F2LK68Fb1X9vR84UzFEtVmHbL6jVNCb1h5RLWUVhW8XzFzkCvXZCZZYkpXH"]}'
```

## Submitting Transactions to the Network

To submit the transaction you just signed offline, pass the `--blockhash <BASE58_HASH>` and `--signer <BASE58_PUBKEY>=<BASE58_SIGNATURE>` arguments. These will be the same values you received as output from the offline signing.

### Example Transfer Command

```sh
koii transfer --blockhash F3rXs1PnTq1Ht4B6d8YJkZmNV72MWTCLFkp6JdUoZ5RN \
--signer G9nV8XL7P7BkGXPZWm69DZGqmhqVDBZACkZhWyqJvU5G=A9nr12dXHm3TYW1vTLk1w3LX4UXPRkQk9F2LK68Fb1X9vR84UzFEtVmHbL6jVNCb1h5RLWUVhW8XzFzkCvXZCZZYkpXH \
recipient-keypair.json 10
```

### Example Transfer Output

```sh
A9nr12dXHm3TYW1vTLk1w3LX4UXPRkQk9F2LK68Fb1X9vR84UzFEtVmHbL6jVNCb1h5RLWUVhW8XzFzkCvXZCZZYkpXH
```

## Multi-Session Offline Signing

It may sometimes be necessary to sign a transaction over multiple sessions. To do so, pass the absent signer's public key for each missing role.

### Example First Signing Command

```sh
koii transfer H1zfq3PuH5yQ9G5FtR6FgksYbAbdGfB2Tr9kDcV4p99x 20 \
--blockhash EXuVqWPNtTMD2q7Jv1Cz1PgLWPLBhVCvfxKPj89BMJbX \
--sign-only --keypair fee_payer.json \
--from J6wGtZ6Xr7sL1pLf8j8f7Sh8nK7JhMwF2bWLFPs43MhW
```

### Example First Signing Output

```sh
Blockhash: EXuVqWPNtTMD2q7Jv1Cz1PgLWPLBhVCvfxKPj89BMJbX
(Pubkey=Signature):     J6wGtZ6Xr7sL1pLf8j8f7Sh8nK7JhMwF2bWLFPs43MhW=C8kWL5V8dP2ZTQLM4Y9WVY8MRLV4ZYFZ6FVRFT8JLXLkJRFZ9FTkWLP3FNVRL9FTWLXT5XVzTLZWLkR8kLMVR8kZF8XM
Absent Signers (Pubkey):
  J6wGtZ6Xr7sL1pLf8j8f7Sh8nK7JhMwF2bWLFPs43MhW
```

### Example Second Signing Command

```sh
koii transfer H1zfq3PuH5yQ9G5FtR6FgksYbAbdGfB2Tr9kDcV4p99x 20 \
--blockhash EXuVqWPNtTMD2q7Jv1Cz1PgLWPLBhVCvfxKPj89BMJbX \
--sign-only --keypair from.json \
--fee-payer F1Xh8LdGqVq9pYJQ1XfB7Mv8KdM4F2P5XpL9VrJWVpkA
```

### Example Second Signing Output

```sh
Blockhash: EXuVqWPNtTMD2q7Jv1Cz1PgLWPLBhVCvfxKPj89BMJbX
(Pubkey=Signature):  F1Xh8LdGqVq9pYJQ1XfB7Mv8KdM4F2P5XpL9VrJWVpkA=B1pXTqZ8XmVRkNL2Y6YFzVmLZ2VrWzRf8kFkLVZyG68c7N4F6TkVb9Zm6NRXXfFzLfLz9XLTNvMFPz8TkJLWP8LFRkx
Absent Signers (Pubkey):
  H1zfq3PuH5yQ9G5FtR6FgksYbAbdGfB2Tr9kDcV4p99x
```

### Example Multi Signature Transfer Command

```sh
koii transfer H1zfq3PuH5yQ9G5FtR6FgksYbAbdGfB2Tr9kDcV4p99x 20 \
--blockhash 7ALDjLv56a8f6sH6upAZALQKkXyjAwwENH9GomyM8Dbc --from J6wGtZ6Xr7sL1pLf8j8f7Sh8nK7JhMwF2bWLFPs43MhW \
--signer J6wGtZ6Xr7sL1pLf8j8f7Sh8nK7JhMwF2bWLFPs43MhW=C8kWL5V8dP2ZTQLM4Y9WVY8MRLV4ZYFZ6FVRFT8JLXLkJRFZ9FTkWLP3FNVRL9FTWLXT5XVzTLZWLkR8kLMVR8kZF8XM \
--fee-payer F1Xh8LdGqVq9pYJQ1XfB7Mv8KdM4F2P5XpL9VrJWVpkA \
--signer F1Xh8LdGqVq9pYJQ1XfB7Mv8KdM4F2P5XpL9VrJWVpkA=B1pXTqZ8XmVRkNL2Y6YFzVmLZ2VrWzRf8kFkLVZyG68c7N4F6TkVb9Zm6NRXXfFzLfLz9XLTNvMFPz8TkJLWP8LFRkx
```

### Example Multi Signature Transfer Output

```sh
B1pXTqZ8XmVRkNL2Y6YFzVmLZ2VrWzRf8kFkLVZyG68c7N4F6TkVb9Zm6NRXXfFzLfLz9XLTNvMFPz8TkJLWP8LFRkx
```

## Increasing Signing Time

Signing time is limited to within a number of slots from the `recent_blockhash`. If you need more time, you can use a [Durable Transaction Nonce](/koii/the-koii-token/add-koii-to-exchange/durable-nonces).
