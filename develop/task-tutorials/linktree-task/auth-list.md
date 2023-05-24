---
title: User Authentication
image: img/thumbnail.png
sidebar_label: User Authentication
---

When building a REST API for a task, it's crucial to implement user authentication to control access to the system. To achieve this, it's important to maintain a list of authorized addresses, which will ensure that only explicitly authorized nodes can access the data. In the case of the Linktree task, for example, a list of authorized addresses is maintained to restrict access to the data. 

This means that only the nodes included in the authorized list are allowed to make requests, while others will be denied access. By implementing user authentication, you can ensure that your system is secure and accessible only to the intended users

The `getAuthList` and `setAuthList` functions in `db_model.js` are used to retrieve and set the list of authorized public keys for a given node. The `getAllAuthLists` function is used to retrieve all of the authorized public key lists for all nodes. This function is used in the `init.js` module to broadcast the list of authorized public keys to other nodes.

### How to put all these files together

- The linktree user sends a request with their linktree data, their public key, and their digital signature to one node.
- That node validates the signature and stores the data in level DB locally using the db_model module.
- The `db_sharing` module shares the data with all the nodes running the task.
- The node creates a proof object and submits it to IPFS, which returns a CID.
- Other nodes can get the proofs using the CID and audit the submission.

### Let’s recap what we have learned in this tutorial: 

A `db_model` module is required to interact with the local database of a node. 
A `dbSharing` module is required to make sure all the nodes have the same version of the data.
You can create your own REST APIS to interact with servers. 

