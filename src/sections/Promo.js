import Container from "../components/Container";
import {
  PromoContainer,
  PromoContent,
  PromoEyebrow,
  PromoImage,
  PromoLink,
  PromoTitle,
  PromoWrapper,
} from "../components/Promo";

import { ReactComponent as PromoLinkArrow } from "../icons/LinkArrow.svg";

const Promo = ({ eyebrow, title, linkText, linkPath, imageSet }) => {
  return (
    <PromoWrapper>
      <Container>
        <PromoContainer>
          <PromoContent>
            <PromoEyebrow>{eyebrow}</PromoEyebrow>
            <PromoTitle>{title}</PromoTitle>
            <PromoLink href={linkPath}>
              {linkText}
              <PromoLinkArrow />
            </PromoLink>
          </PromoContent>

          <picture>
            <source media="(max-width: 720px)" srcSet={imageSet.mobileWebp} type="image/webp" />
            <source media="(min-width: 721px)" srcSet={imageSet.laptopWebp} type="image/webp" />
            <source media="(max-width: 720px)" srcSet={imageSet.mobile} type="image/jpeg" />
            <source media="(min-width: 721px)" srcSet={imageSet.laptop} type="image/jpeg" />
            <PromoImage alt={imageSet.alt} src={imageSet.mobileWebp} />
          </picture>
        </PromoContainer>
      </Container>
    </PromoWrapper>
  );
};

export default Promo;
