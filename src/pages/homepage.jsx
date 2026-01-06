import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../assets/food1.jpg';
import hero2 from '../assets/food4.webp';
import hero3 from '../assets/food3.jpg';

import menu1 from '../assets/m1.webp';
import menu2 from '../assets/m2.jpg';
import menu3 from '../assets/m3.jpeg';
import menu4 from '../assets/m4.jpg';
import spe from '../assets/spe.jpg';
import spe1 from '../assets/spe1.webp';
import spe2 from '../assets/spe2.jpg';
import spe3 from '../assets/spe3.webp';
import spe4 from '../assets/spe8.jpg';
import spe5 from '../assets/spe5.jpg';
import spe6 from '../assets/spe6.jpg';
import spe7 from '../assets/spe7.webp';


import aboutImage from '../assets/c.jpg'; 


function Homepage() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);

    const images = [hero1, hero2, hero3];

    
    const menuItems = [
        { id: 1, name: "Spicy Noodles", image: menu1, price: "$12.99" },
        { id: 2, name: "Gourmet Burger", image: menu2, price: "$15.50" },
        { id: 3, name: "Fresh Salad", image: menu3, price: "$9.75" },
        { id: 4, name: "Chocolate Cake", image: menu4, price: "$7.00" },
    ];

    
    const specialtyItems = [
        { id: 1, name: "Specialty Pizza", image: spe },
        { id: 2, name: "Tiramisu Cake", image: spe1 },
        { id: 3, name: "Buddha Bowl", image: spe2 },
        { id: 4, name: "Grilled Chicken", image: spe3 },
        { id: 5, name: "Beef Steak", image: spe4 },
        { id: 6, name: "Seafood Pasta", image: spe5 },
        { id: 7, name: "Fruit Smoothie", image: spe6 },
        { id: 8, name: "Lemon Tart", image: spe7 },
    ];

    const itemsPerPage = 4;
  
    const maxIndex = specialtyItems.length - itemsPerPage;


    const toggleMenu = () => setIsOpen(!isOpen);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);


    const goToNext = () => {
        setCurrentSpecialtyIndex((prevIndex) => {

            return prevIndex < maxIndex ? prevIndex + itemsPerPage : prevIndex;
        });
    };

 
    const goToPrevious = () => {
        setCurrentSpecialtyIndex((prevIndex) => {
       
            return prevIndex > 0 ? prevIndex - itemsPerPage : 0;
        });
    };

 
    const displayedSpecialties = specialtyItems.slice(
        currentSpecialtyIndex,
        currentSpecialtyIndex + itemsPerPage
    );

    const endDisplayIndex = Math.min(currentSpecialtyIndex + itemsPerPage, specialtyItems.length);


    return (

        <div className="min-h-screen text-white bg-black">



            <section className="bg-black py-20 md:py-0 min-h-[calc(100vh-80px)] flex items-center px-6 lg:px-19">
                <div className="mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-center">

              
                    <div className="md:w-5/12 text-left mt-10 md:mt-0">
                        <p className="text-orange-400 uppercase tracking-widest text-base mb-2">
                            EXPERIENCE THE ART OF FINE DINING
                        </p>

                        <h1 className="text-6xl font-extrabold text-orange-400 mb-6 leading-tight">
                            Savor Exceptional Flavors
                        </h1>

                        <p className="text-gray-200 text-base max-w-xl mb-10 leading-relaxed">
                            Where every dish tells a story and every ingredient is carefully selected to create memorable culinary experiences that delight all senses. Our chefs combine traditional recipes with modern techniques to deliver unforgettable meals.
                        </p>

                       
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                className="bg-orange-400 text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-orange-400 transition"
                                to="/menu"
                            >
                                Explore Our Menu

                            </Link>
                            <Link
                                className="border-2 border-orange-400 text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-orange-400 hover:text-white transition"
                                to="/reservation"
                            >
                                Make a Reservation
                            </Link>
                        </div>
                    </div>

          
                    <div className="md:w-7/12 flex justify-center md:justify-end relative">
                        <div className="relative w-[500px] h-[500px] flex items-center justify-center">

                          
                            <img
                                src={images[currentImage]}
                                alt="Hero Food"
                                className="rounded-full w-full h-full object-cover shadow-[0_0_80px_10px_rgba(255,165,0,0.4)] border-4 border-orange-500"
                            />

                 
                            <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex space-x-3">
                                {images.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${currentImage === idx ? 'bg-orange-500' : 'bg-gray-600'}`}
                                        onClick={() => setCurrentImage(idx)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            

            <section className="bg-black py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
              
                    <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-12">
                        Our Signature Dishes
                    </h2>

                
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {menuItems.map((item) => (
                            <div key={item.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">

                             
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 object-cover"
                                />
                        

   
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                                    <p className="text-orange-400 font-semibold">{item.price}</p>
                                    <button className="mt-4 bg-orange-400 text-white px-4 py-1.5 rounded-full text-sm hover:bg-orange-600 transition">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/menu"
                            className="inline-block border-2 border-orange-400 text-orange-400 px-10 py-3 rounded-full font-semibold text-lg hover:bg-orange-400 hover:text-white transition"
                        >
                            View Full Menu
                        </Link>
                    </div>

                </div>
            </section>
         



    
            <section className="bg-gray-900 py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    
             
                    <div className="lg:w-1/2 text-left order-2 lg:order-1">
                    
                        <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
                            Our Passionate Story
                        </h2>
                        
                        <p className="text-gray-300 text-lg mb-4 border-l-4 border-orange-500 pl-4">
                            TastyBite was born from a simple dream: to bring authentic, high-quality cuisine to our community. Our journey began 15 years ago with a single food stall and a commitment to use only the freshest, local ingredients.
                        </p>
                        
                        <p className="text-gray-300 text-lg mb-6">
                            Today, led by our acclaimed Head Chef, [Chef Name], we blend traditional cooking methods with innovative modern techniques. Every dish we serve is a testament to our dedication to culinary excellence.
                        </p>

                        <Link
                            to="/about"
                            className="inline-block bg-orange-500 text-black font-bold px-8 py-3 rounded-full text-base hover:bg-orange-600 transition shadow-lg"
                        >
                            Read More About Us
                        </Link>
                    </div>

    
                    <div className="lg:w-1/2 relative order-1 lg:order-2">
                        <img 
                            src={aboutImage} 
                            alt="A passionate chef preparing food" 
                            className="w-full h-96 object-cover rounded-lg shadow-2xl border-4 border-orange-500" 
                        />
                    </div>
                </div>
            </section>
         


      
            <section className="bg-black py-20 px-6 lg:px-12"> 
                <div className="max-w-7xl mx-auto">

               
                    <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-12">
                        Our Specialties
             
                        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div> 
                    </h2>


      
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayedSpecialties.map((item) => (
                            <div key={item.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-orange-500/30 transform hover:shadow-orange-500/50 transition duration-300">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-64 object-cover transition duration-300 hover:opacity-90" 
                                />
                                <div className="p-4 text-center">
                                    <p className="font-bold text-xl text-orange-400">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                 
                    <div className="flex flex-col sm:flex-row justify-center items-center mt-10 space-y-4 sm:space-y-0 sm:space-x-8">
                       
                            <p className="text-sm text-gray-400 font-medium order-2 sm:order-1">
                                {currentSpecialtyIndex + 1}-{endDisplayIndex} of {specialtyItems.length} Items
                            </p>
                        
                        <div className="flex space-x-4 order-1 sm:order-2">
                            <button
                                onClick={goToPrevious}
                             
                                disabled={currentSpecialtyIndex === 0}
                                className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold transition disabled:bg-gray-700 disabled:opacity-50 flex items-center hover:bg-orange-600"
                            >
                                <i className="fas fa-chevron-left mr-2"></i> Previous
                            </button>
                            <button
                                onClick={goToNext}
            
                                disabled={currentSpecialtyIndex >= maxIndex}
                                className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold transition disabled:bg-gray-700 disabled:opacity-50 flex items-center hover:bg-orange-600"
                            >
                                Next <i className="fas fa-chevron-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        
            
        </div>
    );
}

export default Homepage;