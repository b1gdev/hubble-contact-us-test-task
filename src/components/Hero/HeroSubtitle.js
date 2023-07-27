import styled from "@emotion/styled";

const HeroSubtitle = styled.span`
  color: ${({ theme }) => theme.palette.white};
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnica};
  font-size: 18px;
  line-height: 26px;
  display: block;
`;

export default HeroSubtitle;
