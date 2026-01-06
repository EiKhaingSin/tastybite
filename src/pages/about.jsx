import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import heroAbout1 from '../assets/a.avif';
import heroAbout2 from '../assets/a1.avif';
import heroAbout3 from '../assets/a2.jpg';

import burgerImage from '../assets/m2.jpg';

import headChefImage from '../assets/c3.jpg';
import sousChefImage from '../assets/c2.avif';
import managerImage from '../assets/c1.webp';

import placeholderWideImage from '../assets/whychose2.jpg';

function About() {


    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const heroImages = [heroAbout1, heroAbout2, heroAbout3];

    const [isSectionTwoVisible, setIsSectionTwoVisible] = useState(false);
    const sectionTwoRef = useRef(null);

    const [isSectionThreeVisible, setIsSectionThreeVisible] = useState(false);
    const sectionThreeRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSectionTwoVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1, 
            }
        );

        if (sectionTwoRef.current) {
            observer.observe(sectionTwoRef.current);
        }

        return () => {
            if (sectionTwoRef.current) {
                observer.unobserve(sectionTwoRef.current);
            }
        };
    }, []);

   
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSectionThreeVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2 
            }
        );

        if (sectionThreeRef.current) {
            observer.observe(sectionThreeRef.current);
        }

        return () => {
            if (sectionThreeRef.current) {
                observer.unobserve(sectionThreeRef.current);
            }
        };
    }, []);


    return (
        <div className="bg-black text-white min-h-screen">

           
            <section className="relative h-140 flex items-center justify-center bg-gray-900 overflow-hidden">

             
                <div className="absolute inset-0">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${currentImageIndex === index ? 'opacity-30' : 'opacity-0'
                                }`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                </div>

              
                <div className="relative z-10 text-center max-w-4xl mx-auto p-4">
                    <h1 className="text-6xl font-extrabold text-orange-500 mb-4">
                        Our Story, Our Passion
                    </h1>
                    <p className="text-xl text-gray-200">
                        Blending tradition with innovation since 2008.
                    </p>
                    <Link
                        to="/menu"
                        className="mt-6 inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-orange-500 hover:border-orange-500 hover:text-black transition duration-300"
                    >
                        Read More
                    </Link>
                </div>
            </section>

            <hr className="border-gray-800" />


            <section className="py-20 px-6 lg:px-12 bg-black text-center">
                <div className="max-w-7xl mx-auto">


                    <h2 className="text-6xl text-white mb-6" style={{ fontFamily: 'cursive' }}>
                        Why Choose Us ?
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.
                    </p>


                    <div
                        className="mx-auto overflow-hidden shadow-2xl rounded-lg border-2 border-amber-100"
                        style={{ width: '1000px', height: '300px' }}
                    >
                        <img
                            src={placeholderWideImage}
                            alt="Assortment of delicious, modern dishes"
                            className="w-full h-full object-cover"
                        />
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
                        <div>
                            <span className="text-3xl text-orange-500 mb-2 block"></span>
                            <h4 className="text-xl font-semibold text-white">Authentic Flavors</h4>
                            <p className="text-gray-400 text-sm mt-1">We use traditional recipes and the freshest ingredients for an unmatched taste experience.</p>
                        </div>
                        <div>
                            <span className="text-3xl text-orange-500 mb-2 block"></span>
                            <h4 className="text-xl font-semibold text-white">Expert Chefs</h4>
                            <p className="text-gray-400 text-sm mt-1">Our culinary team is led by award-winning chefs with decades of experience.</p>
                        </div>
                        <div>
                            <span className="text-3xl text-orange-500 mb-2 block"></span>
                            <h4 className="text-xl font-semibold text-white">Exceptional Service</h4>
                            <p className="text-gray-400 text-sm mt-1">From seating to dessert, we ensure a warm and memorable dining experience for every guest.</p>
                        </div>
                    </div>

                </div>
            </section>

            <hr className="border-gray-800" />


            <section
                className="py-24 px-6 lg:px-12 bg-gray-900"
                ref={sectionTwoRef}
            >
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 overflow-hidden">


                    <div className={`lg:w-1/2 relative transition duration-1000 ease-out ${isSectionTwoVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-100%] opacity-0'
                        }`}>
                        <img
                            src={burgerImage}
                            alt="Delicious Food"
                            className="w-full h-auto object-cover rounded-lg shadow-2xl"
                        />
                    </div>


                    <div className={`lg:w-1/2 text-left transition duration-1000 ease-out ${isSectionTwoVisible ? 'translate-x-0 opacity-100 delay-300' : 'translate-x-[100%] opacity-0 delay-300'
                        }`}>
                        <p className="text-sm font-semibold uppercase text-orange-500 mb-2 tracking-widest">
                            About Us
                        </p>
                        <h2 className="text-5xl font-bold text-white mb-8 leading-snug">
                            Enjoy An Exceptional Journey of Taste
                        </h2>

                        <p className="text-gray-300 text-base mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus semper fermentum. Pellentesque eu ligula rhoncus.
                        </p>


                        <div className="grid grid-cols-2 gap-8 mb-8">


                            <div>
                                <i className="fas fa-utensils text-3xl text-orange-500 mb-2"></i>
                                <h4 className="text-xl font-semibold text-white mb-1">Specialist</h4>
                                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>

                            <div>
                                <i className="fas fa-building text-3xl text-orange-500 mb-2"></i>
                                <h4 className="text-xl font-semibold text-white mb-1">Restaurant</h4>
                                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>


                        <ul className="text-gray-300 space-y-2 mb-8">
                            <li className="flex items-center">
                                <i className="fas fa-check text-orange-500 mr-3"></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-orange-500 mr-3"></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-orange-500 mr-3"></i>
                                Lorem ipsum dolor sit amet, consectetur.
                            </li>
                        </ul>

                        <Link
                            to="/menu"
                            className="inline-block border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-md font-semibold text-lg hover:bg-orange-500 hover:text-black transition duration-300"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </section>

            <hr className="border-gray-800" />

            <section
                className="py-20 px-6 lg:px-12 bg-black text-center"
                ref={sectionThreeRef}
            >
                <div className="max-w-7xl mx-auto">
                    <p className="text-sm font-semibold uppercase text-orange-500 mb-2 tracking-widest">
                        The People Behind the Flavor
                    </p>
                    <h2 className="text-4xl font-extrabold text-white mb-12">
                        Meet Our Culinary Team
                    </h2>


                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 transition-all duration-1000 ease-out ${isSectionThreeVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                        }`}>


                        <div className="bg-gray-900 p-6 rounded-lg shadow-xl transform transition hover:scale-105 duration-300">
                            <img
                                src={headChefImage}
                                alt="Chef Amit"
                                className="w-42 h-42 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
                            />
                            <h3 className="text-2xl font-bold text-white mb-1">Chef Amit</h3>
                            <p className="text-orange-500 font-semibold mb-3">Head Chef & Founder</p>
                            <p className="text-gray-400 text-sm">
                                Specialized in Fusion Cuisine with 15 years of experience creating award-winning dishes.
                            </p>
                        </div>


                        <div className="bg-gray-900 p-6 rounded-lg shadow-xl transform transition hover:scale-105 duration-300 delay-200">
                            <img
                                src={sousChefImage}
                                alt="Sous Chef Name"
                                className="w-42 h-42 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
                            />
                            <h3 className="text-2xl font-bold text-white mb-1">Zaw Min</h3>
                            <p className="text-orange-500 font-semibold mb-3">Sous Chef</p>
                            <p className="text-gray-400 text-sm">
                                Expert in pastry and dessert arts, ensuring every meal ends on a sweet note.
                            </p>
                        </div>

                       
                        <div className="bg-gray-900 p-6 rounded-lg shadow-xl transform transition hover:scale-105 duration-300 delay-400">
                            <img
                                src={managerImage}
                                alt="Manager Name"
                                className="w-42 h-42 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
                            />
                            <h3 className="text-2xl font-bold text-white mb-1">May Thazin</h3>
                            <p className="text-orange-500 font-semibold mb-3">Restaurant Manager</p>
                            <p className="text-gray-400 text-sm">
                                Manages front-of-house operations, dedicated to providing exceptional customer service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-gray-800" />

            
            <section className="py-20 px-6 lg:px-12 bg-gray-900 text-center">
                <div className="max-w-7xl mx-auto">
                    <p className="text-sm font-semibold uppercase text-white mb-2 tracking-widest">
                        Our Journey of Excellence
                    </p>
                    <h2 className="text-4xl font-extrabold text-orange-500 mb-12">
                        Milestones That Define Our Legacy
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                
                        <div className="p-4 border-r-2 border-orange-500 last:border-r-0">
                            <h3 className="text-5xl font-extrabold text-white mb-1">
                                2008
                            </h3>
                            <p className="text-lg font-semibold text-gray-300">
                                Founded
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                TastyBite opens its first location, blending tradition and flavor.
                            </p>
                        </div>

           
                        <div className="p-4 border-r-2 border-orange-500 last:border-r-0">
                            <h3 className="text-5xl font-extrabold text-white mb-1">
                                50+
                            </h3>
                            <p className="text-lg font-semibold text-gray-300">
                                Awards
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                Recognized by local and international culinary organizations.
                            </p>
                        </div>

                
                        <div className="p-4 border-r-2 border-orange-500 last:border-r-0">
                            <h3 className="text-5xl font-extrabold text-white mb-1">
                                1M+
                            </h3>
                            <p className="text-lg font-semibold text-gray-300">
                                Happy Customers
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                Serving millions of satisfied diners over the past decade.
                            </p>
                        </div>

                
                        <div className="p-4">
                            <h3 className="text-5xl font-extrabold text-white mb-1">
                                5
                            </h3>
                            <p className="text-lg font-semibold text-gray-300">
                                Locations
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                Expanding our unique taste experience across the region.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-gray-800" />

          
            <section className="bg-black py-16 px-6 lg:px-12 text-center">
                <h2 className="text-4xl font-extrabold text-white mb-4">
                    Ready to Taste the Experience?
                </h2>
                <p className="text-gray-300 text-xl mb-8">
                    Book a table today and experience the art of our cooking!
                </p>
                <Link
                    to="/reservation"
                    className="inline-block border-2 border-orange-500 text-orange-500 px-10 py-3 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-black transition"
                >
                    Book A Table Now
                </Link>
            </section>

        </div>
    );
}

export default About;