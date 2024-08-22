import { Helmet } from "react-helmet";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ViewDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://art-crafts-server-xi.vercel.app/items/${id}`)
      .then((res) => res.json())

      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>Art Gallery | Details</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row bg-gray-50 my-10 p-5 gap-5 rounded-lg">
        <div className="lg:w-[40%] border">
          <img src={data.itemImg} className="rounded-lg shadow-2xl" />
        </div>

        <div className="lg:w-[60%]">
          <div className="flex gap-4">
            <div className="badge badge-primary badge-outline font-bold mb-3">
              {data.category}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold">{data.itemName}</h1>

          <p className=" pt-5 pb-3 text-lg">{data.description}</p>

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
