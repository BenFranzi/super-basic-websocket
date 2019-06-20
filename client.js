var io = require('socket.io-client')

//Note: socketing-adventure is the heroku web app, use local host to run it on your machine
const endpoint = 'https://socketing-adventure.herokuapp.com' || 'http://localhost:3000';
const socket = io(endpoint, {path: '/yo'});

//Log the recieved message
socket.on('message', (msg) => console.log("client recieved: ", msg));

//every three seconds emit a message
setInterval(() => {
    console.log("sending: Hello, World!"); 
    socket.emit('message', "Hello, World!");
}, 3000);