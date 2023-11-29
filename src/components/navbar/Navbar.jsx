import "./navbar.scss";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import TranslateTwoToneIcon from '@mui/icons-material/TranslateTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchTwoToneIcon />
        </div>
        <div className="items">
          <div className="item">
            <TranslateTwoToneIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeTwoToneIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitTwoToneIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneTwoToneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatTwoToneIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListTwoToneIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
