---
title: Namespace Wrapper Methods
description: Detailed documentation of methods available in the Namespace Wrapper for interacting with tasks and the blockchain.
image: img/thumbnail.png
sidebar_label: Namespace Wrapper Methods
---

import Tooltip from "@site/src/components/tooltip";

### Environment Variables

Environment variables are already pre-configured by the `@_koii/namespace-wrapper` package. You can directly import and use them in your tasks without additional setup. For detailed examples, refer to the [**Environment Variables Usage**](environment-variables) documentation.

### Database Operations

| Method                                                                     | Description                                   |
| -------------------------------------------------------------------------- | --------------------------------------------- |
| [`getDb(): Promise<void>`](nedb#getting-database-instance)                 | get the KOIIDB                                |
| [`storeSet(key: string, value: string): Promise<void>`](nedb#storing-data) | Stores a value in the persistent storage      |
| [`storeGet(key: string): Promise<string \| null>`](nedb#retrieving-data)   | Retrieves a value from the persistent storage |

### File System Operations

| Method                                                                                                        | Description                                                                 |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`fs(method: string, path: string, ...args: any[]): Promise<any>`](filesystem-access#fs-method)               | Executes file system operations in a standardized way                       |
| [`fsStaking(method: string, path: string, ...args: any[]): Promise<any>`](filesystem-access#fsstaking-method) | A decentralized staking platform enabling secure token locking for rewards. |
| [`fsWriteStream(imagepath: string): Promise<WriteStream \| void>`](filesystem-access#fswritestream-method)    | Creates a write stream for file operations                                  |
| [`fsReadStream(imagepath: string): Promise<Buffer \| void>`](filesystem-access#fsreadstream-method)           | Creates a read stream for file operations                                   |

### Blockchain/Transaction Operations

| Method                                                                                                                                                                                    | Description                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [`payloadSigning(body: Record<string, unknown>): Promise<string \| void>`](wallet-signatures#2-payloadsigning)                                                                            | Signs a payload for blockchain transactions using the main wallet's public key. |
| [`verifySignature(signedMessage: string, pubKey: string): Promise<{ data?: string; error?: string }>`](wallet-signatures#3-verifysignature)                                               | Verifies a signed message                                                       |
| [`sendAndConfirmTransactionWrapper(transaction: Transaction, signers: Keypair[]): Promise<string \| void>`](wallet-signatures#1-sendandconfirmtransactionwrapper)                         | Sends and confirms a transaction on the Koii network                            |
| [`sendTransaction(serviceNodeAccount: PublicKey, beneficiaryAccount: PublicKey, amount: number): Promise<string \| void>`](wallet-signatures#sendtransaction)                             | Sends a transaction between accounts                                            |
| [`getProgramAccounts() : Promise<any>`](wallet-signatures#getprogramaccounts)                                                                                                             | Retrieves all program accounts associated with the task                         |
| [`claimReward(stakePotAccount: PublicKey, beneficiaryAccount: PublicKey, claimerKeypair: Keypair): Promise<void>`](wallet-signatures#claimreward)                                         | Claims rewards for a specific round                                             |
| [`stakeOnChain(taskStateInfoPublicKey: PublicKey, stakingAccKeypair: Keypair, stakePotAccount: PublicKey, stakeAmount: number): Promise<string \| void>`](wallet-signatures#stakeonchain) | Stakes tokens for a task.                                                       |

### Task Status

| Method                                                                                                                                                        | Description                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`getTaskState(options: TaskStateOptions): Promise<TaskState \| null>`](task-state#gettaskstate-or-gettaskstatebyid)                                          | Retrieves the current state of the task                       |
| [`getTaskStateById(taskId: string, task_type: TaskType, options: TaskStateOptions): Promise<TaskState \| null>`](task-state#gettaskstate-or-gettaskstatebyid) | Retrieves task state for a specific task ID and the task type |
| [`getTaskNodeVersion(): Promise<string>`](task-state#gettasknodeversion)                                                                                      | Gets the task node version                                    |
| [`getTaskSubmissionInfo(round: number): Promise<TaskSubmissionState \| null>`](task-state#gettasksubmissioninfo)                                              | Retrieves submission information for the task                 |
| [`getTaskDistributionInfo(round: number): Promise<TaskDistributionInfo \| null>`](task-state#gettaskdistributioninfo)                                         | Gets distribution information for the task                    |

### Network and Task Handling Methods

| Method                                                                                                       | Description                                                          |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| [`getNodes(url: string)`](network-task-handling#getnodes)                                                    | Retrieves information about network nodes                            |
| [`getRpcUrl(): Promise<string \| void>`](network-task-handling#getrpcurl)                                    | Gets the current RPC URL for the Koii network                        |
| [`getTaskDBPath(): Promise<string>`](network-task-handling#gettaskdbpath)                                    | Gets the path to the task's NeDB database                            |
| [`getBasePath(): Promise<string>`](network-task-handling#getbasepath)                                        | Gets the base path to the task folder for performing file operations |
| [`getRound(): Promise<number>`](network-task-handling#getround)                                              | Gets the current round number                                        |
| [`getSubmitterAccount(): Promise<Keypair \| null>`](network-task-handling#getsubmitteraccount)               | Gets the submitter's account Keypair                                 |
| [`getMainAccountPubkey(): Promise<string \| null>`](network-task-handling#getmainaccountpubkey)              | Gets the main account's public key                                   |
| [`logger(level: LogLevel, message: string, action: string): Promise<boolean>`](network-task-handling#logger) | Logs messages based on specified log level (log, warn, error).       |
| [`getSlot(): Promise<number>`](network-task-handling#getslot)                                                | Gets the current slot number                                         |
| [`getAverageSlotTime(): Promise<number>`](network-task-handling#getaverageslottime)                          | Gets average slot time for the network                               |

### Audit and Distribution Operations

| Method                                                                                                                                                                                                                                                    | Description                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`auditSubmission(candidatePubkey: PublicKey, isValid: boolean, voterKeypair: Keypair, round: number): Promise<void>`](audit-distribution-operations#auditsubmission)                                                                                     | Audits a submission for a specific round           |
| [`distributionListSubmissionOnChain(round: number): Promise<string \| void>`](audit-distribution-operations#distributionlistsubmissiononchain)                                                                                                            | Submits distribution list to the blockchain        |
| [`uploadDistributionList(distributionList: Record<string, any>, round: number): Promise<boolean \| null>`](audit-distribution-operations#uploaddistributionlist)                                                                                          | Uploads a distribution list for a round            |
| [`distributionListAuditSubmission(candidatePubkey: PublicKey, isValid: boolean, voterKeypair: Keypair, round: number): Promise<void>`](audit-distribution-operations#distributionlistauditsubmission)                                                     | Audits a distribution list submission              |
| [`validateAndVoteOnDistributionList(validateDistribution: (submissionValue: string, round: number, nodePublicKey: string) => Promise<boolean>, round: number): Promise<string \| void>`](audit-distribution-operations#validateandvoteondistributionlist) | Validates and votes on distribution lists          |
| [`getDistributionList(publicKey: string, round: number): Promise<any \| null>`](audit-distribution-operations#getdistributionlist)                                                                                                                        | Gets the distribution list for a specific round    |
| [`nodeSelectionDistributionList(round: number, isPreviousFailed: boolean): Promise<string \| void>`](audit-distribution-operations#nodeselectiondistributionlist)                                                                                         | Selects nodes for distribution                     |
| [`payoutTrigger(round: number): Promise<void>`](audit-distribution-operations#payouttrigger)                                                                                                                                                              | Triggers payout for a specific round               |
| [`selectAndGenerateDistributionList(submitDistributionList: (round: number) => Promise<void>, round: number, isPreviousRoundFailed: boolean): Promise<void>`](audit-distribution-operations#selectandgeneratedistributionlist)                            | Generates and selects distribution list            |
| [`validateAndVoteOnNodes(validate: (submissionValue: string, round: number, nodePublicKey: string,) => Promise<boolean>, round: number): Promise<void \| string>`](audit-distribution-operations#validateandvoteonnodes)                                  | Validates and votes on node submissions            |
| [`checkSubmissionAndUpdateRound(submissionValue: string = 'default', round: number): Promise<void>`](audit-distribution-operations#checksubmissionandupdateround)                                                                                         | Verifies submissions and updates the current round |
