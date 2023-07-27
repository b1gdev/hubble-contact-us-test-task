import styled from "@emotion/styled";

const PromoContent = styled.div`
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 32px;
    padding-bottom: 10px;
    padding-left: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding-top: 56px;
    padding-bottom: 56px;
    padding-left: 48px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding-top: 56px;
    padding-bottom: 56px;
    padding-left: 48px;
  }
`;

export default PromoContent;
