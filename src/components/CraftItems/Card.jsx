import { Link } from "react-router-dom";

import Button from "../Button/Button";

export default function Card({ data }) {
  const { _id, itemImg, itemName, price, rating, customization, stockStatus } =
    data;

  return (
    <div className="card card-compact max-w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={itemImg} alt="art items" className="w-full h-60" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>

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
            Stock Status: <span className="text-amber-600">{stockStatus}</span>
          </p>
        </div>

        <div className="card-actions justify-center mt-2">
          <Link to={`/details/${_id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
