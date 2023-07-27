import styled from "@emotion/styled";
import Container from "../Container";

const FooterContainer = styled(Container)`
  display: flex;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    flex-direction: column;
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    justify-content: space-between;
    gap: 50px;
  }
`;

export default FooterContainer;
