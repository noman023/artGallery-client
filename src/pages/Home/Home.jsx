import { Helmet } from "react-helmet";
import CraftItems from "../../components/CraftItems/CraftItems";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Art Gallery | Home</title>
      </Helmet>

      <CraftItems />
    </>
  );
}
