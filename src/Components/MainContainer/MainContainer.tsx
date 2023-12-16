import styled from "styled-components";
import { StyledMainContainerProps } from "./types";

const StyledMainContainer = styled.main`
  padding-top: 12vh;
  padding-bottom: 12vh;
  padding-left: clamp(8px, 10vw, 30vh);
  padding-right: clamp(8px, 10vw, 30vh);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const MainContainer = ({ className, children }: StyledMainContainerProps) => {
  return (
    <StyledMainContainer className={className}>{children}</StyledMainContainer>
  );
};

export default MainContainer;
