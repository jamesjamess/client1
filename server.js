var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var server = net.createServer();
let answer=Math.floor(Math.random() * 5);
server.listen(PORT, HOST);
server.on('connection', function(sock) {
 console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
 sock.on('data', function(data) {
 console.log('DATA ' + sock.remoteAddress + ': ' + data);
 sock.write('OK');
 console.log(answer)
 if (data==answer)
 {
    sock.write('Bingo')
 }
 else
 {
    sock.write('Wrong')    
 }
 });
 sock.on('close', function(data) {
 console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
 })
}).listen(PORT, HOST)
console.log('Server listening on ' + HOST +':'+ PORT)