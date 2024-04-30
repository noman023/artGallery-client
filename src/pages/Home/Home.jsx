import { Helmet } from "react-helmet";
import CraftItems from "../../components/CraftItems/CraftItems";
import Slider from "../../components/Slider/Slider";
import Reviews from "../../components/Reviews/Reviews";
import LatestItem from "../../components/LatestItem/LatestItem";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Art Gallery | Home</title>
      </Helmet>

      <Slider />

      <CraftItems />
      <Reviews />
      <LatestItem />
    </>
  );
}
