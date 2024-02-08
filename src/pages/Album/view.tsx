import DataGrid from "@components/DataGrid";
import {
  Container,
  TableStyle,
  ContainerText,
  Title,
  WrapperDataGrid,
} from "./styles";
import { IViewProps } from "./types";
import Typography from "@components/UI/Typography";

const Home = ({ handleNavigate, data, header }: IViewProps) => {
  return (
    <Container>
      <ContainerText>
        <Title>Albums</Title>
      </ContainerText>
      <ContainerText>
        {data.length !== 0 ? (
          <WrapperDataGrid>
            <DataGrid header={header} data={data} />
          </WrapperDataGrid>
        ) : (
          <Container
            style={{
              flexDirection: "column",
              height: "60vh",
              justifyContent: "center",
            }}
          >
            <Typography color="#858789" weight="400" size={18}>
              Nada para ser exibido.
            </Typography>
          </Container>
        )}
      </ContainerText>
    </Container>
  );
};

export default Home;
