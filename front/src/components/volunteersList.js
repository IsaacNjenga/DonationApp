import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import Loader from "./loader";
import "../assets/css/volunteerList.css";

function VolunteersList() {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [volunteers, setVolunteers] = useState([]);

  const fetchVolunteers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("fetch-volunteer", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const fetchedVolunteers = response.data.volunteers;
      setVolunteers(fetchedVolunteers);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });

  useEffect(() => {
    if (user) {
      fetchVolunteers();
    }
  }, [user]);

  return (
    <>
      {loading && <Loader />}
      <div className="volunteer-list-container">
        <h2>Volunteers</h2>
        {volunteers.map((v, index) => (
          <div key={v._id} className="volunteer-list-card">
            <div className="volunteer-list-header">
              <h3>Volunteer #{index + 1}</h3>
            </div>
            <div className="volunteer-list-details">
              <div className="detail-item">
                <strong>First Name:</strong> <span>{v.firstname}</span>
              </div>
              <div className="detail-item">
                <strong>Last Name:</strong> <span>{v.lastname}</span>
              </div>
              <div className="detail-item">
                <strong>Date of Birth:</strong> <span>{v.dob}</span>
              </div>
              <div className="detail-item">
                <strong>Address:</strong> <span>{v.address}</span>
              </div>
              <div className="detail-item">
                <strong>City:</strong> <span>{v.city}</span>
              </div>
              <div className="detail-item">
                <strong>Phone Number:</strong> <span>{v.phone}</span>
              </div>
              <div className="detail-item">
                <strong>Email:</strong> <span>{v.email}</span>
              </div>
              <div className="detail-item">
                <strong>Days Available:</strong>
                <span>{v.daysOfVolunteer.join(", ")}</span>
              </div>
              <div className="detail-item">
                <strong>Time Available:</strong>
                <span>{v.timesOfVolunteer.join(", ")}</span>
              </div>
              <div className="detail-item">
                <strong>Hours per Week:</strong> <span>{v.hoursPerWeek}</span>
              </div>
              <div className="detail-item">
                <strong>Background:</strong> <span>{v.priorVoluntary}</span>
              </div>
              <div className="detail-item">
                <strong>Prior Experience:</strong>{" "}
                <span>{v.priorExperience}</span>
              </div>
              <div className="detail-item">
                <strong>Skills & Certifications:</strong>{" "}
                <span>{v.skillsOrCertification}</span>
              </div>
              <div className="detail-item">
                <strong>Motivation:</strong> <span>{v.why}</span>
              </div>
              <div className="detail-item">
                <strong>Expectations:</strong> <span>{v.expectations}</span>
              </div>
              <div className="detail-item">
                <strong>Reference Name:</strong> <span>{v.referenceName}</span>
              </div>
              <div className="detail-item">
                <strong>Reference Email:</strong>{" "}
                <span>{v.referenceEmail}</span>
              </div>
              <div className="detail-item">
                <strong>Reference Relationship:</strong>{" "}
                <span>{v.referenceRelationship}</span>
              </div>
              <div className="detail-item">
                <strong>Reference Phone Number:</strong>{" "}
                <span>{v.referencePhoneNumber}</span>
              </div>
              <div className="detail-item">
                <strong>Background Check:</strong>{" "}
                <span>{v.backgroundCheck}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default VolunteersList;
