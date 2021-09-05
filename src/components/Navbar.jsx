import { Badge } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "10px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  white-space: nowrap;

  @media screen and (max-width: 700px) {
    font-size: 17px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>PL</Language>
          {/* <SearchContainer>
            <Input placeholder="Szukaj" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Logo>7 problemów milenijnych</Logo>
        </Center>
        <Right>
          {/* <MenuItem>Rejestracja</MenuItem>
          <MenuItem>Zaloguj się</MenuItem> */}
          <MenuItem>
            <Badge badgeContent={7} color="primary">
              <CastForEducationIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
