import React, { useState } from 'react';

const ButtonDefaultKalos = ({ textButton, width, height, primaryColor, secondaryColor, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const buttonStyle = {
    color: 'black',
    width,
    height,
    backgroundColor: isClicked ? secondaryColor : primaryColor,
    cursor: 'pointer',
    borderRadius: '20px',
    border: 'none'
  };

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button style={buttonStyle} onClick={handleButtonClick}>
      {textButton}
    </button>
  );
};

export default ButtonDefaultKalos;
