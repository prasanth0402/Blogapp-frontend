import { Outlet } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <TopNavbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Home;
