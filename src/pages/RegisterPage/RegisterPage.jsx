import { Helmet } from "react-helmet";
import Register from "../../components/Register/Register";

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Art Gallery | Register</title>
      </Helmet>

      <Register />
    </>
  );
}
