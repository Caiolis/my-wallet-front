import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 25px 16px 25px;
`;

export const BarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    background: transparent;
    outline: none;
    border: none;
  }
`;

export const MainFieldContainer = styled.div`
  width: 100%;
  height: 446px;
  background-color: #FFF;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 22px 0px 13px 0px;
  h2 {
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    color: #868686
  }
`;

export const OperationsButton = styled.button`
  border: none;
  border-radius: 5px;
  outline: none;
  width: 155px;
  height: 114px;
  background-color: #A328D6 !important;
  font-family: Raleway;
  font-size: 17px;
  font-weight: 700;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  text-align: left;
  &:hover {
    background-color: #b753e0 !important;
  }
`;