import {
  CloseText,
  Container,
  Logo,
  Tag,
  Text,
  Wallet,
  Wrapper,
  WrapperTag,
  WrapperText,
} from "./styled";

import LogoImage from "../../assets/Frame 1948758799.svg";
import { useContext } from "react";
import CurrencyContext from "../../CurrencyContext";

export const Nav = ({isVisible}) => {
  const { currency } = useContext(CurrencyContext);

  return (
    <>
      <Container visible={isVisible}>
        <Wrapper>
          <Logo src={LogoImage} />
          <WrapperText>
            <Text>Home</Text>
            <Text>Referrals</Text>
            <Text>FAQ</Text>
            <WrapperTag>
              <CloseText>Store</CloseText>
              <Tag>soon</Tag>
            </WrapperTag>
          </WrapperText>
          <Wallet>0xbc...6837</Wallet>
        </Wrapper>
      </Container>
    </>
  );
};
