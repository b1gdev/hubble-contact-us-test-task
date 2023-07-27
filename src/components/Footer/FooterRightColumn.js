import styled from "@emotion/styled";

const FooterRightColumn = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr 1fr;
    row-gap: 32px;
    column-gap: 16px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 40px;
    column-gap: 30px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    row-gap: 48px;
    column-gap: 41px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default FooterRightColumn;
