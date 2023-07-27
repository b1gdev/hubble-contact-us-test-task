import styled from "@emotion/styled";

const PromoWrapper = styled.section`
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 0 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding: 0 32px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding: 0 64px;
  }
`;

export default PromoWrapper;
