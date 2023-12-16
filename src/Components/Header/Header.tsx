import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 9;
  height: 10vh;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: clamp(8px, 10vw, 30vh);
  padding-right: clamp(8px, 10vw, 30vh);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--offWhite);
`;

const StyledLink = styled(Link)`
  color: var(--black);
  text-decoration: none;
`;

const Logo = styled.span`
  font-size: clamp(16px, 5vw, 24px);
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  cursor: pointer;
`;

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledHeader>
      <StyledLink to="/">
        <Logo onClick={scrollToTop}>Data Museum</Logo>
      </StyledLink>
    </StyledHeader>
  );
};

export default Header;
