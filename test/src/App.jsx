import { useEffect, useRef, useState } from "react";

import "./App.css";

import {
  ActiveBoostsBlock,
  BigCardActivities,
  BigTitle,
  CardActivities,
  FirstBlock,
  Footer,
  LeftWrapperSecondBlock,
  LogoActiveBosstsInfo,
  LogoActivities,
  LogoFluence,
  MainBlock,
  MainLogo,
  NumberActiveBoostsInfo,
  NumberCard,
  NumberInfoStats,
  RightWrapperSecondBlock,
  SecondBlock,
  SmallTitle,
  SoonBigCardActivities,
  SoonMediaBigCardActivities,
  StatsBlock,
  TextActiveBoostsInfo,
  TextBigCardActivities,
  TextFooter,
  TextInfoStats,
  ThirtyBlock,
  Title,
  TitleActiveBoostsInfo,
  TitleBigCardActivities,
  TitleLogoActivities,
  TitleSecondBlock,
  Vector,
  WrapperActiveBoostsInfo,
  WrapperActivities,
  WrapperActivitiesCard,
  WrapperActivitiesMiddleSize,
  WrapperInfoStats,
  WrapperLogoTextActivities,
  WrapperNubmerVectorLogo,
  WrapperTextActiveBoostsInfo,
  WrapperTextBigCardActivities,
  WrapperTextFooter,
  WrappertTextInfoLogo,
} from "./styled";
import Card from "./components/Activities";
import { CurrencyProvider } from "./CurrencyContext";
import { AfterScrollNav } from "./components/AfterScrollPage";
import { Nav } from "./components/Nav";

import LOGO_SECOND_BLOCK_1 from "./assets/secondBlock/b73WUiEq_400x400 1.svg";
import LOGO_SECOND_BLOCK_2 from "./assets/secondBlock/b73WUiEq_400x400 1-2.svg";
import LOGO_SECOND_BLOCK_3 from "./assets/secondBlock/b73WUiEq_400x400 1-3.svg";

