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
        <Input
          type="text"
          placeholder="Name"
          required
          inputMargin={"0px 0px 13px 0px"}
        />
        <Input
          type="email"
          placeholder="E-mail"
          required
          inputMargin={"0px 0px 13px 0px"}
        />
        <Input
          type="password"
          placeholder="Password"
          inputMargin={"0px 0px 13px 0px"}
          required
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          inputMargin={"0px 0px 13px 0px"}
          required
        />
        <Button type="submit">Create an Account</Button>
      </form>

      <Link to={"/"}>
        <Subtitle>Already have an account? Login</Subtitle>
      </Link>
    </Container>
  );
}
