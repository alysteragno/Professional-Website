'use client';
import React from 'react';

type Props = {
    id: string;
    placeholder: string;
    className?: string;
    required?: boolean;
    minLength?: number;
    pattern?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const ContactInput = React.forwardRef<HTMLInputElement, Props>(
  ({ id, 
     placeholder, 
     className, 
     required, 
     minLength, 
     pattern, 
...rest }, ref) => (
    <input
      ref={ref}
      id={id}
      name={rest.name}
      type="text"
      placeholder={placeholder}
      className={`border-2 border-[#8892B0] rounded-md p-3 mb-4 focus:outline-none focus:ring-1 focus:ring-white-500 resize-none ${className || ''}`}
      required={required}
      minLength={minLength}
      pattern={pattern}
      autoComplete="on"
      {...rest}
    />
  )
);

ContactInput.displayName = 'ContactInput';
export default ContactInput;
