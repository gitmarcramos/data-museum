import styled from "styled-components";
import { ImageTitleProps } from "./types";

export const TileInfos = styled.div<ImageTitleProps>`
  position: absolute;
  bottom: -200%;
  left: 0;
  width: 100%;
  min-height: 30%;
  background-color: var(--offWhite);
  box-shadow: 0px -2px 5px 0px rgba(112, 112, 112, 0.1),
    0px -9px 9px 0px rgba(112, 112, 112, 0.09),
    0px -20px 12px 0px rgba(112, 112, 112, 0.05),
    0px -36px 14px 0px rgba(112, 112, 112, 0.01),
    0px -56px 16px 0px rgba(112, 112, 112, 0);

  padding: 16px;
  color: var(--black);
  transition: all 300ms ease-out;
  border-radius: var(--radius) var(--radius) 0 0;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const StyledTile = styled.div`
  aspect-ratio: 1;
  position: relative;
  overflow: hidden;
  height: 100%;
  border-radius: var(--radius);

  &:hover ${TileInfos} {
    bottom: 0;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("https://via.placeholder.com/150");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
`;

export const LoadingImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://via.placeholder.com/150");
  background-repeat: no-repeat;
  background-size: cover;
`;