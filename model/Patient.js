var mongoose = require ('mongoose');

var PatientSchema = new mongoose.Schema({
    petsName: String,
    species: String,
    gender: String,
    breed: String,
    age: Number,
    colorMarkings: String,
    isSpayedNeutered: String,
    isMicrochipped: String,
    medicalHistory: String,
    time : { type : Date, default: Date.now }
});

var Patient = mongoose.model("patients", PatientSchema);
module.exports = Patient;