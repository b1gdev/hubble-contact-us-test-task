import styled from "@emotion/styled";

const HeaderNavItem = styled.a`
  color: ${({ theme }) => theme.palette.gray.light};
  font-family: ${({ theme }) => theme.typography.fontFamilyPolySans};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.3px;
  padding: 10px;
`;

export default HeaderNavItem;
