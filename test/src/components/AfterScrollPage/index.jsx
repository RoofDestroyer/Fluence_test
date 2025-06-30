import LOGO from "../../assets/Frame 1948758738.svg";
import {
  Container,
  Logo,
  RightWrapper,
  Text,
  TextCount,
  Wallet,
  Wrapper,
} from "./styled";
import { useContext, useEffect, useState } from "react";
import CurrencyContext from "../../CurrencyContext";
import Lottie from "lottie-react";
import testImg from "../../assets/plus points.json";

export const AfterScrollNav = ({ isVisible }) => {
  const { currency } = useContext(CurrencyContext);

  const [displayedCurrency, setDisplayedCurrency] = useState(currency);

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (currency) {
      let start = displayedCurrency;
      let end = currency;
      let change = end - start;
      let duration = 2000;
      let stepTime = duration / Math.abs(change);

      let increment = change > 0 ? 1 : -1;
      let intervalId = setInterval(() => {
        start += increment;
        setDisplayedCurrency(start);
        if (start === end) {
          clearInterval(intervalId);
        }
      }, stepTime);

      setShowAnimation(true);

      setTimeout(() => setShowAnimation(false), 2500);

      return () => clearInterval(intervalId);
    }
  }, [currency]);

  return (
    <Container visible={isVisible}>
      <Wrapper>
        <RightWrapper>
          <Logo src={LOGO} animate={showAnimation} />
          {showAnimation && (
            <Lottie
              animationData={testImg}
              style={{
                width: 100,
                height: 100,
                position: "absolute",
                left: -66,
                top: -4,
              }}
              loop={false}
            />
          )}
          <Text>
            Total Points: <TextCount>{displayedCurrency}</TextCount>
          </Text>
        </RightWrapper>
        <Wallet>0xbc...6837</Wallet>
      </Wrapper>
    </Container>
  );
};
