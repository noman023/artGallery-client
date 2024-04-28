import { Helmet } from "react-helmet";
import CraftItems from "../../components/CraftItems/CraftItems";
import Slider from "../../components/Slider/Slider";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Art Gallery | Home</title>
      </Helmet>

      <Slider />
      <CraftItems />
    </>
  );
}
