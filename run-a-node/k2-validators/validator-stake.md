---
title: 'Validator Guide: Staking'
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Staking
---

**By default your validator will have no stake.** This means it will be ineligible to become leader, and unable to land votes.

## Monitoring Catch Up
To delegate stake, first make sure your validator is running and has caught up to the cluster. It may take some time to catch up after your validator boots. Use the catchup command to monitor your validator through this process:

```sh
koii catchup ~/validator-keypair.json
```

Until your validator has caught up, it will not be able to vote successfully and stake cannot be delegated to it.

Also if you find the cluster's slot advancing faster than yours, you will likely never catch up. This typically implies some kind of networking issue between your validator and the rest of the cluster.

## Create Stake Keypair
If you haven’t already done so, create a staking keypair. If you have completed this step, you should see the “validator-stake-keypair.json” in your koii runtime directory.

```sh
koii-keygen new -o ~/validator-stake-keypair.json
```

## Delegate Stake

Now delegate 1 KOII to your validator by first creating your stake account:

```sh
koii create-stake-account ~/validator-stake-keypair.json 1
```

and then delegating that stake to your validator:

```sh
koii delegate-stake ~/validator-stake-keypair.json ~/vote-account-keypair.json
```

:::warning
Don’t delegate your remaining KOII, as your validator will use those tokens to vote.
:::

Stakes can be re-delegated to another node at any time with the same command, but only one re-delegation is permitted per epoch:

```sh
koii delegate-stake ~/validator-stake-keypair.json ~/some-other-vote-account-keypair.json
```

## Validator Stake Warm-up

To combat various attacks on consensus, new stake delegations are subject to a warm-up period.

Monitor a validator's stake during warmup by:

- View your vote account: `koii vote-account ~/vote-account-keypair.json` This displays the current state of all the votes the validator has submitted to the network.
- View your stake account, the delegation preference and details of your stake:`koii stake-account ~/validator-stake-keypair.json`
- `koii validators` displays the current active stake of all validators, including yours
- `koii stake-history` shows the history of stake warming up and cooling down over recent epochs
- Look for log messages on your validator indicating your next leader slot: `[<Timestamp> INFO koii_core::replay_stage] <VALIDATOR_IDENTITY_PUBKEY> voted and reset PoH at tick height ####. My next leader slot is ####`
- Once your stake is warmed up, you will see a stake balance listed for your validator by running koii validators

## Validator Rewards

Once your stake is warmed up, and assuming the node is voting, you will now be generating validator rewards. Rewards are paid automatically on epoch boundaries.

The rewards lamports earned are split between your stake account and the vote account according to the commission rate set in the vote account. Rewards can only be earned while the validator is up and running. Further, once staked, the validator becomes an important part of the network. In order to safely remove a validator from the network, first deactivate its stake.

At the end of each slot, a validator is expected to send a vote transaction. These vote transactions are paid for by lamports from a validator's identity account.

This is a normal transaction so the standard transaction fee will apply. The transaction fee range is defined by the genesis block. The actual fee will fluctuate based on transaction load.

## Monitor Your Staked Validator

Confirm your validator becomes a leader

- After your validator is caught up, use the `koii balance` command to monitor the earnings as your validator is selected as leader and collects transaction fees
- Koii nodes offer a number of useful JSON-RPC methods to return information about the network and your validator's participation. Make a request by using curl (or another http client of your choosing), specifying the desired method in JSON-RPC-formatted data. For example:

### Request:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getEpochInfo"}' http://localhost:10899
```

### Result:

```sh
{"jsonrpc":"2.0","result":{"epoch":3,"slotIndex":126,"slotsInEpoch":256},"id":1}
```

Helpful JSON-RPC methods:

- `getEpochInfoAn` epoch is the time, i.e. number of slots, for which a leader schedule is valid. This will tell you what the current epoch is and how far into it the cluster is.
- `getVoteAccounts` This will tell you how much active stake your validator currently has. A % of the validator's stake is activated on an epoch boundary. You can learn more about staking on Koii here.
- `getLeaderSchedule` At any given moment, the network expects only one validator to produce ledger entries. The validator currently selected to produce ledger entries is called the “leader”. This will return the complete leader schedule (on a slot-by-slot basis) for currently activated stake, the identity pubkey will show up 1 or more times here.

## Deactivating Stake

Before detaching your validator from the cluster, you should deactivate the stake that was previously delegated by running:

```sh
koii deactivate-stake ~/validator-stake-keypair.json
```

Stake is not deactivated immediately and instead cools down in a similar fashion as stake warm up. Your validator should remain attached to the cluster while the stake is cooling down. While cooling down, your stake will continue to earn rewards. Only after stake cooldown is it safe to turn off your validator or withdraw it from the network. Cooldown may take several epochs to complete, depending on active stake and the size of your stake.

Note that a stake account may only be used once, so after deactivation, use the cli's `withdraw-stake` command to recover the previously staked lamports.
