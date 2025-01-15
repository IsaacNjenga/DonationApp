import React, { useCallback, useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import MiniNavbar from "../components/miniNavbar";
import Loader from "../components/loader";
import Swal from "sweetalert2";
import { UserContext } from "../App";
import axios from "axios";
import DataTable from "react-data-table-component";

function Volunteers() {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [volunteers, setVolunteers] = useState([]);
  const [volunteerDetails, setVolunteerDetails] = useState(null);

  const fetchVolunteers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("fetch-approved-volunteers", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const fetchedVolunteers = response.data.volunteers;
      setVolunteers(fetchedVolunteers);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Backend issue",
        text: "Sorry for the inconvenience, please reload and try again",
      });
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    if (user) {
      fetchVolunteers();
    }
  }, [user]);

  const viewVolunteer = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`fetch-approved-volunteer?id=${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setVolunteerDetails(response.data.volunteer);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Please reload and try again",
        text: "If the issue persists, contact the admin.",
      });
    } finally {
      setLoading(false);
    }
  };

  const closeVolunteerModal = () => {
    setVolunteerDetails(null);
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => `${row.firstname} ${row.lastname}`,
      sortable: true,
    },
    { name: "Date of Birth", selector: (row) => row.dob, sortable: true },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    { name: "Email", selector: (row) => row.email },
    {
      name: "Details",
      selector: (row) => (
        <>
          {" "}
          <div className="volunteer-action-buttons">
            <button
              className="view-volunteers-details-btn"
              onClick={() => viewVolunteer(row._id)}
            >
              More
            </button>
          </div>
        </>
      ),
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#007bff",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "10px",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        padding: "8px",
      },
    },
    rows: {
      style: {
        "&:hover": {
          backgroundColor: "#f1f1f1",
          cursor: "pointer",
        },
      },
    },
  };

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <MiniNavbar />
      <div>
        <h2>Volunteers</h2>{" "}
        <div className="volunteers-datatable-container">
          {" "}
          <DataTable
            title="Volunteers"
            data={volunteers}
            columns={columns}
            highlightOnHover
            pagination
            customStyles={customStyles}
          />
        </div>
        {volunteerDetails && (
          <div
            className="volunteer-modal-overlay"
            onClick={closeVolunteerModal}
          >
            <div
              className="volunteer-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="volunteer-modal-close-btn"
                onClick={closeVolunteerModal}
              >
                &times;
              </button>

              <h3>{`${volunteerDetails.firstname} ${volunteerDetails.lastname}`}</h3>
              <div className="volunteer-modal-sections">
                <div>
                  <h4>Personal Info</h4>
                  <p>
                    <strong>Date of Birth:</strong> {volunteerDetails.dob}
                  </p>
                  <p>
                    <strong>Email:</strong> {volunteerDetails.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {volunteerDetails.phone}
                  </p>
                </div>
                <div>
                  <h4>Availability</h4>
                  <p>
                    <strong>Days Available:</strong>{" "}
                    {volunteerDetails.daysOfVolunteer.join(", ")}
                  </p>
                  <p>
                    <strong>Hours/Week:</strong> {volunteerDetails.hoursPerWeek}
                  </p>
                </div>
                <div>
                  <h4>References</h4>
                  <p>
                    <strong>Name:</strong> {volunteerDetails.referenceName}
                  </p>
                  <p>
                    <strong>Email:</strong> {volunteerDetails.referenceEmail}
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    {volunteerDetails.referencePhoneNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Volunteers;
