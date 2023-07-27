import styled from "@emotion/styled";

const ListWrapper = styled.section`
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 40px 20px 62px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding: 50px 32px 55px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding: 56px 64px 51px;
  }
`;

export default ListWrapper;
