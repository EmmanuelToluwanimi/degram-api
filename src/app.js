const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {PORT} = require('./utils/constants');
const routes = require('./routes');
const {connectDb} = require('./utils/db');
const app = express();
const server = require('http').createServer(app);
const {Server} = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*',
  }
})

module.exports = {io}

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(PORT, async() => {
  routes(app);
  await connectDb()
  console.log(`Server running on port ${PORT}`);
});
