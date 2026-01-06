import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom'; 
import logo from '../assets/logo.png';


function Footer() {


    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="flex flex-col min-h-screen bg-black">


            <nav className="relative w-full z-50 bg-black h-20 flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex justify-between items-center">


                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
                        <span className="text-3xl font-bold text-orange-500">TastyBite</span>
                    </div>

                    <div className="flex-grow flex justify-center hidden md:flex">
                        <div className="space-x-10 text-white text-xl font-medium">
                            <Link className="hover:text-orange-500 transition" to="/">Home</Link>
                            <Link className="hover:text-orange-500 transition" to="/menu">Menu</Link>
                            <Link className="hover:text-orange-500 transition" to="/about">About</Link>
                            <Link className="hover:text-orange-500 transition" to="/Blog">Blog</Link>
                            <Link className="hover:text-orange-500 transition" to="/contact">Contact</Link>
                        </div>
                    </div>


                    <div className="flex items-center space-x-4">

                        <Link to="/cart" className="relative hidden md:block">
                            <i className="fas fa-shopping-cart text-xl cursor-pointer hover:text-orange-500 transition"></i>
                            <span className="absolute -top-2 -right-3 bg-orange-500 text-white-900 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">1</span>
                        </Link>

                        <Link to="/login" className="hidden md:block">
                            <i className="fas fa-sign-in-alt text-xl cursor-pointer hover:text-orange-500 transition"></i>
                        </Link>

                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="p-2">
                                {isOpen ? (
                                    <svg className="w-7 h-7" fill="none" stroke="white" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-7 h-7" fill="none" stroke="white" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>


                {isOpen && (
                    <div className="absolute top-full left-0 w-full md:hidden bg-black text-white shadow-lg">
                        <Link className="block px-6 py-3 hover:bg-gray-800" to="/">Home</Link>
                        <Link className="block px-6 py-3 hover:bg-gray-800" to="/menu">Menu</Link>
                        <Link className="block px-6 py-3 hover:bg-gray-800" to="/about">About</Link>
                        <Link className="block px-6 py-3 hover:bg-gray-800" to="/location">Location</Link>
                        <Link className="block px-6 py-3 hover:bg-gray-800" to="/contact">Contact</Link>
                        <Link className="relative flex items-center px-6 py-3 hover:bg-gray-800" to="/cart">
                            <i className="fas fa-shopping-cart mr-3"></i> Cart
                            <span className="ml-2 bg-orange-500 text-gray-900 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">1</span>
                        </Link>
                        <Link className="flex items-center px-6 py-3 hover:bg-gray-800" to="/login">
                            <i className="fas fa-sign-in-alt mr-3"></i> Login / Sign Up
                        </Link>
                    </div>
                )}
            </nav>

            <main className="flex-grow">
             
                <Outlet /> 
            </main>


            <footer className="bg-gray-900 text-white pt-16 pb-6 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">


                        <div>
                            <h3 className="text-2xl font-bold text-orange-500 mb-4">About Us</h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                TastyBite is a premium restaurant offering delicious meals made from the freshest
                                ingredients. Our chefs create culinary experiences that delight all senses.
                            </p>
                        </div>


                        <div>
                            <h3 className="text-2xl font-bold text-orange-500 mb-4">Opening Hours</h3>
                            <p className="text-gray-300 text-base mb-2">
                                <span className="font-semibold">Monday - Friday:</span> 11am - 10pm
                            </p>
                            <p className="text-gray-300 text-base">
                                <span className="font-semibold">Saturday - Sunday:</span> 10am - 11pm
                            </p>
                        </div>


                        <div>
                            <h3 className="text-2xl font-bold text-orange-500 mb-4">Contact Us</h3>
                            <p className="text-gray-300 text-base mb-2">
                                123 Restaurant Street, Food City
                            </p>
                            <p className="text-gray-300 text-base mb-2">
                                <span className="font-semibold">Phone:</span> (123) 456-7890
                            </p>
                            <p className="text-gray-300 text-base">
                                <span className="font-semibold">Email:</span> info@amitresto.com
                            </p>
                        </div>
                    </div>


                    <div className="text-center pt-6 text-gray-400 text-sm">
                        <p>
                            &copy; 2023 TastyBite. All rights reserved. | Designed with
                            <span className="text-orange-500 mx-1">&#10084;</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;