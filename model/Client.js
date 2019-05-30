var mongoose = require ('mongoose');

var ClientSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   email:String,
   phoneNumber: String,
   address: String, 
   address2: String,
   city: String,
   state: String,
   zip: String
});

var Client = mongoose.model("clients", ClientSchema);
module.exports = Client; 