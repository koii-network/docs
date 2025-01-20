---
title: Filesystem Access
description: The File System Access API enables reading, writing, and managing files.
image: img/thumbnail.png
sidebar_label: File System Access
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Description from "@site/src/components/description";

# Filesystem Access

<Description text="The File System Access API enables reading, writing, and managing files." />

The API allows interaction with local or network-based files. It provides methods for reading, writing, and managing directory structures using `fsPromises` within the `namespaceWrapper` class.

For a list of available `fsPromises` methods, refer to: [fsPromises Methods Names](https://docs.deno.com/api/node/fs/promises/).

## Available Methods

### `fs` Method

File system method to execute.

#### Parameters:

- `method`: The `fsPromise` method to invoke.
- `path`: Target file or directory path.
- `...args`: Additional method-specific parameters.

#### Example:

<Tabs>
  <TabItem value="typescript" label="TypeScript">
    
    ```typescript
    import { namespaceWrapper } from "@_koii/namespace-wrapper";
    
    // Create a directory
    await namespaceWrapper.fs("mkdir", "uploads", { recursive: true });
    
    // Copy a file
    await namespaceWrapper.fs("copyFile", "uploads/handler.js", "utils/handler.js");
    
    // Create a file
    await namespaceWrapper.fs("writeFile", "uploads/handler.js");
    ```
    
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    
    ```javascript
    const { namespaceWrapper } = require("@_koii/namespace-wrapper");
    
    // Create a directory
    await namespaceWrapper.fs("mkdir", "uploads", { recursive: true });
    
    // Copy a file
    await namespaceWrapper.fs("copyFile", "uploads/handler.js", "utils/handler.js");
    
    // Create a file
    await namespaceWrapper.fs("writeFile", "uploads/handler.js");
    ```
  </TabItem>
</Tabs>

### `fsStaking` Method

A decentralized staking platform enabling secure token locking for rewards.

#### Parameters:

- `method`: The `fsPromise` method to call.
- `path`: Target file or directory path.
- `...args`: Additional parameters.

#### Example:

<Tabs>
  <TabItem value="typescript" label="TypeScript">
    
    ```typescript
    import { namespaceWrapper } from "@_koii/namespace-wrapper";
    
    const data = await namespaceWrapper.fsStaking(
      'readFile',
      'stake_info.txt',
      'utf8',
    )
    console.log(data)
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    
    ```javascript
    const { namespaceWrapper } = require("@_koii/namespace-wrapper");

    const data = await namespaceWrapper.fsStaking(
      'readFile',
      'stake_info.txt',
      'utf8',
    )
    console.log(data)
    ```

  </TabItem>
</Tabs>

### `fsWriteStream` Method

Creates a write stream for file operations

#### Parameters:

- `imagepath`: Target image file path.

#### Example:

<Tabs>
  <TabItem value="typescript" label="TypeScript">
    ```typescript
    const getBasePath: string = await namespaceWrapper.getBasePath();
    const imgPath: string = `${getBasePath}/img/output.jpg`;

    try{
      // Successful write stream creation and usage
      const writeStream = await namespaceWrapper.fsWriteStream(imgPath);
      if (writeStream) {
        // Write image data
        writeStream.write(imageBuffer);
        writeStream.end();

        writeStream.on('finish', () => {
          console.log('Write completed');
          // Output: Write completed
        });
      }
    }
    catch (error){
      console.error("Error writing image:", error);
    }

    // Error case (invalid path)
    try {
      const invalidStream = await namespaceWrapper.fsWriteStream('/invalid/path/image.jpg');
    } catch (error) {
      console.error(error);
    }

    // Error case (permission denied)
    try {
      const restrictedStream = await namespaceWrapper.fsWriteStream('/root/restricted.jpg');
    } catch (error) {
      console.error(error);
    }
    ```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    
    ```javascript
    const getBasePath = await namespaceWrapper.getBasePath();
    const imgPath = `${getBasePath}/img/output.jpg`;

    try{
      // Successful write stream creation and usage
      const writeStream = await namespaceWrapper.fsWriteStream(imgPath);
      if (writeStream) {
        // Write image data
        writeStream.write(imageBuffer);
        writeStream.end();

        writeStream.on('finish', () => {
          console.log('Write completed');
          // Output: Write completed
        });
      }
    }
    catch (error) {
      console.error("Error writing image:", error);
    }

    // Error case (invalid path)
    try {
      const invalidStream = await namespaceWrapper.fsWriteStream('/invalid/path/image.jpg');
    } catch (error) {
      console.error(error);
    }

    // Error case (permission denied)
    try {
      const restrictedStream = await namespaceWrapper.fsWriteStream('/root/restricted.jpg');
    } catch (error) {
      console.error(error);
    }
    ```

  </TabItem>
</Tabs>

### `fsReadStream` Method

Creates a read stream for file operations

#### Parameters:

- `imagepath`: Target image file path.

#### Example:

<Tabs>
  <TabItem value="typescript" label="TypeScript">
    
    ```typescript
    const getBasePath: string = await namespaceWrapper.getBasePath();
    const imgPath: string = `${getBasePath}/img/output.jpg`;

    try {
      // Successful read
      const imageBuffer: Buffer = await namespaceWrapper.fsReadStream(imgPath);
      console.log(imageBuffer);
      // Output: <Buffer ...>
    } catch (error) {
      console.error("Error reading image:", error);
    }

    // Error case (file not found)
    try {
      const buffer: Buffer = await namespaceWrapper.fsReadStream('nonexistent.jpg');
    } catch (error) {
      console.error("File not found:", error);
    }

    // Error case (corrupted file)
    try {
      const buffer: Buffer = await namespaceWrapper.fsReadStream('corrupted.jpg');
    } catch (error) {
      console.error("Corrupted file:", error);
    }
    ```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    
    ```javascript
    const getBasePath = await namespaceWrapper.getBasePath();
    const imgPath = `${getBasePath}/img/output.jpg`;

    try {
      // Successful read
      const imageBuffer = await namespaceWrapper.fsReadStream(imgPath);
      console.log(imageBuffer);
      // Output: <Buffer ff d8 ff e0 00 10 4a 46 49 46 ...>
    } catch (error) {
      console.error("Error reading image:", error);
    }

    // Error case (file not found)
    try {
      const buffer = await namespaceWrapper.fsReadStream('nonexistent.jpg');
    } catch (error) {
      console.error("File not found:", error);
    }

    // Error case (corrupted file)
    try {
      const buffer = await namespaceWrapper.fsReadStream('corrupted.jpg');
    } catch (error) {
      console.error("Corrupted file:", error);
    }
    ```

  </TabItem>
</Tabs>

## Summary

The File System Access API simplifies interaction with files and directories. Methods like `fs`, `fsStaking`, `fsWriteStream`, and `fsReadStream` provide a structured approach to managing file operations efficiently within Koii tasks.
