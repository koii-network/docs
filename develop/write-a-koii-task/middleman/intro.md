---
title: Koii Middleman Server Template
image: img/thumbnail.png
sidebar_label: Middleman Introduction
---

# Middleman Server Template

The "task-middle-server-template" repository is a template designed to help developers create middle-layer servers that bridge Koii Task. It provides a foundational setup with essential components such as task queue management, server setup, and interaction with IPFS for fetching task data. The repository uses Node.js and MongoDB, leveraging Express.js for the server and async-await-queue for task handling. This template simplifies the creation of a task processing server by providing pre-built tools and structures.

For more details, visit the repository page [here](https://github.com/koii-network/task-middle-server-template)

## Quick Start

To get started with the template, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/koii-network/task-middle-server-template.git
```

2. Install the dependencies using npm or yarn:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

3. Set up the environment variables:

```bash
cp .env.example .env
```

Configure the following variables in your `.env` file:

- `TASK_ID`: The ID of the Koii task you want to process
- `MONGO_URI`: Your MongoDB connection string (e.g., "mongodb://localhost:27017")
- `DB_NAME`: Name of the database to use
- `COLLECTION_NAME`: Name of the collection to store task data
- `FILE_NAME`: Name of the file to process (if your task submission is a CID)

4. Start the server:

```bash
# Using npm
npm start

# Using yarn
yarn start
```

To learn more about the template and its features, check next sections.