import React, { Children, cloneElement } from 'react';
import './Step.css';

// check for last child and then remove the connecting line

export default function Steps({ currentStep, setStep, ...props }) {
  const arrayChildren = Children.toArray(props.children);
  return (
    <div
      className="step-container"
      onClick={(e) => {
        console.log('Click registering', currentStep >= Number(e.target.id));
        if (Number(e.target.id) && currentStep >= Number(e.target.id))
          setStep(Number(e.target.id));
      }}
    >
      {Children.map(arrayChildren, (child, index) => {
        const isFirst = index === 0;
        const isLast = index === arrayChildren.length - 1;
        const isCurrent = index + 1 <= currentStep;

        return (
          <>
            {cloneElement(child, {
              index: index,
              isCurrent: isCurrent,
              isFirst: isFirst,
              isLast: isLast,
            })}
          </>
        );
      })}
    </div>
  );
}

export function Step({ title, index, isFirst, isLast, isCurrent }) {
  return (
    <>
      {!isFirst && (
        <div className={`prev-line ${isCurrent ? 'color' : 'plain'}`}></div>
      )}
      <div
        id={index + 1}
        className={`step-number ${isCurrent ? 'color' : 'plain-step plain'}`}
      >
        {title}
      </div>
      {!isLast && (
        <div className={`next-line ${isCurrent ? 'color' : 'plain'}`}></div>
      )}
    </>
  );
}
