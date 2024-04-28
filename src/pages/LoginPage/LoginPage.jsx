import { Helmet } from "react-helmet";
import Login from "../../components/Login/Login";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Art Gallery | Login</title>
      </Helmet>

      <Login />
    </>
  );
}
