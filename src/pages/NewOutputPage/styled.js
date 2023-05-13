import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px 25px 16px 25px;
`;

export const Input = styled.input`
  width: 326px;
  height: 58px;
  padding: 18px 16px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: 'Raleway', 'sans-serif';
  font-size: 20px;
  font-weight: 400;
  margin: ${props => props.inputMargin};
  color: #000000;
  &::placeholder {
    color: #000000;
  }
`;

export const Button = styled.button`
  width: 326px;
  height: 46px;
  background: #A328D6;
  font-family: Raleway;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #FFF;
  font-size: 20px;
  font-weight: 700;
  &:hover {
    background-color: #c145f5;
  }
`;