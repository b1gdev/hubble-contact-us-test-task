import styled from "@emotion/styled";

const HeaderBurgerBtn = styled.button`
  ${({ theme }) => theme.breakpoints.down("xl")} {
    width: 16px;
    height: 16px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: ${({ isOpen }) => (isOpen ? "0" : "16px")};
      height: 2px;
      background-color: ${({ theme }) => theme.palette.gray.light};
      transition: 0.3s;
      border-radius: 1px;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 16px;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.gray.light};
      transition: 0.3s;
      border-radius: 1px;
    }

    &::before {
      top: ${({ isOpen }) => (isOpen ? "7px" : "1px")};
      transform: rotate(${({ isOpen }) => (isOpen ? "-45deg" : "0")});
    }

    &::after {
      bottom: ${({ isOpen }) => (isOpen ? "7px" : "1px")};
      transform: rotate(${({ isOpen }) => (isOpen ? "45deg" : "0")});
    }
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    display: none;
  }
`;

export default HeaderBurgerBtn;
