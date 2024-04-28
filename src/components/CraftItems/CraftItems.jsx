import SectionHead from "../SectionHead/SectionHead";

import Card from "./Card";

export default function CraftItems() {
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
      <SectionHead>Art and Crafts Items</SectionHead>

      <div className="my-10">
        <Card data={data} />
      </div>
    </>
  );
}
