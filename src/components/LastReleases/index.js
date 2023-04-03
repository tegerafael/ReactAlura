import { books } from "./LastReleasesData";
import { Title } from "../Title";
import CardRecommend from "../CardRecommend";
import bookImage from "../../img/book2.png";
import styled from "styled-components";

const LastReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function LastReleases() {
  return (
    <LastReleasesContainer>
      <Title color="#eb9b00" fontSyze="36px">
        Últimos Lançamentos
      </Title>
      <NewBooksContainer>
        {books.map((book) => (
          <img src={book.src} alt="" />
        ))}
      </NewBooksContainer>
      <CardRecommend
        title="Talvez você se interesse por"
        subtitle="Angular 11"
        description="Construindo uma aplicação com a plataforma Google"
        img={bookImage}
      />
    </LastReleasesContainer>
  );
}

export default LastReleases;
