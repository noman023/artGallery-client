import Card from "../CraftItems/Card";
import SectionHead from "../SectionHead/SectionHead";

export default function LatestItem({ data }) {
  const latest = data.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const first3 = latest.slice(0, 3);

  return (
    <>
      <SectionHead>Latest Added Items</SectionHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {first3.map((obj) => (
          <Card key={obj._id} data={obj} />
        ))}
      </div>
    </>
  );
}
