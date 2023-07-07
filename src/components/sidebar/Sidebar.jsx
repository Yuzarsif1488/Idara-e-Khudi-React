import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";

import ChildCareIcon from "@mui/icons-material/ChildCare";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <img src="/src/img/images.png" alt="" /> */}
          <span>Idara-E-Khudi</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/orphans" style={{ textDecoration: "none" }}>
            <li>
              <ChildCareIcon className="icon" />
              <span>Orphans</span>
            </li>
          </Link>
          <Link to="/Sponsors" style={{ textDecoration: "none" }}>
            <li>
              <SupervisorAccountIcon className="icon" />
              <span>Sponsers</span>
            </li>
          </Link>
          <p className="title">OUR BRANCHES</p>
          <Link to="/Branches" style={{ textDecoration: "none" }}>
            <li>
              <InsertLinkIcon className="icon" />
              <span>Branches</span>
            </li>
          </Link>
          <p className="title">USEFUL LINKS</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <PermIdentityIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
