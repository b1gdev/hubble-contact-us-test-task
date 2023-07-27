import styled from "@emotion/styled";

const ListItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex: 1 1 100%;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    flex: 1 1 30%;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    flex: 1 1 100%;
  }
`;

export default ListItem;
