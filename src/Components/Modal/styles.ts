import styled from "styled-components";
import Tile from "../Tile/Tile";
import { CloseBtnProps } from "./types";

export const StyledModal = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  width: 100%;
  padding: 30px;
  background-color: #858585be;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const Container = styled.div`
  background-color: var(--offWhite);
  padding: 16px;
  display: grid;
  flex-direction: column;
  gap: 24px;
  border-radius: var(--radius);
`;

export const InfosGrid = styled.div`
  display: grid;
  grid-gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    width: 50vw;
  }
`;

export const ModalTile = styled(Tile)`
  pointer-events: none;
`;

export const Close = styled.img<CloseBtnProps>`
  display: flex;
  margin-left: auto;
  cursor: pointer;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    line-height: 110%;
    font-size: clamp(16px, 5vw, 24px);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: clamp(12px, 2vw, 16px);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;