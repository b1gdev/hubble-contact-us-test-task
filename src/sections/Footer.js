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
              {socials.map(({ icon, path }) => (
                <FooterSocialItem href={path}>
                  <FooterSocialIcon src={icon} />
                </FooterSocialItem>
              ))}
            </FooterSocialStack>
          </FooterContacts>
          <FooterCopyrightText>{copyrightText}</FooterCopyrightText>
        </FooterLeftColumn>
        <FooterRightColumn>
          {navigation.map(({ title, links }) => (
            <FooterNavColumn>
              <FooterNavColumnTitle>{title}</FooterNavColumnTitle>
              {links.map(({ title, path }) => (
                <FooterNavColumnItem href={path}>{title}</FooterNavColumnItem>
              ))}
            </FooterNavColumn>
          ))}
        </FooterRightColumn>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
