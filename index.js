var connect = require('connect');
var serveStatic = require('serve-static');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var users = 0;
var userapprovals = 0;

var songrequests = [];
var num_songrequests = 0;

var approvedsongs = [];
var num_approvedsongs = 0;

io.on('connection',function(socket){
	users++;
	console.log('User '+users+' connected');

	socket.on('disconnect', function(){
		users--;
	console.log('A user disconnected. '+users+' remaining.');
	});

	socket.on('new song', function(song){
	songrequests.push([num_songrequests, song, 0]);
	num_songrequests++;
	console.log('"'+song+'" was added. Now '+num_songrequests+' requests: '+songrequests);
	io.emit('add request', num_songrequests-1, song);
	});

	socket.on('user approves', function(songnum){
		songrequests[songnum][2]++;
		console.log('a user approved a song: '+songrequests);
		if (songrequests[songnum][2]==users) io.emit('song approved', songnum, songrequests[songnum][1]);
	});

	socket.on('user disapproves', function(songnum){
		songrequests[songnum][2]--;
		console.log('a user un-approved a song: '+songrequests);
	})
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});

//connect().use(serveStatic(__dirname)).listen(8080);
