import styled from "@emotion/styled";

const FooterNavColumnItem = styled.a`
  color: ${({ theme }) => theme.palette.white};
  font-family: ${({ theme }) => theme.typography.fontFamilyPolySans};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.42px;
`;

export default FooterNavColumnItem;
