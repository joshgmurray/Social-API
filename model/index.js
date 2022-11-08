const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require('./user.model');
db.thought = require('./thought.model');
db.reaction = require('./reaction.model');

module.experts = db;