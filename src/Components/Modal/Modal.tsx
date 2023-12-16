import Button from "../Button/Button";
import close from "../../assets/icon.svg";
import { Link } from "react-router-dom";
import { StyledModal, Container, Close, InfosGrid, ModalTile, Infos } from "./styles";
import { ModalProps } from "./types";





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
