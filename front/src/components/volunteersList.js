import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import Loader from "./loader";
import "../assets/css/volunteerList.css";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleXmark,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
function VolunteersList() {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [volunteers, setVolunteers] = useState([]);
  const [volunteerDetails, setVolunteerDetails] = useState(null);

  const fetchVolunteers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("fetch-volunteers", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const fetchedVolunteers = response.data.volunteers;
      setVolunteers(fetchedVolunteers);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("There was an error, try refreshing");
    }
  });

  useEffect(() => {
    if (user) {
      fetchVolunteers();
    }
  }, [user]);

  const viewVolunteer = async (id) => {
    //console.log(id);
    setLoading(true);
    try {
      const response = await axios.get(`fetch-volunteer?id=${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setVolunteerDetails(response.data.volunteer);
      // console.log(response.data.volunteer);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching volunteer file. Try refreshing");
      setLoading(false);
    }
  };

  const closeVolunteerModal = () => {
    setVolunteerDetails(null);
  };

  const approveVolunteer = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`fetch-volunteer?id=${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const approvedVolunteer = { ...response.data.volunteer };
      delete approvedVolunteer._id;

      const createResponse = await axios.post(
        "create-approved-volunteer",
        approvedVolunteer,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      if (createResponse.data.success) {
        const deleteResponse = await axios.delete(`delete-volunteer?id=${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        setVolunteers(deleteResponse.data.volunteers);

        toast.success("Applicant Approved");
      } else {
        toast.error("Error approving volunteer. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try refreshing the page.");
    } finally {
      setLoading(false);
    }
  };

  const rejectVolunteer = (id) => {
    setVolunteerDetails(null);
    MySwal.fire({
      title: "Are you sure?",
      text: "This action is irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f6b500",
      cancelButtonColor: "red",
      confirmButtonText: "Yes",
    })
      .then((result) => {
        if (result.isConfirmed) {
          setLoading(true);
          axios
            .delete(`delete-volunteer?id=${id}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((response) => {
              const fetchedVolunteers = response.data.volunteers;
              setVolunteers(fetchedVolunteers);
              setLoading(false);
              MySwal.fire({
                title: "Rejected!",
                text: "Applicant has been rejected",
                icon: "success",
              });
            });
        }
      })
      .catch((err) => {
        setLoading(false);
        MySwal.fire({
          title: "Error!",
          text: "An error occured",
          icon: "error",
        });
        console.log(err);
      });
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
    {
      name: "Approve",
      selector: (row) => (
        <>
          <div className="other-action-buttons">
            <button
              className="approve-btn"
              title="Approve Applicant"
              onClick={() => approveVolunteer(row._id)}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="email-btn" title="Email Applicant">
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <button
              className="reject-btn"
              title="Reject Applicant"
              onClick={() => {
                rejectVolunteer(row._id);
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
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
      <div className="volunteer-list-container">
        <h2>Volunteers</h2>
        <div className="volunteers-datatable-container">
          {" "}
          <DataTable
            title="Signed up volunteers"
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
              <div className="other-action-buttons">
                <button className="approve-btn" title="Approve Applicant">
                  {" "}
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button className="email-btn" title="Email Applicant">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
                <button
                  className="reject-btn"
                  title="Reject Applicant"
                  onClick={() => {
                    rejectVolunteer(volunteerDetails._id);
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </div>
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

export default VolunteersList;
