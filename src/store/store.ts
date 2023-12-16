import { atom } from "jotai";
import { ModalData } from "../Components/Modal/types";

export const itemsPerPageAtom = atom(20);
export const visibleItemsAtom = atom(12);

export const isLoadingAtom = atom(true);

export const searchQueryAtom = atom("");

export const detailsAtom = atom<ModalData>({
  title: "",
  image: "",
  description: "",
  id: "",
});
