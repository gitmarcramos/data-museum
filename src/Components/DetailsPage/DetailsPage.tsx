import styled from "styled-components";
import { Link } from "react-router-dom";
import Tile from "../Tile/Tile";
import { useAtomValue } from "jotai";
import { detailsAtom } from "../../store/store";

const StyledDetailsPage = styled.div`
  width: 100%;
  display: grid;
  flex-direction: column;
  grid-gap: 16px;
`;

const BackArea = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 16px 0;
`;

const PageContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DetailsTile = styled(Tile)`
  pointer-events: none;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    line-height: 110%;
    font-size: clamp(12px, 2vw, 16px);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: clamp(12px, 2vw, 16px);
  }
`;

const DetailsPage = () => {
  const pageDetails = useAtomValue(detailsAtom);
  return (
    <StyledDetailsPage>
      <BackArea>
        <Link to="/">Back</Link>
      </BackArea>
      <PageContainer>
        <DetailsTile alt={pageDetails.description} src={pageDetails.image} />
        <Infos>
          <h2>{pageDetails.title}</h2>
          <p>{pageDetails.description}</p>
        </Infos>
      </PageContainer>
    </StyledDetailsPage>
  );
};

export default DetailsPage;
