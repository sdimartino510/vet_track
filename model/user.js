var mongoose = require ('mongoose');

var userSchema = new mongoose.Schema({
   username: {type: String, unique: true},
   password: {type: String},
   firstname: String,
   lastname: String,
   email: String,
   phonenumber: Number,
   address: String,
   address2: String,
   city: String,
   state: String,
   zip: Number,
   additional: String,
   status : [{ type: Schema.Types.ObjectId, ref: 'Status' }]
});

// var User = mongoose.model('myuser', userSchema);
// module.exports = User;

var statusSchema = new mongoose.Schema ({
  username: {type: String, unique: true},
  preop: Date,
  surgicalprep: Date,
  induction: Date,
  startofsurgery: Date,
  twohoursleft: Date,
  onehourleft: Date,
  fifteenminutesleft: Date,
  recovery: Date,
  recovered: Date,
  pickupinxhours: Date, 
})

var User = mongoose.model('myuser', userSchema);
module.exports = User;

var Status  = mongoose.model('status', statusSchema);
module.exports = Status;