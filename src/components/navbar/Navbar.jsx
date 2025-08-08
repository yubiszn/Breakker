import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";


const Navbar = () => {


  return (
    <div className="navbar">
      <div className="left">
          <span>Breakker</span>
        <Link to="/" style={{ textDecoration: "none" }}>
        <HomeOutlinedIcon />
        </Link>
        <DarkModeOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        
        <Link to='/login'>
           <PersonOutlinedIcon />
        </Link>
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="https://images.nightcafe.studio/jobs/rw1HSA3ATTPorUwARgma/rw1HSA3ATTPorUwARgma--3--whv8k.jpg?tr=w-1600,c-at_max"
            alt=""
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;