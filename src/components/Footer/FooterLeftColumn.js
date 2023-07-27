import styled from "@emotion/styled";

const FooterLeftColumn = styled.div`
  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: contents;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export default FooterLeftColumn;
