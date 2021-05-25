import React, { useState } from 'react';
import { AiFillHeart, AiFillPlayCircle } from 'react-icons/ai';
import { useStateValue } from '../store/stateProvider';

const Recomendation = (props) => {
  const [like, setLike] = useState(false);
  const [song, setSong] = useState(false);

  const [{ playingNow, singer, name, image }, dispatch] = useStateValue();

  const handleSong = (link, singer, image, name) => {
    dispatch({
      type: 'SET_PLAYING',
      playingNow: link,
      singer: singer,
      image: image,
      name: name,
    });
  };

  return (
    <div className='flex bg-bglight rounded-xl mt-5  justify-between items-center px-10 py-4'>
      <div className='flex items-center'>
        <AiFillHeart
          onClick={() => setLike(!like)}
          className={
            like
              ? 'text-xl text-purpleselected cursor-pointer'
              : 'text-xl text-white cursor-pointer'
          }
        />
        <span className='text-white text-lg ml-5 w-64'>{props.name}</span>
      </div>

      <span className='text-white text-sm w-56'>{props.singer}</span>

      <AiFillPlayCircle
        onClick={() =>
          handleSong(props.link, props.singer, props.albumart, props.name)
        }
        className='text-3xl cursor-pointer text-primary'
      />
    </div>
  );
};

export default Recomendation;
