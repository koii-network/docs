---
title: REST APIs
description: Express is the most popular Node web framework, which also serves as an underlying library for other popular Node web frameworks.
image: img/thumbnail.png
sidebar_label: REST APIs
---

# REST APIs in Koii Tasks

The Namespace Wrapper provides built-in support for REST APIs through Express.js, enabling tasks to handle HTTP requests and serve responses. This functionality is essential for tasks that need to communicate with external services or provide API endpoints.

## Key Features

- **Handle HTTP requests** (GET, POST, PUT, DELETE)
- **Use middleware** for data processing
- **Define custom routes** for specific API endpoints

## Setup Overview

The Express app is automatically initialized in Koii. You simply need to define your routes to handle different API requests.

### Basic Route Setup

Here's an example of how to define a simple API endpoint:

```typescript
import { namespaceWrapper, app } from "@_koii/namespace-wrapper";
/**
 *
 * Define all your custom routes here
 *
 */

// Define routes
export async function routes() {
  app.get("/value", async (_req, res) => {
    const value = await namespaceWrapper.storeGet("value");
    console.log("value", value);
    res.status(200).json({ value: value });
  });
}
```

## Common Routes and Operations

### Basic Routes

- **GET**: Retrieves data
- **POST**: Submits data

Example of a GET and POST route:

```javascript
// GET endpoint
app.get("/status", (req, res) => {
  res.json({ status: "active" });
});

// POST endpoint
app.post("/submit-data", async (req, res) => {
  try {
    const data = req.body;
    await processData(data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### Route Parameters

Routes can include both **URL** and **query** parameters.

```javascript
// Route with URL parameters
app.get("/task/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  res.json({ taskId });
});

// Route with query parameters
app.get("/search", (req, res) => {
  const { query, limit } = req.query;
  res.json({ query, limit });
});
```

## Middleware: Processing Requests

Middleware functions allow you to process incoming requests before they reach your routes. Here's how to add logging and authentication:

```javascript
// Example: Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Example: Authentication middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

// Protect a route with authentication
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ data: "protected data" });
});
```

### Error Handling

You can manage errors globally with a simple error-handling middleware:

```javascript
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ error: "Internal Server Error", message: err.message });
});
```

## Special Operations

### File Upload

Handle file uploads with **multer**:

```javascript
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const filePath = await processUploadedFile(file);
    res.json({ success: true, path: filePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### JSON Data Processing

You can process JSON data in POST requests like this:

```javascript
app.post("/process-json", express.json(), async (req, res) => {
  try {
    const data = req.body;
    const result = await processJsonData(data);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

### Streaming Responses

For streaming data to clients:

```javascript
app.get("/stream-data", (req, res) => {
  const stream = createDataStream();
  stream.pipe(res);
});
```

## Integrating with Task State

You can interact with the task state to fetch or update task data:

```javascript
app.get("/task-state", async (req, res) => {
  try {
    const state = await namespaceWrapper.getTaskState({
      is_submission_required: true,
    });
    res.json(state);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Best Practices for Security

### Input Validation

Ensure that user input is validated before being processed:

```javascript
const { body, validationResult } = require("express-validator");

app.post(
  "/validate-input",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ success: true });
  },
);
```

### Rate Limiting

Limit the number of requests a user can make:

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests
});

app.use(limiter);
```

### CORS Configuration

Control which domains can access your API:

```javascript
const cors = require("cors");

app.use(cors()); // Allow all domains by default

// Or configure it specifically
app.use(
  cors({
    origin: ["https://allowed-domain.com"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
```

## Monitoring and Logging

### Request Logging

Log every request for debugging or auditing:

```javascript
const morgan = require("morgan");

app.use(morgan("combined"));
app.use(morgan(":method :url :status :response-time ms"));
```

### Performance Monitoring

Track the time each request takes to process:

```javascript
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} took ${duration}ms`);
  });
  next();
});
```

## Testing API Endpoints

Test your API endpoints to ensure they work as expected:

```javascript
const request = require("supertest");

describe("API Endpoints", () => {
  it("GET /status should return status", async () => {
    const response = await request(app).get("/status").expect(200);
    expect(response.body).toHaveProperty("status");
  });
});
```

## Best Practices

1. **Error Handling**: Ensure all routes have proper error handling.
2. **Validation**: Validate input data before processing.
3. **Security**: Implement security measures (authentication, rate limiting).
4. **Logging**: Use logging for debugging and monitoring.
5. **Testing**: Write tests for all endpoints.

## Next Steps

To learn more about specific features, check out these guides:

- [Database Operations](./nedb.md) - Learn about data storage.
- [File System](./filesystem-access.md) - Handle files and directories.
- [Blockchain/Transaction Operations](./wallet-signatures.md) - Work with blockchain and transaction operations.
- [Task Status](./task-state.md) - Get task state information with namespace methods.
- [Network/Task Handling](./network-task-handling.md) - Manage network data and tasks.
- [Audit and Distribution](./audit-distribution-operations.md) - Manage network data and tasks.
