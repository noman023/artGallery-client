import { Link, useLoaderData } from "react-router-dom";

import Button from "../Button/Button";

export default function AllItems() {
  const data = useLoaderData();

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
            {data.map((obj) => (
              <tr key={obj._id}>
                <th>
                  <img
                    src={obj.itemImg}
                    alt="photo"
                    className="w-full h-28 object-cover"
                  />
                </th>
                <td>{obj.itemName}</td>
                <td>{obj.price}</td>
                <td>{obj.stockStatus}</td>
                <td>
                  <Link to={`/details/${obj._id}`}>
                    <Button>View Details</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
