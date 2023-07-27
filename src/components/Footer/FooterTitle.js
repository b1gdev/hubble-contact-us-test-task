import styled from "@emotion/styled";

const FooterTitle = styled.h5`
  color: ${({ theme }) => theme.palette.white};
  font-family: ${({ theme }) => theme.typography.fontFamilyPolySans};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0.24px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 30px;
    line-height: 42px;
  }
`;

export default FooterTitle;
