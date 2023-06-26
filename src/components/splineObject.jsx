import Spline from '@splinetool/react-spline';
import React from 'react';

function SplineObject() {
return (
  <div className="flex flex-col items-center justify-center h-[40rem] pt-28">
    <h1 className="text-3xl font-bold sm:text-4xl text-gray-200">Smart Table</h1>
    <div className='text-gray-400'>Click on the user interface on the table</div>
    <Spline style={{ width: '100%', height: '100%' }}
      scene="https://prod.spline.design/0TJXzR4YRY3ZPIJB/scene.splinecode" />
  </div>
)}

export default SplineObject;