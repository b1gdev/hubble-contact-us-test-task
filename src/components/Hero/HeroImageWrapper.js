import styled from "@emotion/styled";

const HeroImageWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(63, 63, 63, 0.75) 100%);
  }
`;

export default HeroImageWrapper;
