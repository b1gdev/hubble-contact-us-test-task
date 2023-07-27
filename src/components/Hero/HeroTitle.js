import styled from "@emotion/styled";

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.palette.white};
  font-family: ${({ theme }) => theme.typography.fontFamilyPolySans};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 36px;
    line-height: 46px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    font-size: 62px;
    line-height: 74px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: 88px;
    line-height: 100px;
  }
`;

export default HeroTitle;
