import styled from "styled-components";
import Button from "../Button/Button";
import { useSetAtom } from "jotai";
import { searchQueryAtom } from "../../store/store";
import { FormEvent, useState } from "react";

const StyledSearchBar = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const Input = styled.input`
  display: inline-flex;
  min-width: 60%;
  border-radius: var(--radius);
  border: 1px solid black;
  padding: 8px;
  flex-grow: 1;
`;

const SearchBar = () => {
  const setQuery = useSetAtom(searchQueryAtom);
  const handleQuery = () => {
    setQuery(valueSearch);
    setValueSearch("");
  };

  const [valueSearch, setValueSearch] = useState("");
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValueSearch(e.currentTarget.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleQuery();
    }
  };

  return (
    <StyledSearchBar>
      <Input
        type="text"
        placeholder="Search..."
        value={valueSearch}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button $emphasis="primary" type="submit" onClick={handleQuery}>
        Submit
      </Button>
    </StyledSearchBar>
  );
};

export default SearchBar;
