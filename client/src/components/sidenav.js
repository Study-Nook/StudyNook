import React from 'react';
import logo_small from '../assets/logo_small.png';
import { AiFillHeart, AiFillHome } from 'react-icons/ai';
import { IoDiscOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import Sidenavitem from './sidenavitem';
const Sidenav = (props) => {
  return (
    <div className='h-screen py-4 fixed left-0'>
      <div className='h-full mx-4 rounded-xl bg-bglight w-64'>
        <img className='h-28 mx-14' src={logo_small} alt='Logo' />
        <div className='my-14 '>
          <Sidenavitem
            name='Home'
            icon={AiFillHome}
            selected={props.name === '1' ? true : false}
          />
          <Sidenavitem
            name='Explore'
            icon={IoDiscOutline}
            selected={props.name === '2' ? true : false}
          />
          <Sidenavitem
            name='Liked'
            icon={AiFillHeart}
            selected={props.name === '3' ? true : false}
          />
          <Sidenavitem
            name='Profile'
            icon={CgProfile}
            selected={props.name === '4' ? true : false}
          />
        </div>
        <div className='flex w-48 h-16 rounded-xl text-white  justify-between items-center bg-bgselected  mt-48 mx-7 px-8 cursor-pointer'>
          <BiLogOut className=' text-3xl  text-white '></BiLogOut>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
