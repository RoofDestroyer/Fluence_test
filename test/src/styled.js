import styled, { css } from "styled-components";

export const MainBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FirstBlock = styled.div`
  width: 1000px;
  height: 188px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%; // Устанавливаем ширину в 100% от родительского элемента
    height: auto; // При необходимости, высота может быть изменена
    margin-top: 80px; // Пример изменения отступов
  }
`;

export const MainLogo = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 100px;
`;

export const BigTitle = styled.span`
  width: 943px;
  height: 150px;
  font-family: Unbounded;
  font-weight: 600;
  font-size: 70px;
  line-height: 75px;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;
  @media (max-width: 1000px) {
    width: 100%; // Устанавливаем ширину в 100% от родительского элемента
    height: auto; // При необходимости, высота может быть изменена
    font-family: Unbounded;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
  }
`;

export const SmallTitle = styled.span`
  width: 441px;
  height: 28px;
  font-family: Unbounded;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;
  margin-top: 10px;
  @media (max-width: 1000px) {
    width: 100%; // Устанавливаем ширину в 100% от родительского элемента
    height: auto; // При необходимости, высота может быть изменена
    font-family: Unbounded;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0%;
    text-align: center;
  }
`;

export const SecondBlock = styled.div`
  box-sizing: border-box;
  width: 1000px;
  height: 400px;
  margin-top: 90px;

  border-radius: 20px;

  display: flex;
  gap: 20px;
  @media (max-width: 1000px) {
    width: 100%;
    height: 595px;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const LeftWrapperSecondBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1000px) {
    width: 345px;
    height: 250px;
  }
`;

export const RightWrapperSecondBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1000px) {
    width: 345px;
    height: 250px;
  }
`;

export const StatsBlock = styled.div`
  box-sizing: border-box;
  border-radius: 20px;

  border: 1px solid #6b728033;
  background: #191c2c;
  display: flex;
  flex-direction: column;

  width: 490px;
  height: 348px;
  gap: 50px;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-left: 20px;

  @media (max-width: 1000px) {
    width: 345px;
    height: 206px;
    gap: 15px;
    padding-top: 30px;
    padding-right: 15px;
    padding-bottom: 30px;
    padding-left: 15px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const TitleSecondBlock = styled.span`
  width: 490px;
  height: 29px;

  font-family: Unbounded;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -1%;
  color: #ffffff;
  @media (max-width: 1000px) {
    font-family: Unbounded;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -1%;
    width: 300px;
  }
`;

export const WrapperInfoStats = styled.div`
  width: 204px;
  height: 56px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 1000px) {
    width: 149px;
    height: 53px;
    align-items: start;
  }
`;

export const TextInfoStats = styled.span`
  width: 200px;
  font-family: Unbounded;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 2%;
  vertical-align: middle;
  text-transform: uppercase;
  color: #636a95;
  @media (max-width: 1000px) {
    width: 170px;
  }
`;

export const NumberInfoStats = styled.span`
  font-family: Unbounded;
  font-weight: 400;
  font-size: 36px;
  leading-trim: Cap height;
  line-height: 100%;
  letter-spacing: -1%;
  color: #ffffff;
  @media (max-width: 1000px) {
    font-family: Unbounded;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -1%;
    text-align: center;
  }
`;

export const ActiveBoostsBlock = styled.div`
  box-sizing: border-box;
  border-radius: 20px;

  border: 1px solid #6b728033;
  background: #191c2c;

  display: flex;
  flex-direction: column;

  width: 490px;
  height: 351px;
  gap: 15px;

  padding: 20px;
  @media (max-width: 1000px) {
    width: 345px;
    height: 257px;
    gap: 10px;
    padding: 15px;
  }
`;

export const WrapperActiveBoostsInfo = styled.div`
  box-sizing: border-box;
  width: 450px;
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 20px;
  background: #30334899;
  border: 1px solid #6b72801a;
  @media (max-width: 1000px) {
    width: 315px;
    height: 69px;
    /* gap: 74px; */
    border-radius: 15px;
    padding: 15px;
    border-width: 1px;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const LogoActiveBosstsInfo = styled.img``;

export const WrapperTextActiveBoostsInfo = styled.div`
  width: 300px;
  height: 33px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 1000px) {
    width: 170px;
    height: 39px;
    justify-content: space-around;
  }
`;

export const TitleActiveBoostsInfo = styled.span`
  font-family: Unbounded;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  @media (max-width: 1000px) {
  }
`;

export const TextActiveBoostsInfo = styled.span`
  font-family: Hauora;
  font-weight: 600;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 0%;
  opacity: 0.6;

  color: #ffffff;
  @media (max-width: 1000px) {
    width: 200px;
  }
`;

export const NumberActiveBoostsInfo = styled.span`
  font-family: Unbounded;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.6%;
  vertical-align: bottom;
  color: #aafe97;
`;

export const ThirtyBlock = styled.div`
  box-sizing: border-box;
  width: 1000px;
  height: 975px;

  margin-top: 45px;

  @media (max-width: 1000px) {
    width: 100%;
    height: 1196px;
    /* gap: 20px; */
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.span`
  font-family: Unbounded;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -1%;
  color: #ffffff;
  @media (max-width: 1000px) {
    font-family: Unbounded;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -1%;
  }
`;

export const WrapperActivities = styled.div`
  box-sizing: border-box;
  width: 1000px;
  height: 186px;
  gap: 20px;
  border-radius: 20px;
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  border-width: 1px;
  background: #191c2c;
  border: 1px solid #6b728033;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 345px;
    height: auto;
    gap: 20px;
    border-radius: 20px;
    padding: 15px;
    border-width: 1px;
  }
