import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}
