import React, { useState } from 'react';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

return (
<nav className="bg-gray-700 shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <span className="text-white font-bold text-lg">SMART TABLE.</span>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <a href="/"
                            className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="/"
                            className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="/"
                            className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                        <a href="/"
                            className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </div>
            </div>
            <div className="-mr-2 flex md:hidden">
                <button
                    className="fixed top-0 right-0 z-20 flex items-center justify-center w-16 h-16 text-white mb-safe"
                    onClick={toggleNav} aria-expanded={isNavOpen} aria-label={isNavOpen ? 'Close navigation'
                    : 'Open navigation' } aria-hidden="true">
                    <div className="absolute block w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-white transform transition
                            duration-500 ease-in-out ${ isNavOpen ? 'rotate-45' : '-translate-y-2' }`}></span>
                        <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-white transform transition
                            duration-500 ease-in-out ${ isNavOpen ? 'opacity-0' : '' }`}></span>
                        <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-white transform transition
                            duration-500 ease-in-out ${ isNavOpen ? '-rotate-45' : 'translate-y-2' }`}></span>
                    </div>
                </button>
            </div>
        </div>
    </div>

    <div className={`${isNavOpen ? 'block' : 'hidden' } md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
            <a href="/"
                className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/"
                className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="/"
                className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="/"
                className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
    </div>
</nav>

)}

export default Header;