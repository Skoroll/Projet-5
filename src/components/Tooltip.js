import React, { useState } from 'react';
import '../styles/Tooltip.scss';

const Tooltip = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="tooltip-container" 
      onMouseEnter={() => setIsVisible(true)} 
      onMouseLeave={() => setIsVisible(false)}
    >
      <p className="truncated-text">{text}</p>
      {isVisible && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
