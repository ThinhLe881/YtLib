import { useState } from 'react';
import Icon from '../assets/ytlib.png';


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Navbar Section */}
                    <div className="flex items-center space-x-10">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-8 w-8" src={Icon}></img>
                            <span className="ml-2 text-xl font-bold text-gray-900">YouTube Library</span>
                        </div>

                        {/* Navbar Menu */}
                        <div className="hidden md:flex">
                            <a
                                href="#"
                                className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium transition-colors duration-200"
                            >
                                Dashboard
                            </a>
                            <a
                                href="#"
                                className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium transition-colors duration-200"
                            >
                                Pricing
                            </a>
                        </div>
                    </div>

                    {/* Auth Section */}
                    <div className="flex items-center">
                        {isLoggedIn ? (
                            <div className="relative ml-3">
                                <button
                                    className="flex items-center max-w-xs rounded-full focus:outline-none"
                                    onClick={() => setShowDropdown(!showDropdown)}
                                >
                                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                        <span className="text-indigo-700 font-medium">U</span>
                                    </div>
                                </button>

                                {showDropdown && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Profile
                                            </a>
                                            <button
                                                onClick={() => setIsLoggedIn(false)}
                                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => setIsLoggedIn(true)}
                                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-200 shadow"
                                >
                                    Log In
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div >
        </nav >
    );
};

export default Navbar;