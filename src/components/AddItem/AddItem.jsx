import { Helmet } from "react-helmet";
import Button from "../Button/Button";

export default function AddItem() {
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

    console.log(
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
      email
    );
  };
  return (
    <>
      <Helmet>
        <title>Art Gallery | Add an Item</title>
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-4xl font-bold  underline">
          Add an item
        </h1>
      </div>

      <div className="card shrink-0 w-full shadow-2xl bg-base-100 mb-20">
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="lg:flex lg:justify-between lg:gap-5">
            <div className="w-full space-y-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Image URL</span>
                </label>
                <input
                  name="itemImg"
                  type="text"
                  placeholder="Item image url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
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
                <input
                  name="category"
                  type="text"
                  placeholder="ex:- Landscape Painting, Portrait Drawing, Oil Painting, Cartoon Drawing"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
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
                  name="stockStatus"
                  type="text"
                  placeholder="ex:- In stock, Out of stock"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  name="name"
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
                  name="email"
                  type="email"
                  placeholder="user email"
                  className="input input-bordered"
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
