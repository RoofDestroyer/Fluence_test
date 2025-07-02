import styled, { keyframes } from "styled-components";
import IMG_BACKGROUND from "../../assets/Virtual machines CPU_0000 1.svg";
// Определяем анимацию
const zoomInOut = keyframes`
  0% {
    transform: scale(1.1); 
  }
  50% {
    transform: scale(0.9); 
  }
  100% {
    transform: scale(1); 
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  width: 470px;
  height: 82px;
  justify-content: space-between;
  border-radius: 15px;
  padding: 20px;
  border-width: 1px;
  /* background: #30334899; */

  border: 1px solid #6b72801a;
  background-color: ${(props) =>
    props.isCompleted ? "#AAFE971A" : "#30334899"};
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    width: 315px;
    height: 74px;
    padding: 15px;
    align-items: flex-end;
    /* padding-bottom: 7px; */
  }
`;

export const LottieContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute;
  top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.isRunning ? 1 : 0)};
  @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    padding: 10px;
  }
`;

export const WrapperLottie = styled.div`
  box-sizing: border-box;
  background: var(--Social, #0d1531);
  width: 80px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 61px;
    height: 30px;
    border-radius: 10px;
    padding: 10px;
    position: relative;
    top: 10px;

    font-family: Unbounded;
    font-weight: 500;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 2%;
    text-transform: uppercase;
  }
`;

export const WrapperText = styled.div`
  width: 326px;
  height: 33px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  @media (max-width: 1000px) {
    width: 200px;
  }
`;

export const Title = styled.span`
  font-family: Unbounded;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  @media (max-width: 1000px) {
    font-family: Unbounded;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0%;
    width: 285px;
  }
`;

export const Text = styled.span`
  font-family: Unbounded;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  opacity: 0.6;

  @media (max-width: 1000px) {
    font-family: Unbounded;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0%;
  }
`;

export const ButtonStart = styled.button`
  box-sizing: border-box;
  display: ${(props) => (props.hidden ? "none" : "block")};

  background-color: ${(props) =>
    props.hasTextButton ? "#2D68FF" : "var(--Social, #0d1531)"};

  color: ${(props) => (props.hasTextButton ? "#FFFFFF" : "#2d68ff")};
  border: none;
  width: 80px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Unbounded;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 2%;
  text-transform: uppercase;
  cursor: pointer;

  transition: transform 0.2s ease, background-color 0.2s ease;

  &:active {
    transform: scale(0.95);
    background-color: ${(props) =>
      props.hasTextButton ? "#1a4cab" : "#0a1124"};
  }

  /* Эффект при наведении */
  &:hover {
    background-color: ${(props) =>
      props.hasTextButton ? "#3a7afc" : "#182d5d"}; /* Светлый оттенок */
    transform: scale(1.05); /* Увеличиваем кнопку */
  }

  @media (max-width: 1000px) {
    width: 61px;
    height: 30px;
    border-radius: 10px;
    padding: 10px;
    position: relative;
    top: 10px;

    font-family: Unbounded;
    font-weight: 500;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 2%;
    text-transform: uppercase;
  }
`;

export const CompletedBlock = styled.div`
  box-sizing: border-box;
  width: 130px;
  height: 32px;
  gap: 5px;
  border-radius: 999px;
  padding: 10px;
  background: #aafe9726;

  font-family: Unbounded;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 2%;
  text-transform: uppercase;
  color: #aafe97;

  display: flex;
  align-items: center;
  gap: 3.5px;
  animation: ${zoomInOut} 0.5s ease-in-out;
  @media (max-width: 1000px) {
    width: 114px;
    height: 30px;
    gap: 5px;
    padding: 10px;
    position: relative;
    right: 30px;
    top: 8px;
  }
`;

export const CompletedText = styled.span`
  font-family: Unbounded;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 2%;
  text-transform: uppercase;
  color: #aafe97;
  @media (max-width: 1000px) {
    font-family: Unbounded;
    font-weight: 500;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 2%;
    text-transform: uppercase;
  }
`;

export const Vector = styled.img``;

export const Notification = styled.div`
  position: relative;
  width: 362px;
  height: 142px;
  border-radius: 30px;
  /* background-color: red; */
  z-index: 2;
  background: #191c2c;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1000px) {
    width: 335px;
    height: 142px;
  }
`;

export const ImgNotificationBackground = styled.div`
  opacity: ${(props) => (props.visibleNotification ? 0 : 1)};
  transition: opacity 1s ease-out;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-image: url(${IMG_BACKGROUND});
  width: 370px;
  height: 150px;
  z-index: 1;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 345px;
    right: 10px;
    bottom: 20px;
  }
`;

export const LeftWrappetNotification = styled.div`
  position: relative;
  bottom: 35px;
  right: 5px;
  width: 120px;
  height: 180px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(345deg);
  border-radius: 15px;
`;

export const GifContent = styled.img`
  /* width: auto;
  height: 159.99998258361373px;
  top: 565px;
  left: 1015px;
  angle: 15 deg;
  border-radius: 15px; */

  width: auto;
  height: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-20%);
`;
export const RightWrapperNotification = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const WrapperCompledetInfo = styled.div`
  box-sizing: border-box;
  width: 205px;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 999px;
  padding: 10px;
  background: #aafe9726;

  font-family: Unbounded;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 2%;
  text-transform: uppercase;

  color: #aafe97;
  @media (max-width: 1000px) {
    width: 176px;
    height: 30px;

    font-family: Unbounded;
    font-weight: 500;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 2%;
    text-transform: uppercase;
  }
`;

export const WrapperInfoTextLogo = styled.div`
  width: 205px;
  height: 48px;
  display: flex;
  gap: 9px;
  align-items: center;
  @media (max-width: 1000px) {
    width: 176px;
    height: 44px;
  }
`;

export const LogoNotification = styled.img``;

export const TextNotification = styled.span`
  width: 128px;

  font-family: Unbounded;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  @media (max-width: 1000px) {
    width: 111px;
    font-family: Unbounded;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0%;
  }
`;
