import styled from "@emotion/styled";
import Container from "../Container";

const HeaderWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    position: relative;
    padding: 12px 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    position: relative;
    padding: 16px 30px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding: 20px 40px;
  }
`;

export default HeaderWrapper;
