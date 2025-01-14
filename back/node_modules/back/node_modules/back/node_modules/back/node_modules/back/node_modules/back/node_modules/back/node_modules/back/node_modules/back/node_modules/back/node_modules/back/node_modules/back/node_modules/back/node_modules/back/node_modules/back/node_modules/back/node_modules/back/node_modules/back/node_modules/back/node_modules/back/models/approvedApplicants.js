import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    dob: { type: String },
    address: { type: String },
    city: { type: String },
    phone: { type: String },
    email: { type: String, unique: true },
    daysOfVolunteer: { type: [String], default: [] },
    timesOfVolunteer: { type: [String], default: [] },
    hoursPerWeek: { type: Number },
    priorVoluntary: { type: String },
    priorExperience: { type: String },
    skillsOrCertification: { type: String },
    why: { type: String },
    expectations: { type: String },
    referenceName: { type: String },
    referenceRelationship: { type: String },
    referencePhoneNumber: { type: String },
    referenceEmail: { type: String },
    backgroundCheck: { type: String },
  },
  { collection: "approved", timestamps: true }
);

const ApprovedVolunteerModel = mongoose.model("approved", volunteerSchema);
export default ApprovedVolunteerModel;
