import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import Button from "../Button/Button";

export default function MyCard({ data }) {
  const { itemImg, price, rating, customization, stockStatus, itemName, _id } =
    data;

  const handleDelete = () => {
    Swal.fire({
      title: "Do you want to delete?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://art-crafts-server-xi.vercel.app/items/${_id}`, {
          method: "DELETE",
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "deleted successfully",
            });
          })
          .catch((err) =>
            Swal.fire({
              icon: "warning",
              title: err.message,
            })
          );
      }
    });
  };

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

          <Button
            styles={"bg-red-500 hover:bg-red-600"}
            hanldeClick={handleDelete}
          >
            Detele
          </Button>
        </div>
      </div>
    </div>
  );
}
