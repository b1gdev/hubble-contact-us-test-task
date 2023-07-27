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
      <picture>
        <source media="(max-width: 479px)" srcSet={imageSet.mobileWebp} type="image/webp" />
        <source media="(min-width: 480px)" srcSet={imageSet.laptopWebp} type="image/webp" />
        <source media="(max-width: 479px)" srcSet={imageSet.mobile} type="image/jpeg" />
        <source media="(min-width: 480px)" srcSet={imageSet.laptop} type="image/jpeg" />
        <HeroImage src={imageSet.mobileWebp} alt={imageSet.alt} />
      </picture>
    </HeroImageWrapper>
    <HeroContent>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subTitle}</HeroSubtitle>
    </HeroContent>
  </HeroWrapper>
);

export default Hero;
