import styled from "@emotion/styled";

const HeaderNav = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    position: absolute;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
    background-color: ${({ theme }) => theme.palette.white};
    transition: 0.3s;
    flex-direction: column;
    top: 95%;
    border-radius: 3px;
    padding: 20px;
    z-index: 10;
  }
`;

export default HeaderNav;
