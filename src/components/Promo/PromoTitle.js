import styled from "@emotion/styled";

const PromoTitle = styled.h2`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.palette.purple.dark};
  font-family: ${({ theme }) => theme.typography.fontFamilyPolySans};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 20px;
    line-height: 30px;
    max-width: 250px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    font-size: 24px;
    line-height: 36px;
    max-width: 350px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: 24px;
    line-height: 36px;
    max-width: 350px;
  }
`;

export default PromoTitle;
