import React from "react";

function Hero() {

return (
<section id="hero">
    <div className="mx-auto max-w-screen-xl px-4 pt-[19rem] pb-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-[75rem] text-center">
            <h1 className="font-semibold text-5xl md:text-6xl text-gray-200 herotitle">
                SMART TABLE.
            </h1>

            <div className="mt-4 text-gray-300 text-xl">
                Empowering Productivity, Silencing Distractions
            </div>

            <div className='font-semibold text-sm text-gray-500 pt-4'>
                Group 7 - International Week
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a className="rounded bg-gray-800 hover:bg-gray-600 transition ease-in-out duration-200 px-12 py-3 text-sm text-white shadow-md z-30"
                    href="#concept" aria-label="Readmorebutton">
                    Read more
                </a>
            </div>

            <div className="flex flex-wrap justify-center pt-32">
                <a href="#concept" className="scroll-icon" aria-label="Scrollicon">
                    <span className="scroll-icon__dot"></span>
                </a>
            </div>
        </div>
    </div>
</section>

)}

export default Hero;