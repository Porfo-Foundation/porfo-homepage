import React, { useEffect, useRef } from "react";

function OutsideListener({ func, children }) {
  function useOutsideAlerter(ref, func) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          func();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, func);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideListener;
