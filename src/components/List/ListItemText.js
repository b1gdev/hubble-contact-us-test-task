import styled from "@emotion/styled";

const ListItemText = styled.p`
  color: ${({ theme }) => theme.palette.gray.light};
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnica};
  text-align: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.42px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    font-size: 16px;
    line-height: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: 18px;
    line-height: 26px;
  }

  & span {
    font-style: italic;
  }
`;

export default ListItemText;
