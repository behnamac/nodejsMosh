const EventEmitter = require("events");

const emitter = new EventEmitter();

//Register a Listener
emitter.on("messageLogged", (arg) => {
  console.log("Listener Called", arg);
});

//Raise an event
//emitter.emit('messageLogged',{id:1,message:"Hello"});

//Raise :loggin(data:message)
emitter.emit("messageLogged", "Hello Behnam");
