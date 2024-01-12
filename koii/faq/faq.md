---
title: Koii FAQ
description: Concise FAQ page providing quick answers to common questions about our services, policies, and customer support options.
image: img/thumbnail.png
sidebar_label: FAQ
---

Questions? We have answers. If you can't find what you're looking for, please contact us on [Discord](https://discord.gg/koii).

## Q: How to download/update Koii Node?

Please visit [Koii Node](https://www.koii.network/node) and click "Download Now" to download the latest version of Koii Node. Koii Node will auto update when a new version is available. For Linux users, please download the latest version and replace the old one. If you have trouble updating, please contact us on [Discord](https://discord.gg/koii).

## Q: How to create a Koii account?

After downloading Koii Node, please follow the instructions to create a Koii account. You will need to provide a account name and a password. System will provide you with a private key. Please keep your private key safe. You will need it to log in to your account if you switch your device. If you lose your private key, you will lose access to your account.

## Q: How to get some KOII tokens?

You can get KOII tokens by visiting our faucet page or running the tasks. After log in to Koii Node, please click "Add funds" button at the bottom left corner. You will be directed to our faucet page. Please follow the instructions to get some KOII tokens.

## Q: How to run the task?

After log in to Koii Node, you will see the avaliable task list. Stake some KOII tokens to the task you want to run. After staking, please click "Run" button to run the task. Some tasks need to set up the task enviorment to run, Please follow the instructions to complete the item set up.

Notice: You can run multiple tasks at the same time. Please make sure you have enough KOII tokens to stake.

## Q: How to check the task status?

The tasks status are listed in My Node page. If the task is shown as "Error" and stop running, please check the task log to see what's wrong. If you have trouble fixing the error, please contact us on [Discord](https://discord.gg/koii).

## Q: How to withdraw KOII tokens?

After running the task, you will earn your first reward after 10 - 30 minutes. Then you can withdraw your KOII tokens by clicking "Claim Rewards" button. The longer you run the task, the more KOII tokens you will earn. You can withdraw your KOII tokens at any time.

## Q: I accidentally clicked on the devnet. how can I open again my koii app/node?

**For Mac**: Delete this file and start the node ~/Library/Application Support/desktop-node/config.json

**For Linux**: Delete this file and start the node ~/.config/desktop-node/config.json

## Q: My task failed at: Start task/Upgrade task/accidentally close the Koii Node and lead to stake token gone, Where should I find them? 

Mostly can find out in your staking wallet. and then you can find back their lost tokens.
![stakewallet](./imageFaq/stakeWallet.png)

## Q: what's the suggest balance I should at lease have in staking wallket?

It varies on the amount of data you will hold, so if you are running more task you will be storing more data in staking wallet. 

**Around 7 KOII** is sufficient for 1mb of rent exemption, though if you have more data and less koii than rent exemption you will need to pay rent ~0.0047 KOII per epoch per mb.

## Q: Why I doesn't have permission to check the main.log when a error occurred in my task? How to fix it?

It should be the permission issue, try run it as Administrator and try again

## Tutorial for Finnie Wallet

**Setting Up Finnie Wallet**

Register Finnie Wallet:  
1. Add Finnie as a browser extension from [HERE](https://chromewebstore.google.com/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj).
2. Click “**Get a new key**” and follow the instructions to create a new wallet.
3. Set up your password by selecting “**Start from scratch**,” then “**Koii**.”
4. Carefully note down the **12-word secret phrase** provided, as it is critical for your account recovery and security.

**Here is the tutorial video**: [Register Finnie Wallet](https://www.loom.com/share/8e0900d0f3414aabbcc2eb392b773e40?sid=44b74f75-9373-4a42-b374-f335513771fa).

**Importing Wallet to Koii Node**

Install Koii Node:  
- Download the latest version of the Koii Node software from [HERE](https://www.koii.network/node).
- Launch Koii Node, and if it's your first time, follow the initial setup prompts.
Prepare Wallet Details:  
- Have your 12-word secret phrase from Finnie wallet ready for the import process.
Import Wallet:  
- In the Koii Node software, find and select “**Import with seed phrase**.”
- Enter your Finnie wallet 12-word secret phrase when prompted.

**Managing and Transferring Tokens**

Transfer Tokens:  
- With your wallet imported, you can manage and transfer tokens using Koii Node.

To **sell** or **transfer** tokens:  
- Go to **settings** in the top right corner, select “**Security**” on the left.
- Next to your token balance, click the button to open the transfer interface.
- Input your destination wallet address, which you can find by clicking “**Receive**” in your Finnie wallet and copying the address.
- Specify the amount of tokens you wish to transfer.

**Here is the tutorial video**: [Transfer Token](https://www.loom.com/share/d2b6a875fc444f61b2167834595724a0?sid=058bc2db-a269-47c6-82c0-5c328064194b)

Always ensure the security of your secret phrase and double-check all details before confirming transactions.


## Tutorial: Step-by-Step Guide to Getting a Spheron Storage Key
**Step 1: Logging in**

1. Visit the Koii Node platform.If you don’t have it, you can download it at [HERE](https://www.koii.network/node).

2. Enter your six-digit credentials to log in. If you don’t have an account, you’ll need to create one.

**Step 2: Navigating to Storage Key Section**

1. Once logged in, navigate to the **Add Task** dashboard.

![step1](./imageFaq/Step1.png)

**Step 3: Generating a Storage Key**

1. Select the option to create a new storage key (click the **gear wheel**).

![step2](./imageFaq/Step2.png)

2. Click **Get Key** to automatically get the Spheron_Storage key.

![step3](./imageFaq/Step3.png)

3. Follow the on-screen instructions. Select **Spheron_Storage**.

![step4](./imageFaq/Step4.png)

## Tutorial: Using the Storage Key in the Task Node
**Step 1: Accessing the Task Node**

Click the **gear wheel** beside the task that you want to run.

**Step 2: Entering the Storage Key**

Select the Spheron_Storage you created.

![step5](./imageFaq/Step5.png)

**Step 3: Stake the tokens**

Stake the tokens (we call them KOII) to the program you want to run.

![step6](./imageFaq/Step6.png)

**Step 4: Run the task**

1. Click the triangular symbol to run the task!

![step7](./imageFaq/Step7.png)