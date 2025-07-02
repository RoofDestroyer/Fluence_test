import {
  CloseText,
  Container,
  Logo,
  MenuLogo,
  Tag,
  Text,
  Wallet,
  Wrapper,
  WrapperTag,
  WrapperText,
  WrapperWalletMenu,
} from "./styled";

import LogoImage from "../../assets/Frame 1948758799.svg";
import { useContext } from "react";
import CurrencyContext from "../../CurrencyContext";
import MENU_LOGO from "../../assets/Menu.svg";

export const Nav = ({ isVisible }) => {
  return (
    <>
      <Container visible={isVisible}>
        <Wrapper>
          <Logo src={LogoImage} loading="lazy" />
          <WrapperText>
            <Text>Home</Text>
            <Text>Referrals</Text>
            <Text>FAQ</Text>
            <WrapperTag>
              <CloseText>Store</CloseText>
              <Tag>soon</Tag>
            </WrapperTag>
          </WrapperText>
          <WrapperWalletMenu>
            <Wallet>0xbc...6837</Wallet>
            <MenuLogo src={MENU_LOGO} />
          </WrapperWalletMenu>
        </Wrapper>
      </Container>
    </>
  );
};
