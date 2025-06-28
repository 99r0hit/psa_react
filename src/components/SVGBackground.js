import React from 'react';

const SVGBackground = () => {
  return (
    <div className="svg-background">
      <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <g id="wheat" className="crop wheat">
          <path d="M20 90 Q25 70 30 90 M25 80 Q30 60 35 80" fill="none" stroke="#D4A017" strokeWidth="2"/>
          <animateTransform attributeName="transform" type="translate" from="0 10" to="0 -10" dur="5s" repeatCount="indefinite" additive="sum"/>
          <animate attributeName="opacity" from="0.3" to="0.7" dur="5s" repeatCount="indefinite"/>
        </g>
        <g id="corn" className="crop corn">
          <path d="M80 85 Q85 65 90 85 L85 75 Q90 55 95 75" fill="#FFC107" opacity="0.5"/>
          <animateTransform attributeName="transform" type="scale" from="0.9" to="1.1" dur="4s" repeatCount="indefinite" additive="sum"/>
        </g>
        <g id="rice" className="crop rice">
          <path d="M150 90 Q155 70 160 90 M155 80 Q160 60 165 80" fill="none" stroke="#81C784" strokeWidth="2"/>
          <animateTransform attributeName="transform" type="translate" from="0 5" to="0 -5" dur="6s" repeatCount="indefinite" additive="sum"/>
        </g>
        <use href="#wheat" x="200" />
        <use href="#corn" x="250" />
        <use href="#rice" x="300" />
        <use href="#wheat" x="400" />
        <use href="#corn" x="450" />
        <use href="#rice" x="600" />
        <use href="#wheat" x="750" />
        <use href="#corn" x="900" />
        <use href="#rice" x="1050" />
      </svg>
    </div>
  );
};

export default SVGBackground;
