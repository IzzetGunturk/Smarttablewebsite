import Spline from '@splinetool/react-spline';
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

function SplineObject() {
  useEffect (() => {
    AOS.init({duration: 1500 });
    AOS.refresh();
  }, []);

return (
  <section className="flex flex-col items-center justify-center h-[40rem] pt-28 text-center" id='prototype' data-aos="fade-up">
    <h1 className="text-3xl font-medium sm:text-4xl text-gray-200 px-5">Prototype</h1>
    <div className='text-gray-400 px-5'>Click on the user interface on the table and drag the table!</div>
    <Spline style={{ width: '100%', height: '100%' }}
      scene="https://prod.spline.design/0TJXzR4YRY3ZPIJB/scene.splinecode" />
  </section>
)}

export default SplineObject;