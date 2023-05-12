# Koii Task Template

Cloning the Koii [Task Template](https://gitlab.com/koii-network/k2-task-template) is the first step in creating a Koii task. The Koii developer team has provided a Task Template to ensure a smooth task creation process.

After cloning the Task Template repository, you should have a project with a folder structure similar to the one below:

```
k2-task-template
├── .env
├── README.md
├── coreLogic.js
├── index.js
├── init.js
├── namespaceWrapper.js
├── package.json
├── webpack.config.js
└── yarn.lock
```

## Import Required Packages

The `coreLogic.js file` contains the functions related to the task's core logic, so that's where we'll import all important packages.

For our task example, we need the `crypto` library to convert the string to a hash, so install and import the package into the `coreLogic.js` file.

Install package:

```
npm i crypto
```

Import package:

```javascript
const { namespaceWrapper } = require("./namespaceWrapper");
const crypto = require("crypto");
```
