import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 1440px;
  height: 70px;
  display: flex;
  z-index: 100;
  justify-content: center;
  background: transparent;
  align-items: center;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(-100%)"};

  @media (max-width: 1000px) {
    width: 100vw; // Устанавливаем ширину в 100% от родительского элемента
    height: auto; // При необходимости, высота может быть изменена
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

export const Wrapper = styled.div`
  box-sizing: border-box;
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

export const Logo = styled.img``;

export const WrapperText = styled.div`
  width: 385px;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Text = styled.span`
  height: 12px;

  font-family: Unbounded;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 2%;
  text-transform: uppercase;
  color: #ffffff;
`;

export const CloseText = styled.span`
  font-family: Unbounded;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 2%;
  text-transform: uppercase;
  color: #636a95;
`;

export const WrapperTag = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
  gap: 5px;
`;

export const Tag = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 18px;
  gap: 10px;
  border-radius: 999px;
  padding: 5px;
  background: #f3a95333;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Unbounded;
  font-weight: 500;
  font-size: 8px;
  line-height: 100%;
  letter-spacing: 2%;
  text-transform: uppercase;
  color: #f3a953;
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
