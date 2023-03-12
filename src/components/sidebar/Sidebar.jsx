import "./sidebar.scss";
import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import axios  from "axios";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [user, setUser] = useState('');

  const navigate = useNavigate();

  const getUser = async () => {
    const user_id = JSON.parse(localStorage.getItem('userToken'));
    console.log("Single User is", user_id);
    const userId = user_id.id;
    axios.get(`http://192.168.0.37:5000/api/v1/auth/user/${userId}`).then(
      res => {
        console.log(res.data)
        setUser(res.data);
      },
    );
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    navigate('/');

  }

  useEffect(() => {
    getUser();
  })

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">{user.fullname}</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/academics" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Academics</span>
            </li>
          </Link>
          <Link to="/modules" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Modules</span>
            </li>
          </Link>
          
          <Link to="/payments" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Payments</span>
            </li>
          </Link>
     
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <div style={{marginTop: 370}}>
            <button className="btn" style={{backgroundColor: "white", width: 250, height: 35, border: "none", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} onClick={logout}>

            <ExitToAppIcon className="icon" />
             <h3> LogOut </h3>
            </button>
          </div>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
