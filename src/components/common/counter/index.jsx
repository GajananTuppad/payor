'use client'
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const CountUpContent = ({ number, text, add_style = true }) => {
  const [focus, setFocus] = useState(false);
  const visibleChangeHandler = (isVisible) => {
    if (isVisible) {
      if (!focus) {
        setFocus(true);
      }
    }
  };
  return (
    <>
      <CountUp start={focus ? 0 : null} end={number} duration={5}>
        {({ countUpRef }) => (
          <div className={`d-flex ${add_style ? 'align-items-end justify-content-end' : ''}`}>
            <span ref={countUpRef} />
            <InView
              as="span"
              onChange={(inView) =>
                visibleChangeHandler(inView)
              }
            >

              {text && <span className="text">{text}</span>}

            </InView>
          </div>
        )}
      </CountUp>
    </>
  );
};

export default CountUpContent;