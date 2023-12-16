import ListingPage from "./Components/ListingPage/ListingPage";
import MainContainer from "./Components/MainContainer/MainContainer";
import SearchBar from "./Components/SearchBar/SearchBar";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./Components/DetailsPage/DetailsPage";

const StyledApp = styled.main``;

function App() {
  return (
    <StyledApp>
      <Header />
      <MainContainer>
        <SearchBar />
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </MainContainer>
    </StyledApp>
  );
}

export default App;
