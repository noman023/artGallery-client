import SectionHead from "../SectionHead/SectionHead";

import Card from "./Card";

export default function CraftItems({ data }) {
  const latest = data.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const first6 = latest.slice(0, 6);
  return (
    <>
      <SectionHead>Art and Crafts Items</SectionHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {first6.map((obj) => (
          <Card key={obj._id} data={obj} />
        ))}
      </div>
    </>
  );
}
