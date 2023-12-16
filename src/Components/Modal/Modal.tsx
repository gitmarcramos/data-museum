import styled from "styled-components";
import Tile from "../Tile/Tile";
import Button from "../Button/Button";
import close from "../../assets/icon.svg";
import { Link } from "react-router-dom";

type ModalProps = {
  className?: string;
} & ModalData &
  CloseBtnProps;

type CloseBtnProps = {
  onClose?: () => void;
};

export type ModalData = {
  title: string;
  image: string;
  description: string;
  id: string;
};

const StyledModal = styled.div`
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

const Container = styled.div`
  background-color: var(--offWhite);
  padding: 16px;
  display: grid;
  flex-direction: column;
  gap: 24px;
  border-radius: var(--radius);
`;

const InfosGrid = styled.div`
  display: grid;
  grid-gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    width: 50vw;
  }
`;

const ModalTile = styled(Tile)`
  pointer-events: none;
`;

const Close = styled.img<CloseBtnProps>`
  display: flex;
  margin-left: auto;
  cursor: pointer;
`;

const Infos = styled.div`
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

const Modal = ({
  className,
  description,
  image,
  title,
  onClose,
  id,
}: ModalProps) => {
  return (
    <StyledModal className={className}>
      <Container>
        <Close src={close} alt="close button" onClick={onClose} />
        <InfosGrid>
          <ModalTile alt={description} src={image} />
          <Infos>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`details/${id}`}>
              <Button $emphasis="primary">View Details</Button>
            </Link>
          </Infos>
        </InfosGrid>
      </Container>
    </StyledModal>
  );
};

export default Modal;
