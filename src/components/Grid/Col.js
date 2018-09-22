import React from "react";

export const Col = ({ size, name, children }) =>
  <div className={`${size.split(" ").map(size => "col-" + size).join(" ")} ${name ? name : ""}`}>
    {children}
  </div>;
