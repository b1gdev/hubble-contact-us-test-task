import styled from "@emotion/styled";

const FooterNavColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    min-width: 158px;
  }
`;

export default FooterNavColumn;
