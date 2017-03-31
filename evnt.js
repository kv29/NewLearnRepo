var events = require('events');
var eventEmitter = new events.EventEmitter();


eventEmitter.on('doorOpen', function (msg) {
	console.log(msg)
});

eventEmitter.emit('doorOpen', 'ring ring');


