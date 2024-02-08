import PathRoutes from "@route/PathRoutes";
import { ButtonIcon, Container,  ContainerIcons, ContainerText, Title } from "./styles";
import { IViewProps } from "./types";

const Home = ({handleNavigate}:IViewProps) => {
  return (
    <Container>
    <ContainerText>
      <Title>Music Front</Title>
    </ContainerText>
    <ContainerText>
      <ContainerIcons>
        <ButtonIcon onClick={() => handleNavigate(PathRoutes.ARTIST)}> Artista </ButtonIcon>
        <ButtonIcon onClick={() => handleNavigate(PathRoutes.MUSIC)}> Musicas </ButtonIcon>
        <ButtonIcon onClick={() => handleNavigate(PathRoutes.ALBUM)}> Albuns </ButtonIcon>
      </ContainerIcons>
    </ContainerText>
  </Container>
  );
};

export default Home;
