import React, { useState, useRef, useEffect, useContext } from 'react';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';

import SpotifyWebApi from 'spotify-web-api-js';

const MusicPlayer = () => {
  const [url_song, setUrlSong] = useState('');

  const song = [
    {
      url: '',
      image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      name: 'First Song',
      author: 'First',
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [recents, setRecents] = useState(song);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const audioRef = useRef(new Audio(song[trackIndex].url));
  const intervalRef = useRef(0);
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage =
    duration < 100 ? `${(trackProgress / duration) * 100}%` : '0%';

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    });
  };

  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(song.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < song.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(song[trackIndex].url);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
    setRecents([...recents, song[trackIndex]]);
  }, [trackIndex]);

  return (
    <div className='bg-bglight h-80 w-full rounded-xl mt-5 p-2'>
      <div className='image bg-dark h-1/2 w-full rounded-xl overflow-hidden'>
        <img
          src='https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
          alt='song_thumbnail'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='px-2'>
        <h1 className='text-white mt-4 text-lg'>{song[trackIndex].name}</h1>
        <p className='text-sm mt-1 text-white'>{song[trackIndex].author}</p>
        <div className='playerContainer mt-0'>
          <input
            type='range'
            value={trackProgress}
            step='1'
            min='0'
            max={duration ? duration : `${duration}`}
            className='slider h-1 p-0 w-full'
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
          />

          <div className='actions text-white flex text-3xl justify-center gap-6 my-5'>
            <MdSkipPrevious
              className='cursor-pointer'
              onClick={() => toPrevTrack()}
            />
            {isPlaying ? (
              <AiFillPauseCircle
                onClick={() => setIsPlaying(false)}
                className='text-primary text-4xl cursor-pointer'
              />
            ) : (
              <AiFillPlayCircle
                onClick={() => setIsPlaying(true)}
                className='text-primary text-4xl cursor-pointer'
              />
            )}

            <MdSkipNext
              onClick={() => toNextTrack()}
              className='cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
