import React, { useState, useEffect, useRef } from "react";

import "./Accordion.css";
import plusIcon from "./plus.svg";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";

const Accordion = (props) => {
  // props.children contains the accordion content
  const { title, children, subAccordion = false, availability = false } = props;

  const [active, setActive] = useState(subAccordion);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className={`accordion-section ${subAccordion && "no-margin"}`}>
      <div className="accordion__header">
        <h2 className="accordion__title">{title.toUpperCase()}</h2>
        <div className="accordion__actions">
          <span className="availability-text">Availability</span>
          <div className="accordion__button">
            <ToggleSwitch checked={availability} />
          </div>
          <div className="toggle-icon" onClick={toggleActive}>
            {active ? (
              <div className="minus-icon"></div>
            ) : (
              <img
              className="plus-icon"
                src={plusIcon}
                alt="Toggle icon"
              />
            )}
          </div>
        </div>
      </div>

      <div ref={contentRef} className="accordion__content">
        <div
          className={`accordion__text ${!subAccordion ? "no-padding" : ""} `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
