import React from "react";

const Title = ({ title }) => {
  return (
    <div className="section-title section-center">
      <h2>{title || "default title"}</h2>
    </div>
  )
}

export default Title;
