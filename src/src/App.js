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

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 500px; /* Prevents it from getting too wide */
  width: 90%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px; /* Prevents the image from being too tall */
  object-fit: cover; /* Ensures it scales properly without stretching */
  border-radius: 15px;
`;

const App = () => {
  const [showImage, setShowImage] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <Container>
      {showImage && <Confetti width={width} height={height} />}
      <h1>Happy Valentine's Day, My Love! ❤️</h1>
      <Heart>💖💘💝</Heart>
      <p>I made this just for you! Click the button below for a surprise.</p>
      <Button onClick={() => setShowImage(true)}>Click Me 💕</Button>

      {showImage && (
        <Card>
          <Image src={`${process.env.PUBLIC_URL}/us.jpg`} alt="Us Together" />
        </Card>
      )}
    </Container>
  );
};

export default App;
