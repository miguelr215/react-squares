import * as dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

import app from './app.js';

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PW);

// Connect to DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to DB'))
  .catch((err) => console.log(`Error connecting to DB: ${err}`));

// Start Server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
