// Librarys
import { Link } from "react-router-dom";

// Components
import { Container, Input, Button, Subtitle } from "./styled";

// Others
import logo from "../../assets/imgs/MyWallet.png";

export default function LoginPage() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <img src={logo} alt="logo" />

      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="E-mail" required />
        <Input
          type="password"
          placeholder="Password"
          inputMargin={"13px 0px"}
          required
        />
        <Button type="submit">Login</Button>
      </form>

      <Link to={"/signup"}>
        <Subtitle>First time? Create an account!</Subtitle>
      </Link>
    </Container>
  );
}
