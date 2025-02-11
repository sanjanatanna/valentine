import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const Container = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #ff9a9e, #fecfef);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: white;
  overflow: hidden;
  position: relative;
`;

const Heart = styled.div`
  font-size: 50px;
  animation: ${pulse} 1s infinite;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.5rem;
  color: #ff69b4;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;

  &:hover {
    background-color: #ff69b4;
    color: white;
  }
`;

const LoveLetter = styled.div`
  background: white;
  color: #ff69b4;
  padding: 20px;
  border-radius: 12px;
  max-width: 400px;
  margin-top: 20px;
  box-shadow: 0px 0px 15px rgba(255, 105, 180, 0.3);
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-20px)")};
  transition: all 0.5s ease-in-out;
`;

function App() {
  const [showLetter, setShowLetter] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <Container>
      {showLetter && <Confetti width={width} height={height} />}
      <h1>Happy Valentine's Day, My Love! ❤️</h1>
      <Heart>💖💘💝</Heart>
      <p>I made this just for you! Click the button below for a surprise.</p>
      <Button onClick={() => setShowLetter(true)}>Click Me 💕</Button>

      <LoveLetter show={showLetter}>
        <h2>Dear Love,</h2>
        <p>
          You make my world brighter every day! Thank you for being my happiness,
          my comfort, and my best friend. I love you more than words can say! 💖
        </p>
      </LoveLetter>
    </Container>
  );
}

export default App;
