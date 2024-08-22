import { Helmet } from "react-helmet";

import Button from "../Button/Button";
import SectionHead from "../SectionHead/SectionHead";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
  const navigate = useNavigate();

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
    const name = form.get("name");
    const email = form.get("email");

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

    fetch("https://art-crafts-server-xi.vercel.app//items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Your Item added successfully",
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
        <title>Art Gallery | Add an Item</title>
      </Helmet>

      <SectionHead>Add Craft Item</SectionHead>

      <div className="card shrink-0 w-full shadow-2xl bg-white mb-20">
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="lg:flex lg:justify-between lg:gap-5">
            <div className="w-full space-y-3">
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-gray-600">Item Image URL</span>
                </label>
                <input
                  name="itemImg"
                  type="text"
                  placeholder="Item image url"
                  className="input input-bordered bg-gray-50 "
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600">Item Name</span>
                </label>
                <input
                  name="itemName"
                  type="text"
                  placeholder="Item Name"
                  className="input input-bordered bg-gray-50"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600">Category</span>
                </label>

                <select
                  name="category"
                  className="select select-bordered bg-gray-50"
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
                  <span className="label-text text-gray-600">Short Description</span>
                </label>
                <input
                  name="description"
                  type="text"
                  placeholder="Short Description"
                  className="input input-bordered bg-gray-50"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600">Price</span>
                </label>
                <input
                  name="price"
                  type="text"
                  placeholder="price"
                  className="input input-bordered bg-gray-50"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600">Rating</span>
                </label>
                <input
                  name="rating"
                  type="text"
                  placeholder="rating"
                  className="input input-bordered bg-gray-50"
                  required
                />
              </div>
            </div>

            <div className="w-full space-y-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600">Customization</span>
                </label>
                <input
                  name="customization"
                  type="text"
                  placeholder="ex:- yes, no"
                  className="input input-bordered bg-gray-50"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600">Processing Time</span>
                </label>
                <input
                  name="processing_time"
                  type="text"
                  placeholder="ex: 15min, 1 hr"
                  className="input input-bordered bg-gray-50"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600">Stock Status</span>
                </label>
                <input
                  name="stockStatus"
                  type="text"
                  placeholder="ex:- In stock, Made to Order"
                  className="input input-bordered bg-gray-50"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600">User Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="User Name"
                  className="input input-bordered bg-gray-50"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600">User Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="user email"
                  className="input input-bordered bg-gray-50"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-control w-1/2 mx-auto my-6">
            <Button>Add</Button>
          </div>
        </form>
      </div>
    </>
  );
}
