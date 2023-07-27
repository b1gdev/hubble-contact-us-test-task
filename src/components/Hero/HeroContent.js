import styled from "@emotion/styled";
import Container from "../Container";

const HeroContent = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 100%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 16px;
    padding: 40px 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 20px;
    padding: 60px 32px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 30px;
    padding: 81px 64px;
  }
`;

export default HeroContent;
