//creating EventEmmiter class
const EventEmitter= require('events');

//creating obect of event emitter
const event=new EventEmitter();

// creating event 
event.on('mychange',()=>{
    console.log('this event is triggerd');
})

// if we create event with same name then all event with same name will we called at once by listening only one time.
event.on('mychange',()=>{
    console.log('this event is triggerd');
})
event.on('mychange',()=>{
    console.log('this event is triggerd');
})
// listening to event 
event.emit('mychange');

//passing parameter to event 
event.on('mychange2', (statusCode,message)=>{
    console.log(`this event has status code ${statusCode} is ${message}`);
});

//listening event with parameter 
event.emit('mychange2',200,'ok');