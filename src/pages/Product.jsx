import styled from "styled-components";
// import Navbar from "../components/Navbar";
// import Announcement from "../components/Announcement";
// import Newsletter from "../components/Newsletter";
// import Footer from "../components/Footer";
import img from "../img/16.png";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;

  @media screen and (max-width: 700px) {
    height: 50vh;
    margin-bottom: 20px;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  @media screen and (max-width: 700px) {
    padding: 0 10px;
  }
`;
const Tile = styled.h4`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.4s ease;

  &:hover {
    background: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      {/* <Navbar />
      <Announcement /> */}
      <Wrapper>
        <ImgContainer>
          <Image src={img} alt="..." />
        </ImgContainer>
        <InfoContainer>
          <Tile>Grigorij Perelman</Tile>
          <Desc>
            Grigorij Jakowlewicz Perelman, ros. ???????????????? ?????????????????? ?????????????????? ???
            rosyjski matematyk, by??y profesor Instytutu Stiek??owa w Petersburgu.
            Udowodni?? hipotez?? geometryzacyjn?? Thurstona, i tym samym
            wyp??ywaj??c?? z niej jako wniosek hipotez?? Poincar??go ??? jeden z
            problem??w milenijnych. <br />
            <br /> W grudniu 2005 porzuci?? stanowisko g????wnego pracownika
            naukowego laboratorium fizyki matematycznej, odszed?? z Instytutu i
            praktycznie ca??kowicie zerwa?? kontakty z kolegami. Od tamtej pory
            nie wykazywa?? zainteresowania karier?? naukow??. Na Mi??dzynarodowym
            Kongresie Matematyk??w, kt??ry odbywa?? si?? od 22 do 30 sierpnia 2006 w
            Madrycie, Perelman zosta?? jednym z laureat??w Medalu Fieldsa.
            <br /> John M. Ball, przewodnicz??cy Mi??dzynarodowej Unii
            Matematycznej poinformowa??, ??e Perelman odm??wi?? przyj??cia medalu. W
            marcu 2010 za udowodnienie hipotezy Poincar??go Instytut Matematyczny
            Claya przyzna?? mu jedn?? z siedmiu Nagr??d Tysi??clecia w wysoko??ci
            miliona dolar??w, jednak Perelman odm??wi?? jej przyj??cia w lipcu 2010
            roku.
            <br />
            <br />
            Obecnie mieszka wraz z matk?? w Sankt Petersburgu, w niewielkim
            mieszkaniu w bloku. Prowadzi ascetyczny tryb ??ycia, unika kontakt??w
            z mediami. W rosyjskiej prasie by??y podawane te?? informacje o jego
            zatrudnieniu w Szwecji od 2014 roku.
          </Desc>
          <Price>$ 1 000 000</Price>
          {/* <FilterContainer>
            <Filter>
              <FilterTitle>Kolor</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Dodaj do karty</Button>
          </AddContainer> */}
        </InfoContainer>
      </Wrapper>
      {/* <Newsletter />
      <Footer /> */}
    </Container>
  );
};

export default Product;
