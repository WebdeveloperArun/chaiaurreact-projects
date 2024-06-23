import React, {useId} from 'react'

const Input = React.forwardRef( Input = ({
    type = "text",
    label,
    className = '',
    ...props
}, ref ) => {
    const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className='inline-block mb-1 pl-1'>{label}</label>}
      <input type={type} className={`${className}`} {...props} ref={ref} id={id} />
    </div>
  )
})

export default Input
