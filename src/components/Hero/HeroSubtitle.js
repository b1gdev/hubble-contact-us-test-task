import styled from "@emotion/styled";

const HeroSubtitle = styled.h2`
  color: ${({ theme }) => theme.palette.white};
  font-family: ${({ theme }) => theme.typography.fontFamilyPolySans};
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.3px;
`;

export default HeroSubtitle;
