import { Outlet } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <TopNavbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
