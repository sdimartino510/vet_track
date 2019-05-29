var mongoose = require ('mongoose');

var PatientSchema = new mongoose.Schema({
    species: String,
    gender: String,
    breed: String,
    age: Number,
    colorMarkings: String
});

var Patient = mongoose.model("patients", PatientSchema);
module.exports = Patient;