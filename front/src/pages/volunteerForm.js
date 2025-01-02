import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/volunteerForm.css";
import Loader from "../components/loader";
import { toast } from "react-hot-toast";
import axios from "axios";

function VolunteerForm() {
  const [loading, setLoading] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    address: "",
    city: "",
    phone: "",
    email: "",
    daysOfVolunteer: [],
    timesOfVolunteer: [],
    hoursPerWeek: "",
    priorVoluntary: "",
    priorExperience: "",
    skillsOrCertification: "",
    why: "",
    expectations: "",
    referenceName: "",
    referenceRelationship: "",
    referencePhoneNumber: "",
    referenceEmail: "",
    backgroundCheck: "",
  });

  const handleChange = (e) => {
    const { name, checked, value, type } = e.target;
    if (type === "checkbox") {
      setValues((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else if (type === "radio") {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post("create-volunteer", values).then((res) => {
        if (res.data.success) {
          setVolunteerForm(false);
          setLoading(false);
          setValues({
            firstname: "",
            lastname: "",
            dob: "",
            address: "",
            city: "",
            phone: "",
            email: "",
            daysOfVolunteer: [],
            timesOfVolunteer: [],
            hoursPerWeek: "",
            priorVoluntary: "",
            priorExperience: "",
            skillsOrCertification: "",
            why: "",
            expectations: "",
            referenceName: "",
            referenceRelationship: "",
            referencePhoneNumber: "",
            referenceEmail: "",
            backgroundCheck: "",
          });
          toast.success("Submission successful!", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Submission failed, try again", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const openFormModal = (e) => {
    e.preventDefault();
    setVolunteerForm(true);
  };

  const closeFormModal = () => {
    setVolunteerForm(false);
  };

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <div className="volunteer-form">
        VolunteerForm
        <div>
          <form onSubmit={openFormModal}>
            <div className="form-section">
              <h3>Personal information</h3>
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                onChange={handleChange}
                value={values.firstname}
              />{" "}
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                onChange={handleChange}
                value={values.lastname}
              />{" "}
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                onChange={handleChange}
                value={values.dob}
              />{" "}
              <label>Address </label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={values.address}
              />{" "}
              <label>City </label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                value={values.city}
              />{" "}
              <label>Phone Number </label>
              <input
                type="number"
                name="phone"
                onChange={handleChange}
                value={values.phone}
              />{" "}
              <label>Email </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div className="form-section">
              <h3>Availability</h3>
              <label>Days available to volunteer (Check all that apply)</label>
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <div key={day}>
                  <input
                    type="checkbox"
                    id={day.toLowerCase()}
                    value={day}
                    checked={values.daysOfVolunteer?.includes(day)}
                    name="daysOfVolunteer"
                    onChange={handleChange}
                  />{" "}
                  <label htmlFor={day.toLowerCase()}>{day}</label>
                </div>
              ))}
            </div>
            <div>
              <label>Preferred time (Check all that apply)</label>
              {["Morning", "Afternoon", "Evening"].map((time) => (
                <div key={time}>
                  <input
                    type="checkbox"
                    id={time.toLowerCase()}
                    value={time}
                    checked={values.timesOfVolunteer?.includes(time)}
                    name="timesOfVolunteer"
                    onChange={handleChange}
                  />
                  <label htmlFor={time.toLowerCase()}>{time}</label>
                </div>
              ))}
            </div>
            <div className="form-section">
              Total hours available per week:
              <input
                type="number"
                onChange={handleChange}
                name="hoursPerWeek"
                value={values.hoursPerWeek}
              />
            </div>
            <div className="form-section">
              <h3>Background information</h3>
              <label>Have you ever volunteered before?</label>
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="priorVoluntary"
                  value="Yes"
                  checked={values.priorVoluntary === "Yes"}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="yes">Yes</label>{" "}
              <div>
                <input
                  type="radio"
                  id="no"
                  name="priorVoluntary"
                  value="No"
                  checked={values.priorVoluntary === "No"}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="no">No</label>
              <div>
                {" "}
                <label>
                  If yes, please describe your previous experience in summary
                </label>
                <textarea
                  name="priorExperience"
                  value={values.priorExperience}
                  onChange={handleChange}
                />
              </div>
              <label>
                Do you have any relevant skills or certification (e.g., first
                aid, teaching, counselling)
              </label>
              <textarea
                name="skillsOrCertification"
                value={values.skillsOrCertification}
                onChange={handleChange}
              />
              <div className="form-section">
                <h3>Motivation</h3>
                <label>Why do you wish to be a volunteer?</label>
                <textarea
                  name="why"
                  value={values.why}
                  onChange={handleChange}
                />{" "}
                <label>
                  What do you hope to achieve through your volunteer experience?
                </label>
                <textarea
                  name="expectations"
                  value={values.expectations}
                  onChange={handleChange}
                />
              </div>
              <div className="form-section">
                <h3>References</h3>
                <label>Please provide a reference (not family members)</label>
                <label>Name:</label>
                <input
                  type="text"
                  name="referenceName"
                  onChange={handleChange}
                  value={values.referenceName}
                />
                <label>Relationship:</label>{" "}
                <input
                  type="text"
                  name="referenceRelationship"
                  onChange={handleChange}
                  value={values.referenceRelationship}
                />
                <label>Phone Number:</label>{" "}
                <input
                  type="number"
                  name="referencePhoneNumber"
                  onChange={handleChange}
                  value={values.referencePhoneNumber}
                />
                <label>Email</label>{" "}
                <input
                  type="text"
                  name="referenceEmail"
                  onChange={handleChange}
                  value={values.referenceEmail}
                />
                <label>Are you willing to undergo a background check?</label>
                <div>
                  <input
                    type="radio"
                    id="yes"
                    name="backgroundCheck"
                    value="Yes"
                    checked={values.backgroundCheck === "Yes"}
                    onChange={handleChange}
                  />
                  <label htmlFor="yes">Yes</label>{" "}
                </div>
                <div>
                  <input
                    type="radio"
                    id="no"
                    name="backgroundCheck"
                    value="No"
                    checked={values.backgroundCheck === "No"}
                    onChange={handleChange}
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>

          {volunteerForm && (
            <div className="form-modal-overlay" onClick={closeFormModal}>
              <div
                className="form-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                {" "}
                <button className="close-modal-btn" onClick={closeFormModal}>
                  &times;
                </button>
                <div className="form-modal-body">
                  <div className="form-body">
                    <p>First Name</p>
                    <p>{values.firstname}</p>
                    <p>Last Name</p>
                    <p>{values.lastname}</p>
                    <p>Date of Birth</p>
                    <p>{values.dob}</p>
                    <p>Address</p>
                    <p>{values.address}</p>
                    <p>City</p>
                    <p>{values.city}</p>
                    <p>Phone Number</p>
                    <p>{values.phone}</p>
                    <p>Email</p>
                    <p>{values.email}</p>
                    <p>Days available to volunteer</p>
                    {values.daysOfVolunteer.map((d) => (
                      <p>{d}</p>
                    ))}
                    <p>Time available</p>
                    {values.timesOfVolunteer.map((t) => (
                      <p>{t}</p>
                    ))}
                    <p>Hours per week</p>
                    <p>{values.hoursPerWeek}</p>
                    <p>Background</p>
                    <p>{values.priorVoluntary}</p>
                    <p>Prior Experience</p>
                    <p>{values.priorExperience}</p>
                    <p>Skills & Certification</p>
                    <p>{values.skillsOrCertification}</p>
                    <p>Motivation</p>
                    <p>{values.why}</p>
                    <p>Expectations</p>
                    <p>{values.expectations}</p>
                    <p>Reference</p> <p>Name</p>
                    <p>{values.referenceName}</p>
                    <p>Email</p>
                    <p>{values.referenceEmail}</p>
                    <p>Relationship</p>
                    <p>{values.referenceRelationship}</p>
                    <p>Phone Number</p>
                    <p>{values.referencePhoneNumber}</p>
                    <p>Willingness for background check</p>
                    <p>{values.backgroundCheck}</p>
                    <div>
                      <button onClick={handleSubmit}>Submit application</button>
                      <button onClick={closeFormModal}>Edit application</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VolunteerForm;
