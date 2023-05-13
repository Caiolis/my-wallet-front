// Libraries 
import { Link } from "react-router-dom";

// Components
import {
  Container,
  BarContainer,
  MainFieldContainer,
  OperationsButton,
} from "./styled";
import PageTitle from "../../components/PageTitle/PageTitle";

// Others
import logOut from "../../assets/imgs/LogOut.png";
import addOperation from "../../assets/imgs/ant-design_plus-circle-outlined.png";
import removeOperation from "../../assets/imgs/ant-design_minus-circle-outlined.png";

export default function HomePage() {
  return (
    <Container>
      <BarContainer>
        <PageTitle>Hi, Fulano</PageTitle>
        <button>
          <img src={logOut} alt="Log Out Button" />
        </button>
      </BarContainer>

      <MainFieldContainer>
        <h2>
          There is no log of
          <br />
          outputs or inputs
        </h2>
      </MainFieldContainer>

      <BarContainer>
        <Link to={'/newinput'}>
          <OperationsButton>
            <img src={addOperation} alt="add Input" />
            New <br />
            Input
          </OperationsButton>
        </Link>
        <OperationsButton>
          <img src={removeOperation} alt="remove Input" />
          New <br />
          Output
        </OperationsButton>
      </BarContainer>
    </Container>
  );
}
