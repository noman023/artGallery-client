import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Root() {
  return (
    <>
      <div className="container mx-auto px-3">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
