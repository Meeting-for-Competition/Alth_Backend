var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

MONGODB_URI='mongodb://localhost:question'
mongoose.connect(MONGODB_URI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });


var UsersSchema = mongoose.Schema({
  id : {type : String},
  name: {type : String},
  passwd : {type : String},
  token : {type: String}
});

var QueSchema = mongoose.Schema({
  title: {type: String},
  content: {type : String},
  answer : {type: String},
  token : {type: String},
  docNum : {type: Number}
});


Users = mongoose.model('users', UsersSchema);
Question = mongoose.model('questions', QueSchema);

exports.Users = Users;
exports.Question = Question;