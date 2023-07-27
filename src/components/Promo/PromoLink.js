import styled from "@emotion/styled";

const PromoLink = styled.a`
  color: ${({ theme }) => theme.palette.purple.dark};
  font-family: ${({ theme }) => theme.typography.fontFamilyPolySans};
  font-size: 14px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 18px;
  letter-spacing: 0.42px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export default PromoLink;
