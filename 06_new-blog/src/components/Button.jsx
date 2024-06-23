import React from 'react'

const Button = ({
    children,
    bgColor = 'bg-blue-600',
    className = '',
    type = 'button',
    textColor = 'text-white',
    ...props
}) => {
  return (
    <button className={`${bgColor} ${textColor} ${className} px-4 py-2 rounded-lg`} {...props} >{children}</button>
  )
}

export default Button
