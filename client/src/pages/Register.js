import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import Input from '../components/input';
import herobg from '../assets/herobg.png';
import logo_light from '../assets/logo_light.png';

const Register = () => {
  return (
    <div className='bg-dark h-screen w-screen flex items-center justify-center relative overflow-hidden'>
      <img
        src={herobg}
        className='absolute z-0 opacity-50 right-0 w-8/12'
        alt='background'
        draggable='false'
      />
      <img
        src={logo_light}
        className='absolute top-1/2 left-5 opacity-50 transform -translate-y-1/2'
        alt='Melody'
        draggable='false'
      />
      <div className='bg-bglight w-5/12 rounded-3xl form-box px-7  py-12 z-20'>
        <h1 className='gradient-text font-bold text-center text-4xl'>
          Regsiter
        </h1>
        <p className='text-center font-light text-white'>
          Just some simple steps and we are good to go
        </p>
        <div className='flex space-x-10 mt-5 justify-center'>
          <div className='transform transition-transform hover:-translate-y-0.5 flex bg-input items-center py-2 px-4 rounded-xl cursor-pointer'>
            <FcGoogle className='text-2xl' />
            <h1 className='text-white text-md mt-1 ml-2'>Signup with google</h1>
          </div>
          <div className='transform transition-transform hover:-translate-y-0.5 flex bg-input items-center py-2 px-4 rounded-xl cursor-pointer'>
            <ImFacebook className='text-2xl text-blue-400' />
            <h1 className='text-white text-md mt-1 ml-2'>Signup with google</h1>
          </div>
        </div>
        <div className='flex justify-center mt-8 px-16'>
          <div className='line w-full h-0.5 bg-input relative'></div>
          <div>
            <h1 className=' mx-3 text-center text-xl gradient-text -mt-3 font-bold'>
              OR
            </h1>
          </div>
          <div className='line w-full h-0.5 bg-input relative'></div>
        </div>

        <form action='/login'>
          <div className='flex w-full px-12 space-x-8'>
            <div className='w-full'>
              <Input title='Name' type='text' />
            </div>
            <div className='w-full'>
              <Input title='Contact Number' type='number' />
            </div>
          </div>
          <div className='w-full px-12'>
            <Input title='Email ID' type='email' />
          </div>
          <div className='flex w-full px-12 space-x-8'>
            <div className='w-full'>
              <Input title='Password' type='password' />
            </div>
            <div className='w-full'>
              <Input title='Confirm Password' type='password' />
            </div>
          </div>
          <p className='text-center'>
            <a href='/login'>
              <button className='mt-10 focus:outline-none bg-primary px-4 py-1 pt-2 text-white rounded-xl text-lg transform transition-transform hover:-translate-y-0.5'>
                Signup
              </button>
            </a>
            <p className='text-center mt-5 text-white'>
              Already a member?{' '}
              <a href='/login'>
                <span className='text-primary cursor-pointer'>Login</span>
              </a>
            </p>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
