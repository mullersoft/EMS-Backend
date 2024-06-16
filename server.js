const mongoose = require('mongoose');
const dotenv = require('dotenv');
process.on('uncaughtException', (err) => {
  console.log('uncaught Exception SHUTDOWN----');
  console.log(err.name, err.message);
  process.exit(1);
});
const app = require('./app');
dotenv.config({ path: './config.env' });

mongoose
  .connect('mongodb://127.0.0.1:27017/Final_project_database')
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}--`);
});
process.on('unhandledRejection', (err) => {
  console.log('unhandled Rejection SHUTDOWN----');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

