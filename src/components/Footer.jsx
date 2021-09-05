import {
  Facebook,
  Instagram,
  MailOutline,
  Pinterest,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h3``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  a {
    transition: all 0.4s ease;
    color: #fff;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ flexDirection: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: gray;
    transition: all 0.4s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>7 problemów milenijnych</Logo>
        <Desc>
          Zestaw siedmiu zagadnień matematycznych ogłoszonych przez Instytut
          Matematyczny Claya 24 maja 2000 roku.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <a
              href="//www.facebook.com/grigori.perelman.90"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </SocialIcon>
          <SocialIcon color="e4405f">
            <a
              href="//www.instagram.com/perelman_66/?hl=pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </SocialIcon>
          <SocialIcon color="55acee">
            <a
              href="//twitter.com/luciuscoolguy/status/1034899783901741056"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </SocialIcon>
          <SocialIcon color="e60023">
            <a
              href="//pl.pinterest.com/pin/461759768014014919"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Pinterest />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Artykuły</Title>
        <List>
          <ListItem>
            <a
              href="//www.wroclaw.pl/grigorij-perelman-premiera-wroclawski-teatr-wspolczesny"
              target="_blank"
              rel="noopener noreferrer"
            >
              perelman-premiera
            </a>
          </ListItem>
          <ListItem>
            <a
              href="//gadzetomania.pl/21927,slynny-rosyjski-matematyk-mowi-niet-kolejnej-nagrodzie"
              target="_blank"
              rel="noopener noreferrer"
            >
              niet-kolejnej-nagrodzie
            </a>
          </ListItem>
          <ListItem>
            <a
              href="//www.realmadryt.pl/news/99811-brac-ten-milion"
              target="_blank"
              rel="noopener noreferrer"
            >
              brac-ten-milion
            </a>
          </ListItem>
          <ListItem>
            <a
              href="//zmianynaziemi.pl/wiadomosc/czy-grigorij-perelman-rzeczywiscie-wie-jak-kontrolowac-wszechswiat"
              target="_blank"
              rel="noopener noreferrer"
            >
              wie-jak-kontrolowac-wszechswiat
            </a>
          </ListItem>
          <ListItem>
            <a
              href="//kierul.blogspot.com/2021/04/grigorij-perelman-matematyk-ze-swiata.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              perelman-matematyk-ze-swiata
            </a>
          </ListItem>
          {/* <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem> */}
        </List>
      </Center>
      <Right>
        <Title>Kontakt z Instytutem Matematycznym Claya</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          70 Main St #300, Peterborough, NH 03458, Stany Zjednoczone
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 829-847-5013
        </ContactItem>
        {/* <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@vp.pl
        </ContactItem> */}
      </Right>
    </Container>
  );
};

export default Footer;
