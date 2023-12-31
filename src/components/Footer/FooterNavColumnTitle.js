import styled from "@emotion/styled";

const FooterNavColumnTitle = styled.span`
  color: ${({ theme }) => theme.palette.white};
  font-family: ${({ theme }) => theme.typography.fontFamilyPolySans};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 18px;
  letter-spacing: 0.42px;
`;

export default FooterNavColumnTitle;