import LOGO_THIRTY_BLOCK_1 from "./assets/thirtyBlock/Frame 1948758738-2.svg";
import LOGO_THIRTY_BLOCK_2 from "./assets/thirtyBlock/Group 1948757817.svg";
import LOGO_THIRTY_BLOCK_3 from "./assets/thirtyBlock/Icon_20.svg";
import LOGO_THIRTY_BLOCK_33 from "./assets/thirtyBlock/Group 1948757829.svg";
import LOGO_THIRTY_BLOCK_4 from "./assets/thirtyBlock/Icon_20-2.svg";
import INFO_THIRTY_BLOCK_1 from "./assets/thirtyBlock/info.svg";
import VECTOR_THIRTY_BLOCK_1 from "./assets/thirtyBlock/Vector 6926.svg";
import FOOTER_LOGO from "./assets/footer/logo-2.svg";
import MAIN_LOGO from "./assets//main/image 1015.svg";
import BIG_LOGO from "./assets/Frame_1948758739.svg";
import GIF_NOTIGICATION from "./assets/giphy (5).gif";
import IMG_BACKGROUND from "./assets/Virtual_machines_CPU_0000_1";
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activitiesRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#0e101a";

    return () => {
      document.documentElement.style.backgroundColor = ""; // Сбросить при размонтировании
    };
  }, []);

  // useEffect(() => {
  //   const preloadImages = [GIF_NOTIGICATION, IMG_BACKGROUND, BIG_LOGO];

  //   preloadImages.forEach((src) => {
  //     const img = new Image();
  //     img.src = src;
  //   });
  // }, []);

  // useEffect(() => {
  //   const img1 = new window.Image();
  //   img1.src = LOGO_SECOND_BLOCK_1;
  //   const img2 = new window.Image();
  //   img2.src = LOGO_SECOND_BLOCK_2;
  //   const img3 = new window.Image();
  //   img3.src = LOGO_SECOND_BLOCK_3;
  //   const img4 = new window.Image();
  //   img4.src = LOGO_THIRTY_BLOCK_1;
  //   const img5 = new window.Image();
  //   img5.src = INFO_THIRTY_BLOCK_1;
  //   const img6 = new window.Image();
  //   img6.src = MAIN_LOGO;
  // }, []);

  const handleScroll = () => {
    if (activitiesRef.current) {
      const activitiesTop = activitiesRef.current.getBoundingClientRect().top;
      if (activitiesTop <= window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CurrencyProvider>
      <MainBlock>
        <Nav isVisible={!isScrolled}></Nav>
        <AfterScrollNav isVisible={isScrolled} />
        <MainLogo src={MAIN_LOGO} loading='lazy' />
        <FirstBlock>
          <BigTitle>contribute</BigTitle>
          <BigTitle>collect points. repeat.</BigTitle>
          <SmallTitle>farm points — embrace the pointless</SmallTitle>
        </FirstBlock>

        <SecondBlock>
          <LeftWrapperSecondBlock>
            <TitleSecondBlock>your stats</TitleSecondBlock>
            <StatsBlock>
              <WrapperInfoStats>
                <TextInfoStats>Total Points</TextInfoStats>
                <NumberInfoStats>3,142,895</NumberInfoStats>
              </WrapperInfoStats>
              <WrapperInfoStats>
                <TextInfoStats>Daily Points</TextInfoStats>
                <NumberInfoStats>142,895</NumberInfoStats>
              </WrapperInfoStats>
              <WrapperInfoStats>
                <TextInfoStats>Boost Multiplier</TextInfoStats>
                <NumberInfoStats>+20%</NumberInfoStats>
              </WrapperInfoStats>
            </StatsBlock>
          </LeftWrapperSecondBlock>

          <RightWrapperSecondBlock>
            <TitleSecondBlock>your active boosts</TitleSecondBlock>
            <ActiveBoostsBlock>
              <WrapperActiveBoostsInfo>
                <LogoActiveBosstsInfo src={LOGO_SECOND_BLOCK_1} loading='lazy' />
                <WrapperTextActiveBoostsInfo>
                  <TitleActiveBoostsInfo>real gecko</TitleActiveBoostsInfo>
                  <TextActiveBoostsInfo>
                    speacial boost for CoinGecko fans
                  </TextActiveBoostsInfo>
                </WrapperTextActiveBoostsInfo>
                <NumberActiveBoostsInfo>+20%</NumberActiveBoostsInfo>
              </WrapperActiveBoostsInfo>
              <WrapperActiveBoostsInfo>
                <LogoActiveBosstsInfo src={LOGO_SECOND_BLOCK_2} loading='lazy'/>
                <WrapperTextActiveBoostsInfo>
                  <TitleActiveBoostsInfo>uniswap</TitleActiveBoostsInfo>
                  <TextActiveBoostsInfo>
                    speacial boost for Uniswap fans
                  </TextActiveBoostsInfo>
                </WrapperTextActiveBoostsInfo>
                <NumberActiveBoostsInfo>+35%</NumberActiveBoostsInfo>
              </WrapperActiveBoostsInfo>
              <WrapperActiveBoostsInfo>
                <LogoActiveBosstsInfo src={LOGO_SECOND_BLOCK_3} loading='lazy' />
                <WrapperTextActiveBoostsInfo>
                  <TitleActiveBoostsInfo>mexc</TitleActiveBoostsInfo>
                  <TextActiveBoostsInfo>
                    speacial boost for MEXC fans
                  </TextActiveBoostsInfo>
                </WrapperTextActiveBoostsInfo>
                <NumberActiveBoostsInfo>+20%</NumberActiveBoostsInfo>
              </WrapperActiveBoostsInfo>
            </ActiveBoostsBlock>
          </RightWrapperSecondBlock>
        </SecondBlock>

        <ThirtyBlock>
          <Title>activities</Title>
          <WrapperActivities>
            <WrapperLogoTextActivities>
              <LogoActivities src={LOGO_THIRTY_BLOCK_1} loading='lazy' />
              <TitleLogoActivities>pointless</TitleLogoActivities>
            </WrapperLogoTextActivities>
            <BigCardActivities>
              <WrapperTextBigCardActivities>
                <TitleBigCardActivities>
                  stay tuned for our new Pointless activities!
                </TitleBigCardActivities>
                <TextBigCardActivities>100 points</TextBigCardActivities>
              </WrapperTextBigCardActivities>
              <SoonMediaBigCardActivities>Soon</SoonMediaBigCardActivities>
              <SoonBigCardActivities>Coming soon</SoonBigCardActivities>
            </BigCardActivities>
          </WrapperActivities>

          <WrapperActivities>
            <WrapperLogoTextActivities>
              <LogoActivities src={LOGO_THIRTY_BLOCK_1} loading='lazy' />
              <TitleLogoActivities>one-time</TitleLogoActivities>
            </WrapperLogoTextActivities>
            <WrapperActivitiesCard>
              <Card
                text={"subscribe to Fluence"}
                points={100}
                textButton={"Verify"}
              />
              <Card text={"subscribe to DePIN"} points={100} />
            </WrapperActivitiesCard>
          </WrapperActivities>
          <WrapperActivities>
            <WrapperLogoTextActivities ref={activitiesRef}>
              <LogoActivities src={LOGO_THIRTY_BLOCK_1} loading='lazy' />
              <TitleLogoActivities>daily</TitleLogoActivities>
            </WrapperLogoTextActivities>
            <WrapperActivitiesCard>
              <Card text={"be publish on CMC"} points={20} />
              <Card text={"like &bookmark our latest tweet"} points={100} />
            </WrapperActivitiesCard>
          </WrapperActivities>

          <WrapperActivitiesMiddleSize>
            <WrapperLogoTextActivities>
              <LogoActivities src={LOGO_THIRTY_BLOCK_1} loading='lazy' />
              <TitleLogoActivities>earning</TitleLogoActivities>
            </WrapperLogoTextActivities>
            <WrapperActivitiesCard>
              <CardActivities>
                <WrapperTextBigCardActivities>
                  <TitleBigCardActivities>
                    hold FLT on Ethereum
                  </TitleBigCardActivities>
                  <WrappertTextInfoLogo>
                    <TextBigCardActivities>10 points </TextBigCardActivities>
                    <Vector src={INFO_THIRTY_BLOCK_1} loading='lazy' />
                  </WrappertTextInfoLogo>
                </WrapperTextBigCardActivities>
                <WrapperNubmerVectorLogo>
                  <NumberCard>128</NumberCard>
                  <Vector src={VECTOR_THIRTY_BLOCK_1} loading='lazy' />
                </WrapperNubmerVectorLogo>
              </CardActivities>
              <CardActivities>
                <WrapperTextBigCardActivities>
                  <TitleBigCardActivities>
                    hold FLT on Fluence
                  </TitleBigCardActivities>
                  <WrappertTextInfoLogo>
                    <TextBigCardActivities>10 points </TextBigCardActivities>
                    <Vector src={INFO_THIRTY_BLOCK_1} loading='lazy' />
                  </WrappertTextInfoLogo>
                </WrapperTextBigCardActivities>
                <WrapperNubmerVectorLogo>
                  <NumberCard>86</NumberCard>
                  <Vector src={VECTOR_THIRTY_BLOCK_1} loading='lazy' />
                </WrapperNubmerVectorLogo>
              </CardActivities>
            </WrapperActivitiesCard>
            <WrapperActivitiesCard>
              <CardActivities>
                <WrapperTextBigCardActivities>
                  <TitleBigCardActivities>
                    hold pFLT on Fluence
                  </TitleBigCardActivities>
                  <WrappertTextInfoLogo>
                    <TextBigCardActivities>10 points </TextBigCardActivities>
                    <Vector src={INFO_THIRTY_BLOCK_1} loading='lazy' />
                  </WrappertTextInfoLogo>
                </WrapperTextBigCardActivities>
                <WrapperNubmerVectorLogo>
                  <NumberCard>250</NumberCard>
                  <Vector src={VECTOR_THIRTY_BLOCK_1} loading='lazy' />
                </WrapperNubmerVectorLogo>
              </CardActivities>
              <CardActivities>
                <WrapperTextBigCardActivities>
                  <TitleBigCardActivities>
                    provide liquidity to FLT/WETH pool
                  </TitleBigCardActivities>
                  <WrappertTextInfoLogo>
                    <TextBigCardActivities>10 points </TextBigCardActivities>
                    <Vector src={INFO_THIRTY_BLOCK_1} loading='lazy' />
                  </WrappertTextInfoLogo>
                </WrapperTextBigCardActivities>
                <WrapperNubmerVectorLogo>
                  <NumberCard>92</NumberCard>
                  <Vector src={VECTOR_THIRTY_BLOCK_1} loading='lazy' />
                </WrapperNubmerVectorLogo>
              </CardActivities>
            </WrapperActivitiesCard>
          </WrapperActivitiesMiddleSize>
        </ThirtyBlock>

        <Footer>
          <LogoFluence src={FOOTER_LOGO} loading='lazy'/>
          <WrapperTextFooter>
            <TextFooter>Terms of Service</TextFooter>
            <TextFooter> Privacy Policy</TextFooter>
          </WrapperTextFooter>
          <TextFooter>© 2025 Fluence</TextFooter>
        </Footer>
      </MainBlock>
    </CurrencyProvider>
  );
}

export default App;
