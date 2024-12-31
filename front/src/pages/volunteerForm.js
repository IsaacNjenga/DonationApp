import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function VolunteerForm() {
  const [values, setValues] = useState({
    daysOfVolunteer: [],
    timesOfVolunteer: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setValues({
        ...values,
        daysOfVolunteer: [...values.daysOfVolunteer, value],
        timesOfVolunteer: [...values.timesOfVolunteer, value],
      });
    } else {
      setValues({
        ...values,
        daysOfVolunteer: values.daysOfVolunteer.filter((day) => day !== value),
        timesOfVolunteer: values.timesOfVolunteer.filter(
          (time) => time !== value
        ),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({});
  };
  return (
    <>
      <Navbar />
      <div>
        VolunteerForm
        <div>
          <form onSubmit={handleSubmit}>
            <div className="personal-information-div">
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
            <div>
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
            <div>
              Total hours available per week:
              <input
                type="number"
                onChange={handleChange}
                name="hoursPerWeek"
                value={values.hoursPerWeek}
              />
            </div>
            <div>
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
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VolunteerForm;
