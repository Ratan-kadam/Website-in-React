var express = require("express");
var app     = express();
var server = require('http').Server(app);
var path    = require("path");
var io = require('socket.io')(server);
const fs = require('fs');
const config = require('./config');

var bite_size;
var file; // logfile description
var readcount = 0;
var checker; // timer
var myFiles = []; // holding all the file names;
var location;

/* loading setting from config file */
for(var fi in config.Files) {
  myFiles.push(fi);
}

location = config.Files[myFiles[0]];
bite_size = config.bite_size;

fs.open(location, 'r', function (err, fd) { file = fd;
  var stats = fs.fstatSync(file);
  readcount = stats.size-1;
  startTimer();
});

server.listen(3001);

console.log("Running at Port 3001");

io.on("connection",function(socket){
  console.log("new client connected..");
  socket.emit("alert", myFiles);

  socket.on("changeFile", function(newfile){
    location = config.Files[newfile];
    fs.open(location, 'r', function (err, fd) { file = fd;
      var stats = fs.fstatSync(file);
      readcount = stats.size-1; // defining readcount
      stopTimer();
      startTimer();
      console.log("now watching:" + location);
    });
  });

});

function startRead() {
  var stats = fs.fstatSync(file);
  if(stats.size > readcount) {
    fs.read(file, new Buffer(bite_size), 0, bite_size, readcount, sendToBrowser);
  }
}


function sendToBrowser(err, bytecount, buff) {
  var newChunk = buff.toString('utf-8', 0, bytecount);
  var totalObj = {};
  totalObj.newChunk = newChunk;
  totalObj.ReadFile = location;
  totalObj = JSON.stringify(totalObj);
  io.emit("newLog", totalObj);
  readcount+=bytecount;
  console.log("NEWLOG emitted TO " + location);
}


function startTimer() {
  checker = setInterval(function(){
    startRead();
  },1000);
}

function stopTimer() {
  clearInterval(checker);
}
