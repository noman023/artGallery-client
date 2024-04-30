import SectionHead from "../SectionHead/SectionHead";

import Card from "./Card";

export default function CraftItems({ data }) {
  return (
    <>
      <SectionHead>Art and Crafts Items</SectionHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {data.map((obj) => (
          <Card key={obj._id} data={obj} />
        ))}
      </div>
    </>
  );
}
