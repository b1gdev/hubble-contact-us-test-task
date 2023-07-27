import styled from "@emotion/styled";

const Container = styled.div`
  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-right: auto;
    margin-left: auto;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    max-width: ${({ theme }) => theme.breakpoints.values.md}px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    max-width: ${({ theme }) => theme.breakpoints.values.xl}px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    max-width: ${({ theme }) => theme.breakpoints.values["2xl"]}px;
  }
`;

export default Container;
