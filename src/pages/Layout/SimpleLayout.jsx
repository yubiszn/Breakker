
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";

export default function SimpleLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
