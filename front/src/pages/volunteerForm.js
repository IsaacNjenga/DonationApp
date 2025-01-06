import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/volunteerForm.css";
import Loader from "../components/loader";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

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
      setLoading(false);
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
      <div className="volunteer-form-container">
        <div className="volunteer-form-bg-image">
          <div className="navbar-element">
            {" "}
            <Navbar />
          </div>
          <div className="volunteer-form-content">
            <div className="volunteer-form-header">
              <h1 style={{ color: "white", marginTop: "85px" }}>
                Volunteer Today!
              </h1>
              <h4 style={{ color: "white" }}>
                <Link to="/" className="home-link">
                  HOME
                </Link>{" "}
                &gt; VOLUNTEER APPLICATION{" "}
              </h4>
            </div>
          </div>
        </div>

        <div className="volunteer-form">
          <div>
            <form onSubmit={openFormModal} className="volunteer-form">
              <h1>Volunteer Application Form</h1>
              <p>Please complete the form below to apply as a volunteer.</p>

              {/* Personal Information */}
              <div className="form-section">
                <h2>1. Personal Information</h2>
                <p>
                  Provide your basic details so we can get to know you better.
                </p>
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  value={values.firstname}
                  required
                />
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  value={values.lastname}
                  required
                />
                <label>Date of Birth *</label>
                <input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  value={values.dob}
                  required
                />
                <label>Address *</label>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={values.address}
                  required
                />
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={values.city}
                  required
                />
                <label>Phone Number *</label>
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  required
                />
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  required
                />
              </div>

              {/* Availability */}
              <div className="form-section">
                <h2>2. Availability</h2>
                <p>a). Let us know when you’re available to volunteer.</p>
                <label>Days available (Check all that apply)</label>
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
                    />
                    <label htmlFor={day.toLowerCase()}>{day}</label>
                  </div>
                ))}
                <br />
                <label>b). Preferred time (Check all that apply)</label>
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
                <br />
                <label>c). Total hours available per week</label>
                <input
                  type="number"
                  name="hoursPerWeek"
                  onChange={handleChange}
                  value={values.hoursPerWeek}
                />
              </div>

              {/* Background Information */}
              <div className="form-section">
                <h2>3. Background Information</h2>
                <p>Tell us about your past experience and skills.</p>
                <label>Have you volunteered before?</label>
                <div>
                  <input
                    type="radio"
                    id="volunteer-yes"
                    name="priorVoluntary"
                    value="Yes"
                    checked={values.priorVoluntary === "Yes"}
                    onChange={handleChange}
                  />
                  <label htmlFor="volunteer-yes">Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="volunteer-no"
                    name="priorVoluntary"
                    value="No"
                    checked={values.priorVoluntary === "No"}
                    onChange={handleChange}
                  />
                  <label htmlFor="volunteer-no">No</label>
                </div>
                <label>If yes, describe your experience:</label>
                <textarea
                  name="priorExperience"
                  placeholder="Summarize your previous volunteer work"
                  onChange={handleChange}
                  value={values.priorExperience}
                />
                <label>
                  Do you have any relevant skills or certifications (e.g., first
                  aid, teaching, counselling):
                </label>
                <textarea
                  name="skillsOrCertification"
                  placeholder="List your skills or certifications"
                  onChange={handleChange}
                  value={values.skillsOrCertification}
                />
              </div>

              {/* References */}
              <div className="form-section">
                <h2>4. References</h2>
                <p>
                  Provide details for someone we can contact as a reference.
                </p>
                <label>Name *</label>
                <input
                  type="text"
                  name="referenceName"
                  onChange={handleChange}
                  value={values.referenceName}
                  required
                />
                <label>Relationship *</label>
                <input
                  type="text"
                  name="referenceRelationship"
                  onChange={handleChange}
                  value={values.referenceRelationship}
                  required
                />
                <label>Phone Number *</label>
                <input
                  type="text"
                  name="referencePhoneNumber"
                  onChange={handleChange}
                  value={values.referencePhoneNumber}
                  required
                />
                <label>Email *</label>
                <input
                  type="email"
                  name="referenceEmail"
                  onChange={handleChange}
                  value={values.referenceEmail}
                  required
                />
              </div>

              <button type="submit">Submit Application</button>
            </form>

            {volunteerForm && (
              <div className="form-modal-overlay" onClick={closeFormModal}>
                <div
                  className="form-modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="close-modal-btn" onClick={closeFormModal}>
                    &times;
                  </button>
                  <div className="form-modal-body">
                    <h2 className="modal-title">Review Your Application</h2>
                    <div className="form-modal-section">
                      <h3>Personal Information</h3>
                      <p>
                        <strong>First Name:</strong> {values.firstname}
                      </p>
                      <p>
                        <strong>Last Name:</strong> {values.lastname}
                      </p>
                      <p>
                        <strong>Date of Birth:</strong> {values.dob}
                      </p>
                      <p>
                        <strong>Address:</strong> {values.address}
                      </p>
                      <p>
                        <strong>City:</strong> {values.city}
                      </p>
                      <p>
                        <strong>Phone Number:</strong> {values.phone}
                      </p>
                      <p>
                        <strong>Email:</strong> {values.email}
                      </p>
                    </div>
                    <div className="form-modal-section">
                      <h3>Availability</h3>
                      <p>
                        <strong>Days Available:</strong>{" "}
                        {values.daysOfVolunteer.join(", ")}
                      </p>
                      <p>
                        <strong>Preferred Times:</strong>{" "}
                        {values.timesOfVolunteer.join(", ")}
                      </p>
                      <p>
                        <strong>Total Hours Per Week:</strong>{" "}
                        {values.hoursPerWeek}
                      </p>
                    </div>
                    <div className="form-modal-section">
                      <h3>Background</h3>
                      <p>
                        <strong>Volunteered Before:</strong>{" "}
                        {values.priorVoluntary}
                      </p>
                      <p>
                        <strong>Previous Experience:</strong>{" "}
                        {values.priorExperience}
                      </p>
                      <p>
                        <strong>Skills & Certification:</strong>{" "}
                        {values.skillsOrCertification}
                      </p>
                    </div>
                    <div className="form-modal-section">
                      <h3>Motivation</h3>
                      <p>
                        <strong>Reason for Volunteering:</strong> {values.why}
                      </p>
                      <p>
                        <strong>What You Hope to Achieve:</strong>{" "}
                        {values.expectations}
                      </p>
                    </div>
                    <div className="form-modal-section">
                      <h3>References</h3>
                      <p>
                        <strong>Name:</strong> {values.referenceName}
                      </p>
                      <p>
                        <strong>Email:</strong> {values.referenceEmail}
                      </p>
                      <p>
                        <strong>Relationship:</strong>{" "}
                        {values.referenceRelationship}
                      </p>
                      <p>
                        <strong>Phone Number:</strong>{" "}
                        {values.referencePhoneNumber}
                      </p>
                    </div>
                    <div className="form-modal-section">
                      <h3>Background Check</h3>
                      <p>
                        <strong>Willing to Undergo Background Check:</strong>{" "}
                        {values.backgroundCheck}
                      </p>
                    </div>
                    <div className="form-modal-actions">
                      <button
                        onClick={handleSubmit}
                        className="volunteer-modal-submit-btn"
                      >
                        Submit Application
                      </button>
                      <button
                        onClick={closeFormModal}
                        className="volunteer-modal-edit-btn"
                      >
                        Edit Application
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VolunteerForm;
