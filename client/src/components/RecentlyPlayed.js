import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useStateValue } from '../store/stateProvider';

const RecentlyPlayed = (props) => {
  const [allstate, dispatch] = useStateValue();

  // const handleSong = () => {
  //   dispatch({
  //     type: 'SET_PLAYING',
  //     playingNow: 'abc',
  //   });
  // };

  // handleSong();
  console.log(allstate);

  return (
    <div className='flex bg-bglight rounded-xl mt-5 text-white justify-between items-center px-5 py-3'>
      <div className='flex items-center'>
        <span className='text-white text-md'>{props.name}</span>
      </div>

      <a href={props.link}>
        <AiFillPlayCircle className='text-3xl cursor-pointer text-primary' />
      </a>
    </div>
  );
};

export default RecentlyPlayed;
