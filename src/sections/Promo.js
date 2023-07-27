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
          <PromoImage
            alt={imageSet.alt}
            src={imageSet.mobile}
            srcSet={`${imageSet.mobile} 720w, ${imageSet.laptop} 721w`}
          />
        </PromoContainer>
      </Container>
    </PromoWrapper>
  );
};

export default Promo;
