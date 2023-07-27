import { useState } from "react";
import {
  HeaderActions,
  HeaderBurgerBtn,
  HeaderLeftWrapper,
  HeaderLogo,
  HeaderIcon,
  HeaderNav,
  HeaderWrapper,
  HeaderContainer,
  HeaderNavItem,
} from "../components/Header";
import { ReactComponent as BagIcon } from "../icons/Bag.svg";
import { ReactComponent as SearchIcon } from "../icons/Search.svg";
import { ReactComponent as UserIcon } from "../icons/User.svg";

const Header = ({ links, logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeftWrapper>
          <HeaderBurgerBtn aria-label="toggle burger menu" isOpen={isOpen} onClick={handleIsOpen}>
            <span />
          </HeaderBurgerBtn>
          <a href="/">
            <HeaderLogo alt="Logo image" src={logo} />
          </a>
          <HeaderNav isOpen={isOpen}>
            {links.map(({ title, path, id }) => (
              <HeaderNavItem href={path} key={id}>
                {title}
              </HeaderNavItem>
            ))}
          </HeaderNav>
        </HeaderLeftWrapper>
        <HeaderActions>
          <HeaderIcon aria-label="open account">
            <UserIcon />
          </HeaderIcon>
          <HeaderIcon aria-label="open cart">
            <BagIcon />
          </HeaderIcon>
          <HeaderIcon aria-label="open search">
            <SearchIcon />
          </HeaderIcon>
        </HeaderActions>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
