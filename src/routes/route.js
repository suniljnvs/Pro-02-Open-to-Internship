const express = require('express');

const router = express.Router();


const { collegeName } = require('../controllers/collegeController');
const { internDetails , getCollegeDetails} = require("../controllers/internController")


// college details api
router.post("/functionup/colleges", collegeName);

// interns details api
router.post("/functionup/interns", internDetails);

router.get("/functionup/collegeDetails", getCollegeDetails)










module.exports = router;