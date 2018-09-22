import React from "react";

export const Row = ({ fluid, name, children }) =>
  <div className={`row${fluid ? "-fluid" : ""} ${name ? name : ""}`}>
    {children}
  </div>;
