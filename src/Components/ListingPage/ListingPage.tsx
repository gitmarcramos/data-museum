import { useEffect, useState } from "react";
import styled from "styled-components";
import Tile, { LoadingTile } from "../Tile/Tile";
import { DATA_TYPE, ListingPageProps, StyledListingPageProps } from "./types";
import { useAtom, useAtomValue } from "jotai";
import {
  detailsAtom,
  itemsPerPageAtom,
  searchQueryAtom,
  visibleItemsAtom,
} from "../../store/store";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { ModalData } from "../Modal/types";

const StyledListingPage = styled.div<StyledListingPageProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const ResultsString = styled.div`
  height: 3vh;
  font-size: clamp(12px, 2vw, 16px);
`;

const List = styled.div`
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

const ListingPage = ({ className }: ListingPageProps) => {
  const [data, setData] = useState<DATA_TYPE[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const query = useAtomValue(searchQueryAtom);
  const [itemsPerPage, setItemsPerPage] = useAtom(itemsPerPageAtom);
  const [visibleItems, setVisibleItems] = useAtom(visibleItemsAtom);

  const handleItemsPerPage = () => {
    setItemsPerPage((value) => value + 20);
    setVisibleItems((value) => value + 12);
  };

  useEffect(() => {
    const URL = `https://www.rijksmuseum.nl/api/nl/collection?key=${import.meta.env.VITE_KEY}&ps=${itemsPerPage}&q=${query}`;
    {
      (async () => {
        try {
          const response = await fetch(URL);
          const data = await response.json();
          setData(data.artObjects);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [itemsPerPage, query]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfos, setModalInfos] = useAtom(detailsAtom);

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModal = ({ image, title, description, id }: ModalData) => {
    handleClose();
    setModalInfos({
      ...modalInfos,
      title: title,
      description: description,
      image: image,
      id: id,
    });
  };

  return (
    <StyledListingPage>
      <ResultsString>
        {query ? <span>{data.length} Results for "{query}"</span> : null}
      </ResultsString>

      <List className={className}>
        {isLoading &&
          Array.from(Array(itemsPerPage), (_e, i) => {
            return <LoadingTile key={i} />;
          })}
        {data &&
          data.slice(0, visibleItems).map((item) => {
            return (
              <Tile
                key={item.id}
                $imageTitle={item.title}
                alt={item.longTitle}
                src={item.webImage?.url}
                onClick={() =>
                  handleModal({
                    image: item.webImage?.url,
                    title: item.title,
                    description: item.longTitle,
                    id: item.id,
                  })
                }
              />
            );
          })}
      </List>
      {isModalOpen && modalInfos && (
        <Modal
          onClose={handleClose}
          image={modalInfos.image}
          description={modalInfos.description}
          title={modalInfos.title}
          id={modalInfos.id}
        />
      )}
      <Button $emphasis="primary" onClick={handleItemsPerPage}>
        Load more
      </Button>
    </StyledListingPage>
  );
};

export default ListingPage;
