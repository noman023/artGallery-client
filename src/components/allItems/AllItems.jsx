import { Link } from "react-router-dom";

import mountain from "../../assets/mountain_view_canvas.jpg";
import Button from "../Button/Button";

export default function AllItems() {
  const data = {
    image: "https://example.com/mountain_view_canvas.jpg",
    item_name: "Mountain View Canvas",
    subcategory_Name: "Landscape Painting",
    short_description:
      "Capture the beauty of mountains with this stunning canvas painting.",
    price: 50.99,
    rating: 4.5,
    customization: "Yes",
    processing_time: "1-2 weeks",
    stockStatus: "In stock",
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <img src={mountain} alt="photo" className="w-52 h-28" />
              </th>
              <td>{data.item_name}</td>
              <td>{data.price}</td>
              <td>{data.stockStatus}</td>
              <td>
                <Link to={"/"}>
                  <Button styles={"bg-blue-500 hover:bg-blue-600"}>
                    View Details
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
