import React, { useState } from "react";
import styled from "styled-components";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();

    e.target.value <= 100 && e.target.value >= 0 && setWidth(e.target.value);
  };
  return (
    <PorgressBarWrapper>
      <ProgressBarContainer>
        <Bar width={width}>{width}%</Bar>
      </ProgressBarContainer>

      <ProgressFormWarpper>
        <InputLabel>Enter width:</InputLabel>
        <InputField
          type="number"
          placeholder="Enter progress bar size"
          onChange={handleChange}
        />
      </ProgressFormWarpper>
    </PorgressBarWrapper>
  );
};

export default ProgressBar;

const PorgressBarWrapper = styled.div`
  padding: 1%;
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 0 .25rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;
const ProgressBarContainer = styled.div`
  background: white;
  padding: 0.25%;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Bar = styled.div`
  background: #1b78e4;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.width <= 5 ? "#000" : "#fff")};
  width: ${(props) => props.width}%;
  text-align: center;
  border-radius: 1rem;
`;

const InputField = styled.input`
  padding: 1%;
  width: 40%;
  border-radius: 0.25rem;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 1rem;
  font-weight: bold;
`;

const ProgressFormWarpper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const InputLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  line-height: normal;
`;
