import { Helmet } from "react-helmet";

import mountain from "../../assets/mountain_view_canvas.jpg";

export default function ViewDetails() {
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
        <title>Art Gallery | Details</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row bg-base-200 my-10 p-5 gap-5 rounded-lg">
        <div className="lg:w-[40%] border">
          <img src={mountain} className="rounded-lg shadow-2xl" />
        </div>

        <div className="lg:w-[60%]">
          <div className="flex gap-4">
            <div className="badge badge-primary badge-outline font-bold mb-3">
              {data.subcategory_Name}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold">{data.item_name}</h1>

          <p className=" pt-5 pb-3 text-lg">{data.short_description}</p>

          <div className="space-y-2">
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

            <p>
              Processing Time:{" "}
              <span className="text-amber-600">{data.processing_time}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
