---
title: REST APIs
description: Express is the most popular Node web framework, which also serves as an underlying library for other popular Node web frameworks.
image: img/thumbnail.png
sidebar_label: REST APIs
---


# REST APIs in Koii Tasks

The Namespace Wrapper provides built-in support for REST APIs through Express.js, enabling tasks to handle HTTP requests and serve responses. This functionality is essential for tasks that need to communicate with external services or provide API endpoints.

## Overview

Express.js is integrated into the Koii task environment, providing:
- HTTP request handling with various verbs (GET, POST, PUT, DELETE)
- Middleware support for request processing
- Route management
- Response handling

## Basic Setup

The Express app is automatically initialized in the task environment. You can access it through the task's main file:

```javascript
const { namespaceWrapper } = require('@_koii/namespace-wrapper');

// The app object is available in your task
if (app) {
  // Define your routes and middleware here
}
```

## Route Handling

### Basic Routes

```javascript
// GET endpoint
app.get('/status', (req, res) => {
  res.json({ status: 'active' });
});

// POST endpoint
app.post('/submit-data', async (req, res) => {
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

```javascript
// Route with URL parameters
app.get('/task/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  res.json({ taskId });
});

// Route with query parameters
app.get('/search', (req, res) => {
  const { query, limit } = req.query;
  res.json({ query, limit });
});
```

## Middleware

### Request Processing

```javascript
// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Authentication middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// Apply middleware to specific routes
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ data: 'protected data' });
});
```

### Error Handling

```javascript
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});
```

## Request Handling Examples

### File Upload

```javascript
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), async (req, res) => {
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

```javascript
app.post('/process-json', express.json(), async (req, res) => {
  try {
    const data = req.body;
    const result = await processJsonData(data);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

### Streaming Response

```javascript
app.get('/stream-data', (req, res) => {
  const stream = createDataStream();
  stream.pipe(res);
});
```

## Integration with Task State

### State-Aware Endpoints

```javascript
app.get('/task-state', async (req, res) => {
  try {
    const state = await namespaceWrapper.getTaskState({
      is_submission_required: true
    });
    res.json(state);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### Round Management

```javascript
app.post('/submit-round', async (req, res) => {
  try {
    const { submission } = req.body;
    const round = await namespaceWrapper.getRound();
    await namespaceWrapper.checkSubmissionAndUpdateRound(submission, round);
    res.json({ success: true, round });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Security Best Practices

### Input Validation

```javascript
const { body, validationResult } = require('express-validator');

app.post(
  '/validate-input',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ success: true });
  }
);
```

### Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

### CORS Configuration

```javascript
const cors = require('cors');

// Basic CORS setup
app.use(cors());

// Custom CORS configuration
app.use(cors({
  origin: ['https://allowed-domain.com'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## Error Handling Patterns

### Async Route Handler

```javascript
const asyncHandler = fn => (req, res, next) => {
  return Promise
    .resolve(fn(req, res, next))
    .catch(next);
};

app.get('/async-route', asyncHandler(async (req, res) => {
  const data = await fetchData();
  res.json(data);
}));
```

### Custom Error Classes

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.status = 400;
  }
}

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.status).json({
      error: err.name,
      message: err.message
    });
  }
  next(err);
});
```

## Testing Endpoints

### Basic Test Setup

```javascript
const request = require('supertest');

describe('API Endpoints', () => {
  it('GET /status should return status', async () => {
    const response = await request(app)
      .get('/status')
      .expect(200);
    
    expect(response.body).toHaveProperty('status');
  });
});
```

## Monitoring and Logging

### Request Logging

```javascript
const morgan = require('morgan');

// Log all requests
app.use(morgan('combined'));

// Custom logging format
app.use(morgan(':method :url :status :response-time ms'));
```

### Performance Monitoring

```javascript
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} took ${duration}ms`);
  });
  next();
});
```

## Best Practices

1. **Error Handling**: Always implement proper error handling for all routes
2. **Validation**: Validate all input data before processing
3. **Security**: Implement appropriate security measures (authentication, rate limiting)
4. **Logging**: Use proper logging for debugging and monitoring
5. **Testing**: Write tests for all endpoints

## Next Steps

For more information about related features, refer to:
- [Task State Management](./task-state.md)
- [NeDB Storage](./nedb.md)
- [Wallet Signatures](./wallet-signatures.md)