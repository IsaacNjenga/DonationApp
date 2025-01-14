import VolunteerModel from "../models/Volunteer.js";

const createVolunteer = async (req, res) => {
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
    const newVolunteer = new VolunteerModel({
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
    res.status(201).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateVolunteer = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json("ID not specified");
  }
  try {
    const result = await VolunteerModel.findByOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res.status(201).json({ success: true, ...result._doc });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const fetchVolunteers = async (req, res) => {
  try {
    const volunteers = await VolunteerModel.find({});
    res.status(201).json({ success: true, volunteers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const fetchVolunteer = async (req, res) => {
  const { id } = req.query;
//console.log(id);
  if (!id) {
    res.status(400).json("ID not specified");
  }
  try {
    const volunteer = await VolunteerModel.findOne({ _id: id });
  //  console.log(volunteer);
    res.status(201).json({ success: true, volunteer });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteVolunteer = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "No ID specified" });
  }
  try {
    const volunteer = await VolunteerModel.findById(id);
    if (!volunteer) {
      return res.status(400).json({ error: "No volunteer found" });
    }
    await VolunteerModel.findByIdAndDelete({ _id: id });
    const volunteers = await VolunteerModel.find({});
    res.status(201).json({ success: true, volunteers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export {
  createVolunteer,
  updateVolunteer,
  fetchVolunteers,
  fetchVolunteer,
  deleteVolunteer,
};
