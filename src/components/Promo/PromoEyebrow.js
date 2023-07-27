import styled from "@emotion/styled";

const PromoEyebrow = styled.span`
  display: block;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.palette.purple.dark};
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnica};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default PromoEyebrow;
