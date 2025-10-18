
/*
n event is an action or occurrence that happens in the system you can respond to with code. Events are a core part of both browser and Node.js programming.
in browser
document.getElementById('btn').addEventListener('click', function() {
    alert('Button clicked!');
});

in node */
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
console.log('eventEmitter', eventEmitter);
eventEmitter.on('event', () => {
    console.log('an event occurred!');
});
eventEmitter.emit('event');

module.exports = eventEmitter; 

/*
If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

On the backend side, Node.js offers us the option to build a similar system using the events module.

This module, in particular, offers the EventEmitter class, which we'll use to handle our events.

The use of this pattern is to decouple your code—it allows different parts of your application to communicate without being tightly linked.
*/


//added comment

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
console.log('eventEmitter', eventEmitter);
eventEmitter.on('event', () => {
    console.log('an event occurred!');
});
eventEmitter.emit('event');

module.exports = eventEmitter; 