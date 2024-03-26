import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex(index + 1);
      } else {
        clearInterval(interval);
      }
    }, 60); // Adjust typing speed here (milliseconds)

    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <span className="text-[#FEB12F]">{displayText}</span>
  );
};

export default TypingAnimation;
