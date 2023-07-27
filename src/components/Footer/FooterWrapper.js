import styled from "@emotion/styled";

const FooterWrapper = styled.section`
  background: ${({ theme }) => theme.palette.gray.light};

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 32px 20px;
    margin-top: 59px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding: 42px 42px 35px 42px;
    margin-top: 80px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding: 64px 64px 55px 64px;
    margin-top: 100px;
  }
`;

export default FooterWrapper;
