import React from 'react';

function Button({ action, children = 'Click', tailwindClasses }) {
  return (
    <button type="button" className={`p-4 bg-white text-black rounded w-1/2 ${tailwindClasses}`} onClick={action}>
      {children}
    </button>
  );
}

export default Button;
