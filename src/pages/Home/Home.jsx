import { Helmet } from "react-helmet";

import CraftItems from "../../components/CraftItems/CraftItems";
import Slider from "../../components/Slider/Slider";
import Reviews from "../../components/Reviews/Reviews";
import LatestItem from "../../components/LatestItem/LatestItem";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Art Gallery | Home</title>
      </Helmet>

      <Slider />
      <CraftItems data={data} />

      <Reviews />
      <LatestItem />
    </>
  );
}
