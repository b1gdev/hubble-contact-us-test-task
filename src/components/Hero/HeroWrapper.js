import styled from "@emotion/styled";

const HeroWrapper = styled.section`
  position: relative;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    aspect-ratio: 4/5;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "xl")} {
    aspect-ratio: 16 / 9;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    aspect-ratio: 16 / 7;
  }
`;

export default HeroWrapper;
