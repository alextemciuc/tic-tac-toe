const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth.routes');
const statisticRouter = require('./routes/statistic-routes');

const app = express();

app.use(express.json({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/statistic', statisticRouter);

const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'));
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start();
