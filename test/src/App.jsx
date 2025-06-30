import { useEffect, useRef, useState } from "react";

import "./App.css";

import {
  FirstBlock,
  SecondBlock,
  ThirtyBlock,
  Title,
  WrapperActivities,
} from "./styled";
import Card from "./components/Activities";
import { CurrencyProvider } from "./CurrencyContext";
import { AfterScrollNav } from "./components/AfterScrollPage";
import { Nav } from "./components/Nav";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activitiesRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#0e101a";

    return () => {
      document.documentElement.style.backgroundColor = ""; // Сбросить при размонтировании
    };
  }, []);

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
      <Nav isVisible={!isScrolled}></Nav>
      <AfterScrollNav isVisible={isScrolled} />
      <FirstBlock />
      <SecondBlock />
      <SecondBlock />
      <ThirtyBlock ref={activitiesRef}>
        <Title>activities</Title>
        <WrapperActivities></WrapperActivities>
        <WrapperActivities>
          <Card text={"subscribe to Fluence"} points={100} textButton={'Verify'} />
          <Card text={"subscribe to DePIN"} points={100} />
        </WrapperActivities>
        <WrapperActivities>
          <Card text={"be publish on CMC"} points={20} />
          <Card text={"like &bookmark our latest tweet"} points={100} />
        </WrapperActivities>
        <SecondBlock />
      </ThirtyBlock>
    </CurrencyProvider>
  );
}

export default App;
