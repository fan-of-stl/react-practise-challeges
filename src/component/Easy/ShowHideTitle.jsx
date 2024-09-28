import React, { useState } from "react";
import styled from "styled-components";

const ShowHideTitle = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => setIsVisible(!isVisible);
  return (
    <div>
      {isVisible && <h1>This is toggelable title.</h1>}

      <ToggleButton onClick={handleToggle}>Toggle Title</ToggleButton>
    </div>
  );
};

export default ShowHideTitle;

const TitleWrapper = styled.div`
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`

const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;

const ToggleButton = styled(Button)`
  color: #187df0;
  border-color: #187df0;
`;