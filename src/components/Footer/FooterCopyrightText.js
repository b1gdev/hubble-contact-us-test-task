import styled from "@emotion/styled";

const FooterCopyrightText = styled.span`
  color: ${({ theme }) => theme.palette.white};
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnica};
  font-size: 12px;
  line-height: 16px;
  margin-top: auto;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    order: 1;
  }
`;

export default FooterCopyrightText;
