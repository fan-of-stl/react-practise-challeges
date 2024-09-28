import React, { useState } from "react";
import styled from "styled-components";

const TimerOrStopWatch = () => {
  const [second, setSecond] = useState(0);
  const handleStart = () => {
    window.myTimer = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(window.myTimer);
  };

  const handleReset = () => {
    clearInterval(window.myTimer);
    setSecond(0);
  };

  return (
    <TimerWrapper>
      <DisplayContainer className="main-container stopwatch">
        <div className="minutes">{Math.floor(second / 60)} Minutes</div>
        <div className="seconds">{second % 60} Seconds</div>
      </DisplayContainer>

      <div className="button-container">
        <StartButton type="button" onClick={handleStart}>
          Start
        </StartButton>
        <StopButton type="button" onClick={handleStop}>
          Stop
        </StopButton>
        <ResetButton type="button" onClick={handleReset}>
          Reset
        </ResetButton>
      </div>
    </TimerWrapper>
  );
};

export default TimerOrStopWatch;

const TimerWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  border-radius: 0 .25rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;


const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-align: center;
  margin: auto;
  padding: 2%;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px double #000;
  border-radius: .25rem;
  font-weight: bold;
`;
const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;

const StartButton = styled(Button)`
  color: #187df0;
  border-color: #187df0;
`;

const StopButton = styled(Button)`
  color: #f17a7a;
  border-color: #f17a7a;
`;

const ResetButton = styled(Button)`
  color: #2bf56e;
  border-color: #2bf56e;
  &hover {
    color: #43dd76;
    border-color: #43dd76;
  }
`;
