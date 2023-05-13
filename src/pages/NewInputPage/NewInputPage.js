// Components
import { Container, Input, Button } from "./styled";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function NewInputPage() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <PageTitle>New Input</PageTitle>

      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="Value"
          required
          inputMargin={"40px 0px 0px 0px"}
        />
        <Input
          type="text"
          placeholder="Description"
          inputMargin={"13px 0px"}
          required
        />
        <Button type="submit">Save Input</Button>
      </form>
    </Container>
  );
}
