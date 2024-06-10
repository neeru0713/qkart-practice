import { React, useState } from "react";
import { IoMdColorFill } from "react-icons/io";

const Button = ({ name, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  let hoveredStyles;
  let styles;
  if (type === "primary") {
    styles = {
      color: "white",
      background: "#01a278",
    };
    if(type === "primary"){
     hoveredStyles = {
        background: "#1f9374",
        color: "white",
     } 
    }
  } else if ((type = "secondary")) {
    styles = {
      color: "#01a278",
      background: "white",
    };
    hoveredStyles = {
        background: "#d5e8e3",
        color: "#01a278",
     } 
  }

  return (
    <button className="button  rounded-lg px-3 py-2"  style={isHovered ? hoveredStyles : styles}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      {name}
    </button>
  );
};

export default Button;
