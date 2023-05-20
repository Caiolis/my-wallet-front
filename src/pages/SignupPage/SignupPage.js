// Librarys
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Components
import { Container, Input, Button, Subtitle } from "./styled";

// Others
import logo from "../../assets/imgs/MyWallet.png";
import { SIGN_UP } from "../../constants/urls";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Takes the information of the form starte and updates with the new information the user typed
  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }
  
  // Submits the form information to the server
  function handleSubmit(e) {
    e.preventDefault();
    if(form.password != form.confirmPassword) return alert("The password must be the same");

    const body = {
      name: form.username,
      email: form.email,
      password: form.password
    }

    const promisse = axios.post(SIGN_UP, body);
    promisse.then(response => navigate("/"));
    promisse.catch(err => alert("Verify all information before submitting"));
  }

  return (
    <Container>
      <img src={logo} alt="logo" />

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
          inputMargin={"0px 0px 13px 0px"}
        />
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          inputMargin={"0px 0px 13px 0px"}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          inputMargin={"0px 0px 13px 0px"}
          required
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
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
