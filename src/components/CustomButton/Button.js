import React from "react";
import Styles from "../../style/Button.module.css";

const Button = (props) => {
  const {
    text,
    clickedFunc,
    status,
    color,
    hoverColor,
    textColor,
    hoverTextColor,
    width,
    height,
    padding,
    fontStyle
  } = props;

  const buttonClass = `${Styles.custom_btn} ${
    status === "white" ? Styles.white_button : ""
  }`;

  const buttonStyle = {
    backgroundColor: status === "white" ? "white" : color,
    color: status === "white" ? color : textColor,
    border: "2px solid #1d6ae5",
    // width: width || "auto",       
    height: height || "auto",     
    // padding: padding || "",   
    // fontSize:fontStyle || "16px"
  }

  const hoverStyle = {
    backgroundColor: hoverColor,
    color: hoverTextColor,
  };

  return (
    <div className="ml-2">
      <a
        className={buttonClass}
        style={buttonStyle}
        onClick={clickedFunc}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
          e.currentTarget.style.color = hoverStyle.color;
          e.currentTarget.style.borderColor = hoverStyle.borderColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
          e.currentTarget.style.color = buttonStyle.color;
          e.currentTarget.style.borderColor = buttonStyle.borderColor;
        }}
      >
        {text}
        <span className={Styles.right_arrow} />
      </a>
    </div>
  );
};

export default Button;
