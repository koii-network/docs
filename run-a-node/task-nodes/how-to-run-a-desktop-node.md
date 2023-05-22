---
title: Welcome to Koii’s Desktop Node!
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: How to Run a Desktop Node
---

![banner](./img/Run%20a%20Task%20Node.svg)

Koii is a community of people and computers collaborating to build a brighter, more secure, and more private future. The global network allows anyone to use a few lines of code to access personal computers instead of paying Big Tech™ to do what you need.

We are excited to have you as part of our community and our beta test for powering the next generation of the internet.


# What exactly is a Koii node?

A Koii node is a very small computer program—about the same size as your favorite music player—that allows you to run compute jobs called **[tasks](/develop/koii-task-101/what-are-tasks)** for people around the world. They pay you to rent the extra space, like Uber for your computer, but it stays on your desk at all times.

A task can be anything from hosting a website to cataloging information from the internet, or processing lots of data. The possibilities are endless.

Let’s get started! 


# How do I run a node?
The installation process varies depending on your operating system:

- [Windows](#windows-download)
- [Mac](#mac-download)
- [Linux](#linux-download)

### Windows Download
If you have Windows, [get this download](https://github.com/koii-network/desktop-node/releases/download/v0.2.2/koii-desktop-node-0.2.2-win.exe).

Some Windows computers have different settings, so you may see different warning messages after you download the file like “The publisher could not be verified. Are you sure you want to run this software?”

If it doesn’t give you the option to “Run Anyway,” you may need to click an arrow or “Learn More” to get that button. If you trust us, click “Run Anyway” then jump down to [Time to Node](#time-to-node). 

### Mac Download
If you will be running the node on a Mac, you need to know what kind of chip you have, either M1/M2 or Intel.

You can find out your chip information by going to the Apple icon in the top left corner of your screen and clicking on “About This Mac.”


![Find my chip](./img/Find%20my%20chip.png)

If you have an M1 chip, [get this download](https://github.com/koii-network/desktop-node/releases/download/v0.2.2/koii-desktop-node-0.2.2-mac-arm64.dmg). If you have an Intel chip, [get this download](https://github.com/koii-network/desktop-node/releases/download/v0.2.2/koii-desktop-node-0.2.2-mac-x64.dmg).

Once the file has fully downloaded, open it. Your computer will warn you that you downloaded this file from the internet. If you trust us, click “Open Anyway.”

A small finder window will pop up. Drag the Koii Node icon on top of the Applications folder icon. Then you can double click the Koii Node icon to open it.

![drag and drop](./img/drag%20and%20drop.png)


### Linux Download
There are many different Linux configurations, so we won’t get into the specifics here about how to download the node itself. 

:::note
If you want your node to update automatically, you must use [AppImage](https://github.com/koii-network/desktop-node/releases/download/v0.2.2/koii-desktop-node-0.2.2-linux-x86_64.AppImage).
:::


## <a style={{fontSize: '32px'}}>Time to Node</a>
A new window will open with a loading screen. After the node loads for the first time, it will look like this. To secure your node, you need to create a **6-digit PIN**.

![Time to Node](./img/1.%20welcome.png)


If you forget this PIN, you can access your node again by importing the key via its secret phrase.

After you create a secure 6-digit PIN (probably not 123456 or your birthday), write it down in a secure location and confirm the Access PIN. Accept the Terms of Service and click “Log in.”

Once your PIN is secured, we will need to create an account.

Name your account. This name can always be changed later in settings, so don’t worry too much about it.

Click “Create a New Account”


If you’ve already been through this flow and want to use an account or Koii Key you already have, you can import it here instead using your secret phrase.

![Secret phrase](./img/2.%20Create%20New%20account.png)

Now it’s time to fund your account with a few tokens so you can participate in the task network and earn just for lending your compute power.

If you want to back up your account now, you can (and we recommend it). But you can always do this later. Account backups use a 12-word secret phrase, just like an Ethereum wallet or a Koii key on Finnie. 

:::caution
**Remember**, secret phrases should always be written using a pen on paper and stored in a safe place. They should **never** be stored on an internet connected device like in a notes app, email, or photo. Anyone with access to this secret phrase has full control of your assets.
:::

# Get those tokens!
If you’ve been part of the Koii community for a while, you might already have some KOII. If you do, click “copy” at the bottom of the pop up. That will copy your node’s account address so you can send a few tokens from Finnie.

Right now, three tokens will be enough to run your first task and cover any transaction fees.

If you’re new and don’t have any KOII yet, welcome! We’re thrilled to have you.
The “Get My Free Tokens” button will open a browser tab and take you to the KOII faucet. There you can get up to 16 tokens for proving you exist—verifying your email, Twitter, etc.

![Faucet](./img/faucet%201.png)


Verifying two methods will give you enough tokens to get started, but the more tokens you have the more you can earn, so verify all four!

After verifying each method, head back to the Node window. Click the refresh button to tell your node you’ve received the tokens. 

![Fund Refresh](./img/3.%20Fund%20refresh.png)

# Run your first task, become a pirate.
After a few seconds, your node will show you the first task to run. In order to run a task, you must stake some tokens. Each task will have a minimum stake set by the creator.

These tokens serve as a promise to run the task properly. As long as your computer has the right specifications and you don’t alter the submissions, you should never have to worry about losing your stake. Requiring staking is a way to ensure malicious actors can’t disrupt the network.

On this screen, there is one task to run. You’ll see the name of this onboarding task, “I’m a Task. Free Tokens!” the creator address, and a staking entry.

![Stake and Run](./img/4.%20stake%20and%20run.png)

You have to stake at least 2 tokens on this task. One thing to note is that you can’t stake every last token that you have in your wallet, because you need a little bit left to cover the transaction fees.

So enter at least 2 tokens in the staking box, and click “Run Tasks.” The next screen is a quick confirmation.

As mentioned above, the reason to stake on a Task is to make sure everyone plays fairly. To make sure this works, there are three different rounds that each task completes in cycles:
1. Execute
2. Audit
3. Reward Distribution

You can learn more about how this works [in the documentation here](/develop/koii-task-101/what-are-tasks/gradual-consensus).


![Confirm Task](./img/5.%20confirm.png)

That said, if you participate in the _execution_ stage of a task, you must remain staked until after the _reward distribution_ for that round. So your stake will be locked for up to three rounds after you stop that task.

Once you’re ready, click “Confirm” and you’ll be running your first task!

After a few seconds, you’ll see the “My Node” page. This is where you can see all the tasks you are running at any time. If you want to find more tasks to run, check out “Available Tasks.”

For many tasks, all you have to do is enter the minimum stake amount (or more) in the staking box, then click the “Run Task” play button.

![Available Task](./img/Available%20Task.png)


Some tasks will require configuring _task settings_, which includes things like a [Web3.Storage](http://web3.storage) API token so your node can store files on IPFS, or an Ethereum key to bridge data between chains. If a task requires additional settings, the gear icon in the settings column will turn orange to let you know you need to configure those.


We will get more into task settings in another tutorial coming soon.

You are all set running your first task. Invite your friends to run a node so they can be part of the revolution - and referral codes are coming soon so you can earn some tokens when they do!

Jump in the [Koii Discord](https://discord.gg/koii) if you have any questions and [learn more about writing your own tasks](https://docs.koii.network/develop/microservices-and-tasks/what-are-tasks/) using the power of thousands of computers worldwide!