`;

export const WrapperLogoTextActivities = styled.div`
  width: 200px;
  height: 24px;
  gap: 10px;
  display: flex;
  align-items: center;
`;

export const LogoActivities = styled.img``;

export const TitleLogoActivities = styled.span`
  font-family: Unbounded;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 2%;
  vertical-align: middle;

  color: #ffffff;
`;

export const BigCardActivities = styled.div`
  box-sizing: border-box;
  width: 960px;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  padding-top: 18px;
  padding-right: 20px;
  padding-bottom: 18px;
  padding-left: 20px;
  border-width: 1px;

  background: #1f293766;
  border: 1px solid #6b72801a;
  @media (max-width: 1000px) {
    width: 315px;
    height: 100px;
    padding: 15px;
    align-items: flex-end;
  }
`;

export const WrapperTextBigCardActivities = styled.div`
  width: 360px;
  height: 34px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 1000px) {
    width: 315px;
    height: auto;
  }
`;

export const TitleBigCardActivities = styled.span`
  font-family: Unbounded;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  @media (max-width: 1000px) {
    width: 220px;
    font-family: Unbounded;

    line-height: 140%;
  }
`;

export const TextBigCardActivities = styled.span`
  font-family: Unbounded;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: grey;
`;

export const SoonBigCardActivities = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 134px;
  height: 32px;
  gap: 10px;
  border-radius: 999px;
  padding: 10px;
  background: #f3a95333;

  font-family: Unbounded;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 2%;
  text-transform: uppercase;

  color: #f3a953;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SoonMediaBigCardActivities = styled.div`
  display: none;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 61px;
    height: 30px;
    gap: 10px;
    border-radius: 999px;
    padding: 10px;

    background: #f3a95333;

    font-family: Unbounded;
    font-weight: 500;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 2%;
    text-transform: uppercase;

    color: #f3a953;
  }
`;

export const WrapperActivitiesCard = styled.div`
  width: 960px;
  height: 82px;
  display: flex;
  gap: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    width: 315px;
    gap: 20px;
  }
`;

export const WrapperActivitiesMiddleSize = styled.div`
  box-sizing: border-box;
  width: 1000px;
  height: 288px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 12px;
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  background: #191c2c;
  border: 1px solid #6b728033;
  margin-top: 20px;
  @media (max-width: 1000px) {
    width: 345px;
    height: 464px;
    gap: 20px;
    border-radius: 20px;
    padding: 15px;
  }
`;

export const CardActivities = styled.div`
  box-sizing: border-box;
  width: 470px;
  height: 82px;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  padding: 20px;
  background: #30334899;
  border: 1px solid #6b72801a;
  @media (max-width: 1000px) {
    width: 315px;
    height: auto;
    gap: 10px;
    padding: 15px;
  }
`;

export const WrappertTextInfoLogo = styled.div`
  width: 100;
  height: 17.999998092651367;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const WrapperNubmerVectorLogo = styled.div`
  width: 64px;
  height: 42px;
  gap: 20px;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    justify-content: space-between;
    height: auto;
  }
`;

export const NumberCard = styled.div`
  font-family: Unbounded;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.6%;
  text-align: right;
  vertical-align: bottom;
  color: #ffffff;
`;

export const Vector = styled.img``;

export const Footer = styled.div`
  box-sizing: border-box;
  width: 1001px;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 268px;
  margin-bottom: 36px;
  margin-top: 50px;
  @media (max-width: 1000px) {
    width: 360px;
    height: 144px;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0px;
    position: relative;
    margin-bottom: 30px;
    margin-top: 40px;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const LogoFluence = styled.img``;

export const WrapperTextFooter = styled.div`
  width: 244px;
  height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    position: absolute;
    top: 50px;
    left: calc(375px - 50% - 122px);
  }
`;

export const TextFooter = styled.span`
  font-family: Hauora;
  font-weight: 800;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 2%;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.7;
  @media (max-width: 1000px) {
    padding-bottom: 7px;
  }
`;
