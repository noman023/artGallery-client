import { Helmet } from "react-helmet";
import AllItems from "../../components/AllItems/AllItems";

export default function AllItemsPage() {
  return (
    <>
      <Helmet>
        <title>Art Gallery | All Items</title>
      </Helmet>

      <AllItems />
    </>
  );
}
