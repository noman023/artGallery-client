import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function MyCard({ data }) {
  const { itemImg, price, rating, customization, stockStatus, itemName, _id } =
    data;

  return (
    <div className="card card-compact max-w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={itemImg} alt="art item" className="w-full h-60" />
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
          <Link to={`/updateItem/${_id}`}>
            <Button>Update</Button>
          </Link>

          <Button styles={"bg-red-500 hover:bg-red-600"}>Detele</Button>
        </div>
      </div>
    </div>
  );
}
