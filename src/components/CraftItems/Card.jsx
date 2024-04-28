import mountain from "../../assets/mountain_view_canvas.jpg";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

export default function Card({ data }) {
  const { item_name, price, rating, customization, stockStatus } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={mountain} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>

          <div className="font-bold">
            <p>
              Price: <span className="text-amber-600">${price}</span>
            </p>
            <p>
              Rating: <span className="text-amber-600">{rating}</span>
            </p>
            <p>
              Customization:{" "}
              <span className="text-amber-600">{customization}</span>
            </p>
            <p>
              Stock Status:{" "}
              <span className="text-amber-600">{stockStatus}</span>
            </p>
          </div>

          <div className="card-actions justify-center mt-2">
            <Link to={"/details/1"}>
              <Button>View Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
