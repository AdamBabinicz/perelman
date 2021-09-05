import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background: teal;
  color: #fff;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Biuletyn</Title>
      <Desc>Zamów najnowsze wiadomości</Desc>
      <InputContainer>
        <Input placeholder="Twój email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
