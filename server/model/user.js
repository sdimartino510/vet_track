var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create Schema for User
var userSchema = new mongoose.Schema({
    username: {type: String, 
    required: true
  },
   password: {
     type: String,
     required: true
  },
   firstname: {
     type: String,
     required: true
   },
   lastname: {
     type: String,
     required: true
   },
   email: {
     type: String,
     required: true
   },
   phonenumber: {
     type: Number,
     required: true
   },
   address: {
     type: String,
     required: true
   },
   address2: {
     type: String,
     required: false
   },
   city: {
     type: String,
     required: false
   },
   state: {
     type: String,
     required: false
   },
   zip: {
     type: Number,
     required: false
   },
   additional: {
     type: String,
     required: false
   },
   
   status : [{ type: Schema.Types.ObjectId, ref: 'Status' }]
});

// var User = mongoose.model('myuser', userSchema);
// module.exports = User;

var statusSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  preop: Date,
  surgicalprep: Date,
  induction: Date,
  startofsurgery: Date,
  twohoursleft: Date,
  onehourleft: Date,
  fifteenminutesleft: Date,
  recovery: Date,
  recovered: Date,
  pickupinxhours: Date
});

var User = mongoose.model("myuser", userSchema);
module.exports = User;

var Status = mongoose.model("status", statusSchema);
module.exports = Status;
