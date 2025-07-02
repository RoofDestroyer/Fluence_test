import React, { useContext, useEffect, useState } from "react";
import {
  ButtonStart,
  CompletedBlock,
  CompletedText,
  Container,
  GifContent,
  ImgNotificationBackground,
  LeftWrappetNotification,
  LogoNotification,
  LottieContainer,
  Notification,
  RightWrapperNotification,
  Text,
  TextNotification,
  Title,
  Vector,
  WrapperCompledetInfo,
  WrapperInfoTextLogo,
  WrapperLottie,
  WrapperText,
} from "./styled";
import Lottie from "lottie-react";
import testImg from "../../assets/timer.json";
import VECTOR from "../../assets/Vector 6776.svg";
import CurrencyContext from "../../CurrencyContext";
import BIG_LOGO from "../../assets/Frame_1948758739.svg";
import GIF_NOTIGICATION from "../../assets/giphy5-ezgif.com-cut-2.gif";
import IMG_BACKGROUND from "../../assets/Virtual_machines_CPU_0000_1.svg";

const Card = ({ text, points, textButton }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { addCurrency } = useContext(CurrencyContext);
  const [showNotification, setShowNotification] = useState(false);
  const [visibleNotification, setVisibleNotification] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      const images = [BIG_LOGO, GIF_NOTIGICATION, IMG_BACKGROUND];
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  const handleStart = () => {
    setIsRunning(true);

    setTimeout(() => {
      setIsRunning(false);
      setIsCompleted(true);
      addCurrency(points);
      setShowNotification(true);
    }, 3000);
  };

  useEffect(() => {
    if (showNotification) {
      setTimeout(() => setVisibleNotification(true), 100);
      const hideTimeout = setTimeout(() => {
        setVisibleNotification(false);
        setTimeout(() => setShowNotification(false), 1000);
      }, 2000 + 1000);
      return () => clearTimeout(hideTimeout);
    }
  }, [showNotification]);

  return (
    <Container isCompleted={isCompleted}>
      <WrapperText>
        <Title>{text}</Title>
        <Text>{points} points</Text>
      </WrapperText>

      {isRunning && (
        <WrapperLottie>
          <LottieContainer isRunning={isRunning}>
            <Lottie animationData={testImg} loop={true} />
          </LottieContainer>
        </WrapperLottie>
      )}

      {!isRunning && !isCompleted && (
        <ButtonStart
          onClick={handleStart}
          hidden={isCompleted}
          hasTextButton={!!textButton}
        >
          {textButton || "Start"}
        </ButtonStart>
      )}

      {isCompleted && (
        <CompletedBlock>
          <Vector src={VECTOR} />
          <CompletedText>Completed</CompletedText>
        </CompletedBlock>
      )}

      {showNotification && (
        <ImgNotificationBackground visibleNotification={!visibleNotification}>
          <Notification>
            <LeftWrappetNotification>
              <GifContent src={GIF_NOTIGICATION} loading="eager" />
            </LeftWrappetNotification>
            <RightWrapperNotification>
              <WrapperCompledetInfo>
                <Vector src={VECTOR} />
                Activity Completed
              </WrapperCompledetInfo>
              <WrapperInfoTextLogo>
                <LogoNotification src={BIG_LOGO} loading="eager" />
                <TextNotification>You earned {points} points</TextNotification>
              </WrapperInfoTextLogo>
            </RightWrapperNotification>
          </Notification>
        </ImgNotificationBackground>
      )}
    </Container>
  );
};

export default Card;
