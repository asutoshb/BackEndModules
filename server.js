const EventEmitter = require('events');

const {verifyEmail, sendWelcomeEmail} = require('./sendEmail');

const eventEmitter = new EventEmitter();

const register = () => {
    eventEmitter.on("user registered", verifyEmail);

    eventEmitter.on("user registered", sendWelcomeEmail);

    eventEmitter.emit("user registered", {email: "test@example.com"});
}

register();