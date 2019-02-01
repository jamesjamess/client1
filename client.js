var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var client = new net.Socket();
client.connect(PORT, HOST, function() {
 console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 client.write('5935512098');
});
client.on('data', function(data) {
 console.log('DATA: ' + data);
 if(data == 'OK')
 {
     let word = process.openStdin()
     word.addListener('data', (d) => {
         client.write('' + d)
     })
 }
 else if (data == 'END')
 {
     client.destroy()
 }


});
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});