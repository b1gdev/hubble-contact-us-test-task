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
          <HeaderBurgerBtn isOpen={isOpen} onClick={handleIsOpen}>
            <span />
          </HeaderBurgerBtn>
          <HeaderLogo src={logo} />
          <HeaderNav isOpen={isOpen}>
            {links.map(({ title, path }) => (
              <HeaderNavItem href={path} key={title}>
                {title}
              </HeaderNavItem>
            ))}
          </HeaderNav>
        </HeaderLeftWrapper>
        <HeaderActions>
          <HeaderIcon>
            <UserIcon />
          </HeaderIcon>
          <HeaderIcon>
            <BagIcon />
          </HeaderIcon>
          <HeaderIcon>
            <SearchIcon />
          </HeaderIcon>
        </HeaderActions>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
