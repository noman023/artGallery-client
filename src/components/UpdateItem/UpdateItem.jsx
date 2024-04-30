import { Helmet } from "react-helmet";
import Button from "../Button/Button";
import SectionHead from "../SectionHead/SectionHead";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateItem() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    itemImg,
    itemName,
    category,
    description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    userName,
    userEmail,
  } = data;

  useEffect(() => {
    fetch(`https://art-crafts-server-xi.vercel.app/items/${id}`)
      .then((res) => res.json())

      .then((data) => setData(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const itemImg = form.get("itemImg");
    const itemName = form.get("itemName");
    const category = form.get("category");

    const description = form.get("description");
    const price = form.get("price");
    const rating = form.get("rating");

    const customization = form.get("customization");
    const processing_time = form.get("processing_time");
    const stockStatus = form.get("stockStatus");
    const name = form.get("userName");
    const email = form.get("userEmail");

    const item = {
      itemImg,
      itemName,
      category,
      description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      name,
      email,
    };

    fetch(`https://art-crafts-server-xi.vercel.app/items/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Your Item updated successfully",
        });

        navigate("/");
      })
      .catch((err) =>
        Swal.fire({
          icon: "warning",
          title: err.message,
        })
      );
  };

  return (
    <>
      <Helmet>
        <title>Art Gallery | Update item</title>
      </Helmet>

      <SectionHead>Update Your Item</SectionHead>

      <div className="card shrink-0 w-full shadow-2xl bg-base-100 mb-20">
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="lg:flex lg:justify-between lg:gap-5">
            <div className="w-full space-y-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Image URL</span>
                </label>
                <input
                  defaultValue={itemImg}
                  name="itemImg"
                  type="text"
                  placeholder="Item image url"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  defaultValue={itemName}
                  name="itemName"
                  type="text"
                  placeholder="Item Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  className="select select-bordered"
                  defaultValue={category}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Landscape Painting">Landscape Painting</option>
                  <option value="Portrait Drawing">Portrait Drawing</option>
                  <option value="Watercolour Painting">
                    Watercolour Painting
                  </option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Charcoal Sketching">Charcoal Sketching</option>
                  <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  defaultValue={description}
                  name="description"
                  type="text"
                  placeholder="Short Description"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  defaultValue={price}
                  name="price"
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  defaultValue={rating}
                  name="rating"
                  type="text"
                  placeholder="rating"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="w-full space-y-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customization</span>
                </label>
                <input
                  defaultValue={customization}
                  name="customization"
                  type="text"
                  placeholder="ex:- yes, no"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Processing Time</span>
                </label>
                <input
                  defaultValue={processing_time}
                  name="processing_time"
                  type="text"
                  placeholder="ex: 15min, 1 hr"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Stock Status</span>
                </label>
                <input
                  defaultValue={stockStatus}
                  name="stockStatus"
                  type="text"
                  placeholder="ex:- In stock, Made to Orde"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  defaultValue={userName}
                  name="userName"
                  type="text"
                  placeholder="User Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  defaultValue={userEmail}
                  name="userEmail"
                  type="email"
                  placeholder="user email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-control w-1/2 mx-auto my-6">
            <Button>Update</Button>
          </div>
        </form>
      </div>
    </>
  );
}
