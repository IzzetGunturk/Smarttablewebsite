import React from 'react';

function Footer() {
return (
  <footer className="bg-gray-800 mt-16">
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <a href='#hero' className="text-white font-semibold text-3xl hover:scale-110 transition duration-200">SMART TABLE.</a>
      </div>

      <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400">
        Empowering Productivity, Silencing Distractions
      </p>

      <ul className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <a className="text-gray-300 hover:bg-gray-700 transition duration-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="#concept">
            Concept
          </a>
        </li>

        <li>
          <a className="text-gray-300 hover:bg-gray-700 transition duration-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="#prototype">
            Prototype
          </a>
        </li>
      </ul>

      <div>
        <p className="pt-10 text-center justify-center text-sm text-gray-500 lg:mt-0">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)}

export default Footer;