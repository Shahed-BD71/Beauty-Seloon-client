import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCog,
  faFilter,
  faGripHorizontal,
  faSignOutAlt,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isArtist, setIsArtist] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:8000/isArtist`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsArtist(data));
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/doctor/dashboard" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        {isArtist && (
          <div>
            <li>
              <Link to="/doctor/appointment" className="text-white">
                <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/patients" className="text-white">
                <FontAwesomeIcon icon={faUser} /> <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/prescriptions" className="text-white">
                <FontAwesomeIcon icon={faFilter} /> <span>Prescriptions</span>
              </Link>
            </li>
            <li>
              <Link to="/addDoctor" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/setting" className="text-white">
                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt}/> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;