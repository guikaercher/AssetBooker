const events = require('events');
const messageBus = new events.EventEmitter();

require('./config')();
require('./asset')();
