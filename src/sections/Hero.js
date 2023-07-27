import {
  HeroWrapper,
  HeroTitle,
  HeroContent,
  HeroImageWrapper,
  HeroImage,
  HeroSubtitle,
} from "../components/Hero";

const Hero = ({ title, imageSet, subTitle }) => (
  <HeroWrapper>
    <HeroImageWrapper>
      <HeroImage
        alt={imageSet.alt}
        src={imageSet.laptop}
        srcSet={`${imageSet.mobile} 479w, ${imageSet.laptop} 480w`}
      />
    </HeroImageWrapper>
    <HeroContent>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subTitle}</HeroSubtitle>
    </HeroContent>
  </HeroWrapper>
);

export default Hero;
