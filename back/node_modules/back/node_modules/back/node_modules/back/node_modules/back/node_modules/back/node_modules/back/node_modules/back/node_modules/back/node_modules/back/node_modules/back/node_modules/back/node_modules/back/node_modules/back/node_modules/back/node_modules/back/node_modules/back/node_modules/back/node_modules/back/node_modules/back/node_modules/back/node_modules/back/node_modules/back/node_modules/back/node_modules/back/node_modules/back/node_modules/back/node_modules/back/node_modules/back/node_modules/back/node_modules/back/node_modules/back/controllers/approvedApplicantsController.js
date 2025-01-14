import ApprovedVolunteerModel from "../models/approvedApplicants.js";

const createApprovedVolunteer = async (req, res) => {
  const {
    firstname,
    lastname,
    dob,
    address,
    city,
    phone,
    email,
    daysOfVolunteer,
    timesOfVolunteer,
    hoursPerWeek,
    priorVoluntary,
    priorExperience,
    skillsOrCertification,
    why,
    expectations,
    referenceName,
    referenceRelationship,
    referencePhoneNumber,
    referenceEmail,
    backgroundCheck,
  } = req.body;
  try {
    const newVolunteer = new ApprovedVolunteerModel({
      firstname,
      lastname,
      dob,
      address,
      city,
      phone,
      email,
      daysOfVolunteer,
      timesOfVolunteer,
      hoursPerWeek,
      priorVoluntary,
      priorExperience,
      skillsOrCertification,
      why,
      expectations,
      referenceName,
      referenceRelationship,
      referencePhoneNumber,
      referenceEmail,
      backgroundCheck,
    });

    const result = await newVolunteer.save();
    res.status(200).json({ success: true, result, msg: "Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const fetchApprovedVolunteers = async (res) => {
  try {
    const volunteers = await ApprovedVolunteerModel.find({});
    res.status(200).json({ success: true, volunteers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export { createApprovedVolunteer, fetchApprovedVolunteers };
