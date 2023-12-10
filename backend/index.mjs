// Importing dependencies
import express from 'express';
import cors from 'cors';

// Importing the route module
import crudRouter from './routes/crud.mjs';

// Creating an Express application
const app = express();
const port = 3000;

// Middleware for parsing JSON and handling CORS
app.use(express.json());
app.use(cors());

// Using the route module
app.use('/crud', crudRouter);

// Start the Express server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
