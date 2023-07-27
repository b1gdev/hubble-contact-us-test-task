import styled from "@emotion/styled";

const PromoContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.palette.purple.light};

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 15px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 30px;
    justify-content: space-between;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 30px;
    justify-content: space-between;
  }
`;

export default PromoContainer;
