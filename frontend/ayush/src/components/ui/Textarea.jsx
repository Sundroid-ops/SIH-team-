// src/components/ui/Textarea.jsx
import React from 'react';

export const Textarea = ({ value, onChange, placeholder, className, ...props }) => {
  return (
    <textarea
      className={`w-full p-2 border rounded ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};