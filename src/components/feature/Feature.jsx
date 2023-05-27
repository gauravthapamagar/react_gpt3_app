import React from 'react';
import './feature.css';
//props stands for properties.
//props are arguments passed into the react components via html attributes
//react props are like function arguments in js and attributes in html

const Feature = ({title,text}) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div/>
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
