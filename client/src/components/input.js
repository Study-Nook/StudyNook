import React from 'react';

const Input = (props) => {
  return (
    <div>
      <input
        className='bg-input rounded-xl px-3 py-3 w-full mt-6 text-white  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
        placeholder={props.title}
        type={props.type}
        required
      />
    </div>
  );
};

export default Input;
