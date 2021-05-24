import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useStateValue } from '../store/stateProvider';

const RecentlyPlayed = (props) => {
  return (
    <div className='flex bg-bglight rounded-xl mt-5 text-white justify-between items-center px-5 py-3'>
      <div className='flex items-center'>
        <span className='text-white text-md'>{props.name}</span>
      </div>
      <div>
        <button>
          <AiFillPlayCircle className='text-3xl cursor-pointer text-primary' />
        </button>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
