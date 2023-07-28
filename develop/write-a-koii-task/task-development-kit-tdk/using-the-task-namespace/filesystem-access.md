---
title: Filesystem Access
description: The File System Access API allows read, write and file management capabilities.
image: img/thumbnail.png
sidebar_label: Filesystem Access
---

import Description from "@site/src/components/description";

# Filesystem Access

<Description
  text="The File System Access API allows read, write and file management
  capabilities."
/>

This API allows interaction with files on a user's local device or on a user-accessible network file system. The core functionality of this API includes reading files, writing or saving files, and accessing the directory structure.

Most interaction with files and directories is accomplished with `fsPromises` methods from the namespace wrapper class. The available `fsPromises` methods on the namespace wrapper class include: `fs`, `fsStaking`, `fsWriteStream`, and `fsReadStream`.

### fs Method

The `fs` method is a useful utility that accepts three arguments:

- `method` :This refers to the `fsPromise` method that you want to call.
- `path`: TThe path for the express call relevant to the specific `fsPromise` method call.
- `...args`: Any additional parameters that may be required for the `fsPromise` call.

```typescript
async fs(method, path, ...args) {
  // return Promise<any>
}
```

Example usage of the `fs` function is demonstrated below, showcasing the creation of a new directory, copying a file, and creating a new file:

```javascript
const { namespaceWrapper } = require("../_koiiNode/koiiNode");

// CREATE NEW DIRECTORY
await namespaceWrapper.fs("mkdir", `uploads`, {
  recursive: true,
});

// COPY FILE
await namespaceWrapper.fs("copyFile", `uploads/handler.js`, `utils/handler.js`);

// CREATE NEW FILE
await namespaceWrapper.fs("writeFile", `uploads/handler.js`);
```

### fsStaking Method

The `fsStaking` method takes in three arguments:

- `method` : The `fsPromise` method to call
- `path`: The path for the express call
- `...args`: Any remaining parameters for the FS call

```javascript
async fsStaking(method, path, ...args) {
  // return Promise<any>
}
```

### fsWriteStream Method

The `fsWriteStream` method accepts one argument:

- `imagepath` : A `string` representing the image path.

```javascript
  async fsWriteStream(imagepath: string) {
    const basePath = 'namespace/' + this.taskTxId;
    await fsPromises.mkdir(basePath, { recursive: true }).catch(console.error);
    const image = basePath + '/' + imagepath;
    const writer = fs.createWriteStream(image);
    return writer;
  }
```

### fsReadStream Method

The `fsReadStream` method accepts one argument:

- `imagepath`: A `string` to the image path

```javascript
  async fsReadStream(imagepath: string) {
    const basePath = 'namespace/' + this.taskTxId;
    await fsPromises.mkdir(basePath, { recursive: true }).catch(console.error);
    const image = basePath + imagepath;
    const file = fs.readFileSync(image);
    return file;
  }
```

In the provided examples, the `fs` method is employed to call various `fsPromise` methods such as `mkdir`, `copyFile`, and `writeFile`. Each method receives parameters that specify the relevant paths and options needed for the corresponding operations. This abstraction streamlines and consolidates file system interactions within the Koii task, enhancing the convenience and simplicity of managing file-related tasks.

Additionally, the `fsStaking` method, `fsWriteStream` method, and `fsReadStream` method are implemented to facilitate file system interactions within the Koii task. These methods enable operations like staking tokens, creating write streams, and reading streams from the file system. This approach ensures efficient management of file-related tasks, catering to the specific requirements of each operation. As a result, developers benefit from a cohesive and coherent approach to handle file system tasks while developing Koii tasks, promoting effective and streamlined development processes.
