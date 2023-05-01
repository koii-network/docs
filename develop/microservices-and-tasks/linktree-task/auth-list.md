---
title: Auth List
image: img/thumbnail.png
sidebar_label: Auth List
---

### How do we know which nodes are allowed to make updates to our db_model.

 For this we need an authorized list. The Linktree task maintains an authorized list of addresses, ensuring that only nodes that are explicitly authorized can access the data. 

The **getAuthList** and **setAuthList** functions in **db_model** are used to retrieve and set the list of authorized public keys for a given node.

The **getAllAuthLists** function is used to retrieve all of the authorized public key lists for all nodes. This function is used in the init.js module to broadcast the list of authorized public keys to other nodes in the network.


The auth list is important for maintaining security and controlling access to the system. Only authorized public keys are allowed to interact with the system and perform certain actions. By maintaining a list of authorized public keys, the system can ensure that only trusted nodes are allowed to participate in the network.
