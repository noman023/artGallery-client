import { Helmet } from "react-helmet";

import SectionHead from "../SectionHead/SectionHead";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import MyCard from "./MyCard";

export default function MyItems() {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const myData = data.filter((obj) => obj.userEmail === user.email);

  return (
    <>
      <Helmet>
        <title>Art Gallery | My Items</title>
      </Helmet>

      <SectionHead>Items you have added</SectionHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {myData.map((obj) => (
          <MyCard key={obj._id} data={obj} />
        ))}
      </div>
    </>
  );
}
