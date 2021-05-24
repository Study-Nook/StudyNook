import React from 'react';
import MusicPlayer from './musicPlayer';
import RecentlyPlayed from './RecentlyPlayed';

const RightNav = () => {
  return (
    <div className='h-screen w-80 px-6 border-l right-0 fixed  border-gray-700'>
      <h1 className='text-xl text-white mt-8'>Recently Played</h1>
      <RecentlyPlayed name='Lorem Ipsum' link='abc' />
      <RecentlyPlayed name='Lorem Ipsum' link='abc' />

      <h1 className='text-xl text-white mt-8'>Playing Now</h1>
      <MusicPlayer />
    </div>
  );
};

export default RightNav;
