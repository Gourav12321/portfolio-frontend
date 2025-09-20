// Card.jsx
import React, { useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';


const Card = ({ heading, detail }) => {
  const cardRef = useRef(null);
  useIntersectionObserver(cardRef);

  return (
    <div ref={cardRef} className="card">
      <h3>{heading}</h3>
      <p>{detail}</p>
    </div>
  );
};

export default Card;
