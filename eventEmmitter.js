const http = require ('http');

// using an event emmitter

const server = http.createServer () // emit requst event, subscribe to it, listen for it/ respond to it

server.on ('request', (req, res) => {
    res.end (`welcome`)
})

server.listen (8000)








// const EventEmitter = require ('events');
// const customEmitter = new EventEmitter () // on - listen for an event, emit = emit an event

// customEmitter.on ('reply', (name, id) => {
//     console.log(`information received ${name} with id: ${id}`);
// })

// customEmitter.emit (`reply`, 'Olla', 25)

