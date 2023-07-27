import styled from "@emotion/styled";

const ListItemLink = styled.a`
  color: ${({ theme }) => theme.palette.gray.light};
  font-family: ${({ theme }) => theme.typography.fontFamilyPolySans};
  text-align: center;
  text-decoration-line: underline;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 16px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    font-size: 22px;
    line-height: 33px;
    margin-bottom: 16px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 15px;
  }
`;

export default ListItemLink;
