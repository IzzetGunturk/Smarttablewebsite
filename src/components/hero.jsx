import React from "react";

function Hero() {

return (
<section id="hero">
    <div className="mx-auto max-w-screen-xl px-4 py-56 lg:py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
            <h1 className="font-extrabold text-5xl md:text-6xl text-gray-200">
                SMART TABLE.
            </h1>

            <div className="mt-4 text-gray-300 text-xl">
                Empowering Productivity, Silencing Distractions
            </div>

            <div className='font-extrabold text-sm text-gray-500 pt-4'>
                Group 7 - International Week
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a className="block rounded bg-gray-800 hover:bg-gray-600 transition ease-in-out duration-200 px-12 py-3 text-sm font-medium text-white shadow-md"
                    href="#concept">
                    Read more
                </a>
            </div>

            <div className="flex flex-wrap justify-center pt-32">
                <a href="#concept" className="scroll-icon">
                    <span className="scroll-icon__dot"></span>
                </a>
            </div>
        </div>
    </div>
</section>

)}

export default Hero;