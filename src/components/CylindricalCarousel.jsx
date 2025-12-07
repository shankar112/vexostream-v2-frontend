import React, { useState, useEffect } from 'react';
import './CylindricalCarousel.css';

const CylindricalCarousel = ({ items }) => {
  const [angle, setAngle] = useState(0);

  const handleScroll = (e) => {
    const delta = Math.sign(e.deltaY);
    setAngle(angle + delta * 20);
  };

  return (
    <div className="carousel-container" onWheel={handleScroll}>
      <div className="carousel" style={{ transform: `rotateY(${angle}deg)` }}>
        {items.map((item, index) => (
          <div
            className="carousel-item"
            key={item.id}
            style={{
              transform: `rotateY(${index * (360 / items.length)}deg) translateZ(300px)`,
            }}
          >
            <img src={item.imageUrl} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CylindricalCarousel;
