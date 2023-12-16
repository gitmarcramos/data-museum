import { useEffect, useState } from "react";
import Tile, { LoadingTile } from "../Tile/Tile";
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
import { StyledListingPage, ResultsString, List } from "./styles";
import { DATA_TYPE, ListingPageProps } from "./types";



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


  //TODO: extract this fetch inside a custom hook
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
