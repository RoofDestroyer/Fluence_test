import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, #0e101a, #0e101a);
  align-items: center;
  border-bottom: 1px solid #ffffff26;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(-100%)"};
  @media (max-width: 1000px) {
    width: 100vw; // Устанавливаем ширину в 100% от родительского элемента
    height: 70px; // При необходимости, высота может быть изменена
  }
`;

export const Wrapper = styled.div`
  width: 1000px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%; // Устанавливаем ширину в 100% от родительского элемента
    height: auto; // При необходимости, высота может быть изменена
    height: 42px;
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const Logo = styled.img`
  animation: ${(props) => (props.animate ? "pulse 3s infinite" : "none")};
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    7% {
      transform: scale(0.8);
    }
    14% {
      transform: scale(1.2);
    }
    21% {
      transform: scale(0.8);
    }
    28% {
      transform: scale(1.2);
    }
    35% {
      transform: scale(0.8);
    }
    42% {
      transform: scale(1.2);
    }
  }
  @media (max-width: 1000px) {
    width: 32px;
  }
`;

export const RightWrapper = styled.div`
  width: 247px;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const Text = styled.span`
  font-family: Unbounded;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 2%;
  vertical-align: middle;
  text-transform: uppercase;
  color: #636a95;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const TextMedua = styled.span`
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    color: #636a95;
    font-family: Unbounded;
    font-weight: 500;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 2%;
    vertical-align: middle;
    text-transform: uppercase;

    flex-direction: column-reverse;
    gap: 5px;
  }
`;

export const TextCount = styled.span`
  font-family: Unbounded;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 2%;
  vertical-align: middle;
  text-transform: uppercase;
  color: #ffffff;
  @media (max-width: 1000px) {
    font-family: Unbounded;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 2%;
    vertical-align: middle;
  }
`;

export const Wallet = styled.div`
  box-sizing: border-box;
  width: 133px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 9px;
  left: 1087px;
  border-radius: 10px;
  padding-right: 20px;
  padding-left: 20px;
  background: var(--Social, #0d1531);

  font-family: Unbounded;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 2%;
  text-transform: uppercase;
  color: #2d68ff;
  @media (max-width: 1000px) {
    width: 115px;
  }
`;

export const MenuLogo = styled.img`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const WrapperWalletMenu = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: flex;

    gap: 10px;
  }
`;
