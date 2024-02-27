import clsx from "clsx";
import React from "react";

const Button = ({ green, greenText, black, className, children, ...rest }) => {
  return (
    <button
      className={clsx(
        "rounded-[5px] border-[2px] border-solid min-h-[52px] px-7 text-lg sm:text-[25px]",
        black && "border-[#151515] text-[#151515]",
        green && "border-[#ceff09] ",
        green ? (greenText ? "text-[#C8FF29]" : "text-[#D9D9D9]") : "",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
