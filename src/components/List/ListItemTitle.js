import styled from "@emotion/styled";

const ListItemTitle = styled.h3`
  color: ${({ theme }) => theme.palette.gray.light};
  font-family: ${({ theme }) => theme.typography.fontFamilyPolySans};
  font-weight: 600;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 42px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    margin-bottom: 25px;
    font-size: 44px;
    line-height: 56px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    margin-bottom: 30px;
    font-size: 56px;
    line-height: 68px;
  }
`;

export default ListItemTitle;
