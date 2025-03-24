const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (Ensure index.html and audios folder are in the same directory)
app.use(express.static(__dirname));
app.use('/audios', express.static(path.join(__dirname, 'audios')));

// Setup SerialPort
const port = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 115200 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

port.on('open', () => {
    console.log('Serial Port Opened');
});

parser.on('data', (data) => {
    const trimmedData = data.trim();
    console.log('Received:', trimmedData);

    // Send raw data to frontend
    io.emit('rawData', trimmedData);

    // Extract "Gesture 6" text from incoming data
    const match = trimmedData.match(/Gesture \d+:\s*(.+)/);
    if (match) {
        const gestureText = match[1].trim();
        io.emit('gestureData', gestureText); // Send extracted gesture message
    }
});

port.on('error', (err) => {
    console.error('Serial Port Error:', err.message);
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
