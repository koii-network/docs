# Create Staking Wallet

The staking CLI can be started by running the command `yarn stake` in the root directory of the task node. The steps are:

* Clone the [task node repository](https://gitlab.com/koii-network/task-node) if you haven’t already done it.
* Run `yarn build`
* Run `yarn stake` in your terminal
* Enter the path to your wallet
* Next you will be prompted with four options&#x20;

```bash
? Select operation › - Use arrow-keys. Return to submit.
❯   Create a task staking wallet
    Create a task distribution wallet
    Stake tokens on a task
    Show all tasks
```

To create a staking wallet, select the "Create a task staking wallet" option and add the amount of KOII tokens you want to fund the wallet with.

```bash
✔ Enter the path to your wallet … /Users/<YOUR_HOME>/.config/koii/id.json
/Users/giftea/.config/koii/id.json
✔ Select operation › Create a task staking wallet
create-task-staking-wallet
Connection to cluster established: https://k2-testnet.koii.live
Using account 2kG7HBGGVHZEhdbHQzvQGQUjLNGGiQvxshLu47UvnpBs containing 379.99414788 KOII to pay for fees
✔ Enter the amount to add to staking wallet … 20
Success
✨  Done in 586.68s.
```
