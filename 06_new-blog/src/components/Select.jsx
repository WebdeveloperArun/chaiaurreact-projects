import React, { useId } from "react";

const Select = ({ label, options, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div>
        {label && (
          <label htmlFor={id} className="">
            {label}
          </label>
        )}
        <select {...props} id={id} ref={ref} className={`${className}`}>
          {options &&
            options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
        </select>
      </div>
    );
  }

export default React.forwardRef(Select);
