
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
import LeftBar from "../../Components/LeftBar/LeftBar";
import RightBar from "../../Components/RightBar/RightBar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 7 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
}
