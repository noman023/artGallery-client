import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Root() {
  return (
    <>
      <div className="container mx-auto px-3">
        <Header />
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
