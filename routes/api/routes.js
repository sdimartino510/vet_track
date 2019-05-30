const router = require("express").Router();
const Patient = require("../../model/Patient");
const Client = require('../../model/Client');
var mongoose = require("mongoose");
router.route("/login").post((req, res) => {
  console.log("req.body", req.body);
  
  
  
  
  res.status(200).json({ result: "success" });
});

router.route('/patientinfo').post((req, res) => {
  console.log("Patient Info", req.body);
  const data = req.body;
  console.log(data);
  let PatientModel = new Patient(req.body);
  
   PatientModel.save((error) => {
    console.log("Your Patient has been saved");
    if(error){
      console.error(error);
    }
  })
})


router.route('/clientinfo').post((req, res) => {
  console.log("Client Info", req.body);
  const data = req.body;
  console.log(data);
  let ClientModel = new Client(req.body);
  
   ClientModel.save((error) => {
    console.log("Your Patient has been saved");
    if(error){
      console.error(error);
    }
  })
})


router.route("/status/:name").get((req, res) => {
  var Patient = mongoose.model('patients');
  Patient.findOne({petsName: req.params.name}, (error, data) => {
    console.log(data); 
    res.json(data);
  });
 
})

module.exports = router;
