import styled from "@emotion/styled";

const ListStack = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 56px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 32px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    justify-content: space-between;
    gap: 41px;
  }
`;

export default ListStack;
