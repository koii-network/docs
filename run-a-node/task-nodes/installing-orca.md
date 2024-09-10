---
title: How to Install Orca on a Koii Desktop Node
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Install Orca
draft: true
---

## Prerequisite: Virtualization

Installing Orca will allow you to run another class of tasks on your desktop node. These tasks run in containers and require your computer to support virtualization. Although most computers manufactured in the past 10 years have CPUs that support virtualization, it may be disabled by default. To check if virtualization is enabled on your system you can follow these steps:

### Windows

- Press `Ctrl + Shift + Esc` to open the Task Manager
- Go to the Performance tab
- Select `CPU` from the left-hand sidebar
- Look for the `Virtualization` field near the bottom right
  - Enabled: virtualization is active
  - Disabled: virtualization is supported by your CPU but is not enabled
  - Missing or greyed out: virtualization is not supported by your CPU

### MacOS

If you have a Silicon CPU (M1/M2/etc) virtualization is supported.

If you have an Intel Mac, open terminal and run the following command:

```sh
sysctl -a | grep machdep.cpu.features | grep VMX
```

If VMX is present in the output, your machine supports virtualization.

On MacOS systems, virtualization is enabled by default when supported.

### Linux

Run the following command in a terminal to check if the CPU supports virtualization:

#### Intel CPUs

```sh
grep -E "vmx" /proc/cpuinfo
```

#### AMD CPUs

```sh
grep -E "svm" /proc/cpuinfo
```

If no output appears, the CPU does not support virtualization.

If you see output (containing "vmx" for Intel or "svm" for AMD), it means the CPU supports virtualization. Now you need to check if it's enabled. Run the

```sh
lscpu | grep Virtualization
```

If the command shows something like "Virtualization: VT-x" (for Intel) or "Virtualization: AMD-V" (for AMD), and it specifies a feature, this means virtualization is enabled. If the output is blank or shows no information about virtualization, it suggests virtualization is supported but disabled.

If virtualization is supported but disabled on your system, check your manufacturer's instructions for enabling virtualization in your BIOS.

## Installing Orca

Go to Settings > Task Extensions. There you'll find a button to install Orca automatically. If the automatic installation fails, you'll need to set it up manually; follow the [Orca installation instructions](https://docs.chaindeck.io/orcaNode).

## Running Orca Tasks

Once you've confirmed virtualization is enabled and installed the prerequisite software, you will be able to run Orca tasks just like any others!
