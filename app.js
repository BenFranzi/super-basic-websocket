var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    path: '/yo',
    //example stuff
    serveClient: true,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
    //end example stuff
});

io.on('connection', function(socket){

  console.log('client connected');

  socket.on('disconnect', function(){
    console.log('client disconnected');
  });

  socket.on('message', function(msg){
    console.log('recieved: ', msg);
    
    const response = msg.split("").reverse().join(""); //modify the message
    
    io.emit('message', response); 
    console.log('sending: ', response);
  });
});

const PORT = process.env.PORT || 3000

http.listen(PORT, function(){
  console.log(`listening on *:${PORT}`);
});