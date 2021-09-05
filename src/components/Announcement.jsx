import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  padding: 1rem 2rem;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Announcement = () => {
  return (
    <Container>
      Za rozwiązanie każdego z nich wyznaczono milion dolarów nagrody.
    </Container>
  );
};

export default Announcement;
