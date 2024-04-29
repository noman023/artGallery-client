import { Helmet } from "react-helmet";
import CraftItems from "../../components/CraftItems/CraftItems";
import Slider from "../../components/Slider/Slider";
import Reviews from "../../components/Reviews/Reviews";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Art Gallery | Home</title>
      </Helmet>

      <Slider />

      <CraftItems />
      <Reviews />
    </>
  );
}
