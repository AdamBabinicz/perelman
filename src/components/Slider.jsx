import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  transition: all 0.4s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #${(props) => props.bg};

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  /* height: 100%; */
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 80%;
  /* width: 100%; */
  object-fit: contain;
  padding-left: 4rem;

  @media screen and (max-width: 700px) {
    padding: 0;
    /* object-fit: 50%; */
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  em {
    font-size: 22px;
    font-weight: 600;
  }
`;

const Title = styled.h2`
  font-size: 70px;

  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;

  @media screen and (max-width: 700px) {
    font-size: 17px;
    margin: 20px 0;
  }
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 6);
    } else {
      setSlideIndex(slideIndex < 6 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ fontSize: "4rem" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <em>{item.em}</em>
              <Desc>{item.desc}</Desc>
              <p>{item.button}</p>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined style={{ fontSize: "4rem" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
