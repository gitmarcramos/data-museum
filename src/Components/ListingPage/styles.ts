import styled from "styled-components";
import { StyledListingPageProps } from "./types";

export const StyledListingPage = styled.div<StyledListingPageProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const ResultsString = styled.div`
  height: 3vh;
  font-size: clamp(12px, 2vw, 16px);
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1480px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;