import React, { useEffect, useState, useContext } from 'react';
import Sidenav from '../components/sidenav';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import RightNav from '../components/RightNav';
import Recomendation from '../components/Recomendation';
import SpotifyWebApi from 'spotify-web-api-js';
import MusicPlayer from '../components/musicPlayer';

const Dashboard = () => {
  const [mood, setMood] = useState('romance');
  const [hits, setHits] = useState([]);

  const [itemsPlaylist, setItemsPlaylist] = useState([
    { track: { name: '', artists: [{ name: '' }], preview_url: '' } },
  ]);
  var spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(
    'BQD_3ILRZMd-hbX-9vOYQMeBPZKap4dtO7P-3PIB6SGVJxS4taXhi7_CrYJ8QKV5uIf4zXMHAD2LPDfTfXyDbJ63DtWpnECdtDsHDtVglB48DhZ0nM8CCLvZkvDPAdePXvXdA687AeSjuEljK6CIKkbwCtnySHfV7OBsT5c'
  );

  useEffect(() => {
    fetch('http://localhost:5000/' + mood).then(function (data) {
      const v = data.json();
      v.then(function (data1) {
        console.log(data1.message);
      });
    });
    spotifyApi.getCategoryPlaylists(mood).then(
      function (data) {
        //setHits(data.playlists.items);

        spotifyApi
          .getPlaylistTracks(data.playlists.items[0].id)
          .then(function (data) {
            setItemsPlaylist(data.items);
          });
      },
      function (err) {
        console.error(err);
      }
    );
  }, [mood]);

  return (
    <div className='bg-dark h-screen pr-80 flex pl-72 overflow-x-hidden'>
      <Sidenav name='1' />
      <div className='main mt-5 w-full'>
        <div className='headline flex justify-between w-full'>
          <div className='search flex bg-bglight py-2 px-5 rounded-full items-center w-72'>
            <AiOutlineSearch className='text-white mr-5' />
            <input
              placeholder='search'
              type='text'
              className='bg-transparent outline-none text-white w-full'
            />
          </div>

          {/* end */}
          <div className='user flex items-center mr-5'>
            <h1 className='text-white'>Yaksh Chopra</h1>
            <div className='user-icon'>
              <FaUserCircle className='text-white text-3xl ml-5' />
            </div>
          </div>
        </div>
        <hr className='opacity-20 mt-3'></hr>

        {/* mood selector */}
        <div className='mood px-10'>
          <h1 className='text-2xl text-white my-8'>Mood Selector</h1>
          <div className='boxes flex flex-wrap gap-5 justify-center align-middle'>
            <div
              onClick={() => setMood('rock')}
              className='box w-60 h-20 cursor-pointer items-center justify-center flex rounded-xl box-1'
            >
              <span className='text-white text-xl'>Energetic</span>
            </div>
            <div
              onClick={() => setMood('party')}
              className='box w-60 h-20 cursor-pointer items-center justify-center flex rounded-xl box-2'
            >
              <span className='text-white text-xl'>Cheerful</span>
            </div>
            <div
              onClick={() => setMood('chill')}
              className='box w-60 h-20 cursor-pointer items-center justify-center flex rounded-xl box-3'
            >
              <span className='text-white text-xl'>Chill</span>
            </div>
            <div
              onClick={() => setMood('romance')}
              className='box w-60 h-20 cursor-pointer items-center justify-center flex rounded-xl box-4'
            >
              <span className='text-white text-xl'>Romance</span>
            </div>
            <div className='box w-60 h-20 cursor-not-allowed items-center justify-center flex rounded-xl box-5'>
              <span className='text-white text-xl'>Angry</span>
            </div>
            <div className='box w-60 h-20 cursor-not-allowed items-center justify-center flex rounded-xl box-6'>
              <span className='text-white text-xl'>Lonely</span>
            </div>
          </div>
        </div>
        {/* mood selesctor end */}
        <div className='list px-10 mt-12'>
          <h1 className='text-2xl text-white my-8'>Recomendations</h1>
          <div className=''>
            {itemsPlaylist.slice(0, 5).map((item) => (
              <Recomendation
                name={item?.track?.name}
                singer={item.track.artists[0].name}
                link={item.track.preview_url}
                albumart={item?.track?.album?.images[0]}
              />
            ))}
          </div>
        </div>
      </div>
      <RightNav />
    </div>
  );
};

export default Dashboard;
