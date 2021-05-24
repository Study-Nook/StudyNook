import React from 'react';
import { IconType } from 'react-icons/lib';
const Sidenavitem = (props) => {
  const Icon = props.icon;
  return (
    <div
      className={
        'h-16 w-64 flex mt-3 ml-4 rounded-xl text-white justify-between items-center px-6 py-2 cursor-pointer' +
        (props.selected ? ' bg-bgselected' : ' ')
      }
    >
      <Icon className=' text-3xl  text-white ' />
      <span className='w-14 -ml-16'>{props.name}</span>
      <div
        className={
          'w-2 h-10 inset-y-0 right-0 ' +
          (props.selected ? 'bg-purpleselected' : ' ')
        }
      ></div>
    </div>
  );
};

export default Sidenavitem;
