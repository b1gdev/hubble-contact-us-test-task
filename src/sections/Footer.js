import {
  FooterCopyrightText,
  FooterForm,
  FooterFormButton,
  FooterFormInput,
  FooterLeftColumn,
  FooterNavColumnItem,
  FooterNavColumn,
  FooterNavColumnTitle,
  FooterRightColumn,
  FooterSocialIcon,
  FooterSocialItem,
  FooterSocialStack,
  FooterTitle,
  FooterContainer,
  FooterContacts,
  FooterWrapper,
} from "../components/Footer";

const Footer = ({ title, inputPlaceholder, buttonText, copyrightText, socials, navigation }) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLeftColumn>
          <FooterContacts>
            <FooterTitle>{title}</FooterTitle>
            <FooterForm>
              <FooterFormInput placeholder={inputPlaceholder} />
              <FooterFormButton>{buttonText}</FooterFormButton>
            </FooterForm>
            <FooterSocialStack>
              {socials.map(({ icon, path, id, altText }) => (
                <FooterSocialItem href={path} key={id}>
                  <FooterSocialIcon src={icon} alt={altText} />
                </FooterSocialItem>
              ))}
            </FooterSocialStack>
          </FooterContacts>
          <FooterCopyrightText>{copyrightText}</FooterCopyrightText>
        </FooterLeftColumn>
        <FooterRightColumn>
          {navigation.map(({ title, links, id }) => (
            <FooterNavColumn key={id}>
              <FooterNavColumnTitle>{title}</FooterNavColumnTitle>
              {links.map(({ title, path, id: itemId }) => (
                <FooterNavColumnItem href={path} key={itemId}>
                  {title}
                </FooterNavColumnItem>
              ))}
            </FooterNavColumn>
          ))}
        </FooterRightColumn>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
