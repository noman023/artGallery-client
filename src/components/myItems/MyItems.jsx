import { Helmet } from "react-helmet";

import mountain from "../../assets/mountain_view_canvas.jpg";
import Button from "../Button/Button";
import SectionHead from "../SectionHead/SectionHead";
import { Link } from "react-router-dom";

export default function MyItems() {
  const data = {
    image: "https://example.com/pencil_sketch_portrait.jpg",
    item_name: "Pencil Sketch Portrait",
    subcategory_Name: "Portrait Drawing",
    short_description:
      "Get a detailed pencil sketch of yourself or your loved ones.",
    price: 35.5,
    rating: 4.8,
    customization: "Yes",
    processing_time: "3-5 days",
    stockStatus: "In stock",
  };

  return (
    <>
      <Helmet>
        <title>Art Gallery | My Items</title>
      </Helmet>

      <SectionHead>Items you have added</SectionHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={mountain} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.item_name}</h2>

            <div className="font-bold">
              <p>
                Price: <span className="text-amber-600">${data.price}</span>
              </p>
              <p>
                Rating: <span className="text-amber-600">{data.rating}</span>
              </p>
              <p>
                Customization:{" "}
                <span className="text-amber-600">{data.customization}</span>
              </p>
              <p>
                Stock Status:{" "}
                <span className="text-amber-600">{data.stockStatus}</span>
              </p>
            </div>

            <div className="card-actions justify-center mt-2">
              <Link to={"/updateItem"}>
                <Button>Update</Button>
              </Link>

              <Button styles={"bg-red-500 hover:bg-red-600"}>Detele</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
