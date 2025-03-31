---
title: VPS Configuration
description: Configure your VPS to run a Koii node.
sidebar_label: VPS Configuration
---

import ReactPlayer from "react-player";

## Before You Begin

Setting up and maintaining a Koii Node requires a basic level of technical knowledge; basic experience with Linux is advisable. From there we will guide you through the entire process step-by-step. If you encounter obstacles please reach out to **#node-vps channel** in our [Discord](https://discord.gg/koii-network).

Make sure your hardware and internet speeds meet the minimum requirements for a Koii Node which are very minimal (similar to the Desktop version) but at least 2GB RAM and >1GHz processor and stable internet.

If you decide running a node on VPS isn't for you there are other options available, like the Desktop version. Go to our website where you will be able to download the [Desktop Node](https://www.koii.network/nodes).

## Operating System

Using **Ubuntu Server 24.04.xx LTS** is highly recommended for running Koii Nodes due to its stability and compatibility. The acronym LTS stands for "Long Term Support" which signifies that Ubuntu will provide updates and patches for this operating system "Long Term" (in the case of 24.04, April 2029).

## Rented VPS Node or Rented Dedicated Server

A Virtual Private Server (VPS) is a type of hosting service that simulates a dedicated server environment but with shared hardware resources among multiple users. A dedicated server (DS) is a type of physical server that offers complete control over its hardware resources. This allows you to utilize all of the CPU, RAM, and storage available on the server without having to share it with other users. If your dedicated server has the necessary hardware to satisfy the combined requirements of multiple Koii Nodes, you may operate them on a single dedicated server.

Due to the variations in the ordering process and customer dashboard for each server provider, we cannot provide detailed instructions for each one. We suggest installing Ubuntu 24.04 as your operating system, but if you prefer to use a different operating system then you do that at your own risk.

## Koii Node Installation

### Connect with SSH

If you are unsure about this step check with your provider for information.

### Setting Up the Environment on VPS

Follow the link for a helpful script that will partially automate the process for you. See the readme in the repository for up to date directions.

**[Koii VPS Node Setup Repo](https://github.com/koii-network/vps-node-setup)**

## Troubleshooting

If you encounter obstacles please reach out to **#node-vps channel** in our [Discord](https://discord.gg/koii-network).

:::info
If you have suggestions for improvements, either to the script or the readme, make a pull request to the repo!
:::
