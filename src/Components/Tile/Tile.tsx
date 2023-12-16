import { LoadingImage, StyledTile, TileInfos, Image } from "./styles";
import { TyleProps } from "./types";

export const LoadingTile = () => {
  return (
    <StyledTile>
      <LoadingImage />
    </StyledTile>
  );
};

const Tile = ({ className, alt, src, $imageTitle, onClick }: TyleProps) => {
  return (
    <StyledTile className={className} onClick={onClick}>
      <Image alt={alt} src={src} />
      <TileInfos>{$imageTitle}</TileInfos>
    </StyledTile>
  );
};

export default Tile;
