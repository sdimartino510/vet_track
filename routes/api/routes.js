const router = require("express").Router();
const Patient = require("../../model/Patient");
const Client = require('../../model/Client');
// const user = require("../../model/user");

router.route("/login").post((req, res) => {
  console.log("req.body", req.body);
  res.status(200).json({ result: "success" });
});
router.route("/profile").post((req, res) => {
  console.log("req.body - profile", req.body);
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


router.route("/status").get((req, res) => {
  Client.find({ name: /^fluff/ }, callback);
})

module.exports = router;
