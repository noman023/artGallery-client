import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Art Gallery | Not Found</title>
      </Helmet>

      <div className="flex flex-col justify-center items-center gap-6 h-screen">
        <p className="text-2xl text-black font-bold">Page not found! :(</p>

        <Link to={"/"}>
          <button className="btn btn-outline border ">Back to Home</button>
        </Link>
      </div>
    </>
  );
}
