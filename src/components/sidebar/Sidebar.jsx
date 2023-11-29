import "./sidebar.scss";
import SpaceDashboardTwoToneIcon from '@mui/icons-material/SpaceDashboardTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import PollTwoToneIcon from '@mui/icons-material/PollTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import MonitorHeartTwoToneIcon from '@mui/icons-material/MonitorHeartTwoTone';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Akash</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
            <SpaceDashboardTwoToneIcon className="icon" />
            <span className="subtitle">Dashboard</span>
          </li>
          </Link>
          
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PermIdentityTwoToneIcon className="icon" />
              <span className="subtitle">Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <CategoryTwoToneIcon className="icon" />
              <span className="subtitle">Products</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardTwoToneIcon className="icon" />
              <span className="subtitle">Orders</span>
            </li>
          </Link>
          <Link to="/delivery" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingTwoToneIcon className="icon" />
              <span className="subtitle">Delivery</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <PollTwoToneIcon className="icon" />
            <span className="subtitle">Stats</span>
          </li>
          <li>
            <NotificationsNoneTwoToneIcon className="icon" />
            <span className="subtitle">Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartTwoToneIcon className="icon" />
            <span className="subtitle">System Health</span>
          </li>
          <li>
            <HubTwoToneIcon className="icon" />
            <span className="subtitle">Logs</span>
          </li>
          <li>
            <SettingsTwoToneIcon className="icon" />
            <span className="subtitle">Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ManageAccountsTwoToneIcon className="icon" />
            <span className="subtitle">Profile</span>
          </li>
          <li>
            <LockTwoToneIcon className="icon" />
            <span className="subtitle">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
