

const client = require('twilio')(
    'AC29570f44a0080bc25e643c231478045f',
    'f5e380296ed0fdbb4139147840dfc8a3'
  );
  



const express = require("express");
const app = express();
const server = app.listen(8080);
var path = require("path");
const io = require("socket.io")(server);
const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("/dev/tty.usbmodem14631", {
    baudRate: 9600
});

let notificationOpts = {
    identity: '00000001', // We recommend using a GUID or other anonymized identifier for Identity.
    body: 'Knok-Knok! This is your first Notify SMS',
  };

//expose the local public folder for inluding files js, css etc..
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

const parser = port.pipe(new Readline({ delimiter: "\r\n" }));

parser.on("data", function(data) {
    io.sockets.emit("data", data);
    client.messages.create({
        from: '+14245433073',
        to: '+14158667411',
        body:data
      }).then((messsage) => console.log(message.sid));
    console.log(data);
});

