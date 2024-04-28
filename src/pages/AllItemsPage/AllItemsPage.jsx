import { Helmet } from "react-helmet";
import AllItems from "../../components/allItems/AllItems";

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
