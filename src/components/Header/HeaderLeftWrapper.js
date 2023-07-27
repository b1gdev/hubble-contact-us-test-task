import styled from "@emotion/styled";
const HeaderLeftWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.down("xl")} {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    display: contents;
  }
`;

export default HeaderLeftWrapper;
