import { useState, useMemo } from 'react';
import {  ChevronLeft, ChevronRight } from 'lucide-react';

// --- Swiper Imports ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
// WARNING: THESE IMPORTS STILL BRING IN SWIPER'S BASE CSS
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// --- IMAGE IMPORTS (Assuming these paths are correct in your project) ---
import HeroPizzaImage from '../assets/m2.jpg';
import PromoPizzaImage1 from '../assets/appe4.jpg';
import PromoPizzaImage2 from '../assets/m2.jpg';

import Pizza1 from '../assets/pizza1.avif';
import Pizza2 from '../assets/pizza2.jpg';
import Pizza3 from '../assets/pizza3.jpg';
import Pizza4 from '../assets/pizza4.jpg';
import Pizza5 from '../assets/pizza5.jpg';
import Pizza6 from '../assets/pizza.jpg';

import Appetizer1 from '../assets/appe1.jpg';
import Appetizer2 from '../assets/appe2.webp';
import Appetizer3 from '../assets/appe3.avif';
import Appetizer4 from '../assets/appe4.jpg';
import Appetizer5 from '../assets/appe5.avif';
import Appetizer6 from '../assets/appe.webp';

import Drink1 from '../assets/drink.webp';
import Drink2 from '../assets/drink1.webp';
import Drink3 from '../assets/drink2.jpg';
import Drink4 from '../assets/drink3.webp';
import Drink5 from '../assets/drink4.png';
import Drink6 from '../assets/drink5.avif';

import Dessert1 from '../assets/dessert.webp';
import Dessert2 from '../assets/dessert1.avif';
import Dessert3 from '../assets/dessert2.webp';
import Dessert4 from '../assets/dessert3.jpg';
import Dessert5 from '../assets/dessert4.webp';
import Dessert6 from '../assets/dessert5.jpg';

import FixedBackground from '../assets/whychose1.jpg';

// --- SPECIALS IMPORTS (10 Images) ---
import FixedBackgroundSpecials from '../assets/why1.jpg';
import MenuItemCard from '../components/menu/menu_item_card';
import SpecialItemContainer from '../components/menu/special_item_container';


const menuCategories = ['PIZZA', 'APPETIZER', 'DRINKS', 'DESSERTS'];

const menuItems = [
    { id: 1, name: 'MARGHERITA', ingredients: 'Arugula, cherry tomatoes, basil, olive oil, and fresh oregano.', price: '17.5', image: Pizza1, category: 'PIZZA' },
    { id: 2, name: 'PEPPERONI', ingredients: 'Pepperoni sausage, tomatoes, olives, onions and cheese.', price: '19.0', image: Pizza2, category: 'PIZZA' },
    { id: 3, name: 'CHEESE', ingredients: 'Parmesan, tomatoes, olives, oregano, and special sauce.', price: '18.5', image: Pizza3, category: 'PIZZA' },
    { id: 4, name: 'HAWAIIAN', ingredients: 'Pineapple, bacon, smoked sausage, onions, and extra cheese.', price: '19.5', image: Pizza4, category: 'PIZZA' },
    { id: 5, name: 'ITALIAN', ingredients: 'Pepperoni, bacon, tomatoes, green, spinach and mushrooms.', price: '22.5', image: Pizza5, category: 'PIZZA' },
    { id: 6, name: 'CARBONARA', ingredients: 'Mushrooms, smoked sausage, tomatoes, olives, onions and cheese.', price: '23.5', image: Pizza6, category: 'PIZZA' },

    { id: 7, name: 'GARLIC KNOTS', ingredients: 'Fresh baked knots tossed in garlic, butter, and herbs.', price: '6.5', image: Appetizer1, category: 'APPETIZER' },
    { id: 8, name: 'MOZZARELLA STICKS', ingredients: 'Fried mozzarella sticks served with marinara sauce.', price: '8.0', image: Appetizer2, category: 'APPETIZER' },
    { id: 9, name: 'CHICKEN WINGS', ingredients: 'Spicy buffalo wings served with blue cheese dip.', price: '12.0', image: Appetizer3, category: 'APPETIZER' },
    { id: 10, name: 'CALAMARI RINGS', ingredients: 'Fried calamari served with lemon aioli.', price: '10.5', image: Appetizer4, category: 'APPETIZER' },
    { id: 11, name: 'BRUSCHETTA', ingredients: 'Toasted bread topped with fresh tomato and basil.', price: '7.5', image: Appetizer5, category: 'APPETIZER' },
    { id: 12, name: 'FRENCH FRIES', ingredients: 'Crispy seasoned fries with ketchup.', price: '4.0', image: Appetizer6, category: 'APPETIZER' },

    { id: 13, name: 'COCA-COLA', ingredients: 'Classic carbonated soft drink, 330ml can.', price: '2.5', image: Drink1, category: 'DRINKS' },
    { id: 14, name: 'LEMONADE', ingredients: 'Freshly squeezed sweet and tangy lemonade.', price: '3.5', image: Drink2, category: 'DRINKS' },
    { id: 15, name: 'ICED TEA', ingredients: 'Unsweetened iced black tea with lemon.', price: '3.0', image: Drink3, category: 'DRINKS' },
    { id: 16, name: 'ORANGE JUICE', ingredients: '100% freshly squeezed orange juice.', price: '4.0', image: Drink4, category: 'DRINKS' },
    { id: 17, name: 'MINERAL WATER', ingredients: 'Still sparkling mineral water, 500ml bottle.', price: '2.0', image: Drink5, category: 'DRINKS' },
    { id: 18, name: 'COFFEE', ingredients: 'Freshly brewed hot black coffee.', price: '3.0', image: Drink6, category: 'DRINKS' },

    { id: 19, name: 'TIRAMISU', ingredients: 'Layers of coffee-soaked ladyfingers and mascarpone cream.', price: '7.5', image: Dessert1, category: 'DESSERTS' },
    { id: 20, name: 'LAVA CAKE', ingredients: 'Warm chocolate cake with a molten center.', price: '8.5', image: Dessert2, category: 'DESSERTS' },
    { id: 21, name: 'CHEESECAKE', ingredients: 'Classic New York style cheesecake.', price: '7.0', image: Dessert3, category: 'DESSERTS' },
    { id: 22, name: 'GELATO', ingredients: 'Two scoops of house-made vanilla gelato.', price: '6.0', image: Dessert4, category: 'DESSERTS' },
    { id: 23, name: 'CANNOLI', ingredients: 'Crispy shells filled with sweet ricotta cheese.', price: '5.5', image: Dessert5, category: 'DESSERTS' },
    { id: 24, name: 'FRUIT SALAD', ingredients: 'Seasonal fresh mixed fruit.', price: '4.5', image: Dessert6, category: 'DESSERTS' },
];



const Menu = () => {

    const [activeCategory, setActiveCategory] = useState('PIZZA');
    const [currentPage, setCurrentPage] = useState(1);

    // --- PAGINATION LOGIC (for Menu Items - Section 2 - Unchanged) ---
    const ITEMS_PER_PAGE = 4;

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    const filteredItems = useMemo(() => {
        return menuItems.filter(item => item.category === activeCategory);
    }, [activeCategory]);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredItems.slice(startIndex, endIndex);
    }, [filteredItems, currentPage]);

    const half = Math.ceil(currentItems.length / 2);
    const column1 = currentItems.slice(0, half);
    const column2 = currentItems.slice(half);

    const goToNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    const goToPrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const getArrowClass = (isNext) => {
        const isDisabled = isNext ? (currentPage === totalPages || totalPages === 0) : (currentPage === 1);

        if (isDisabled) {
            return "w-6 h-6 text-gray-700 cursor-not-allowed";
        }

        const baseClass = "w-6 h-6 cursor-pointer transition duration-200";
        return `${baseClass} text-yellow-500 hover:text-white`;
    }

    return (
        <div className="bg-black min-h-screen font-sans">

            {/* 1. Hero Section */}
            <section
                className="relative h-[560px] flex items-center justify-center bg-gray-900 overflow-hidden"
                style={{
                    backgroundImage: `url(${HeroPizzaImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center right',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>

                <div className="relative z-10 text-center max-w-4xl mx-auto px-8">

                    <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight">
                        BEST <span className="text-orange-500">FOOD </span>
                    </h1>
                    <h1 className="text-5xl md:text-8xl font-extrabold block text-white leading-tight mt-1">
                        IN <span className="text-orange-500"> OXFORD</span>
                    </h1>

                    <p className="text-lg text-gray-300 mt-6 font-medium">
                        WE WILL TAKE ANY RECIPE IN THE WORLD, CHOOSE YOUR OWN PIZZA!
                    </p>
                    <p className="text-lg text-orange-400 mt-2 font-semibold">
                        20 MIN DELIVERY
                    </p>

                    <button className="mt-10 px-8 py-3 bg-yellow-500 text-black text-xl font-bold uppercase rounded-full hover:bg-yellow-400 transition shadow-lg">
                        GO TO THE MENU
                    </button>
                </div>
            </section>

            ---
            
            {/* 2. Menu Categories and Items Section */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 bg-black">

                <div className="flex justify-center space-x-8 mb-12">
                    {menuCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`
                                text-xl font-bold uppercase pb-1 transition duration-200
                                ${activeCategory === cat
                                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                                    : 'text-gray-400 hover:text-white border-b-2 border-transparent'
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">

                    <div className="space-y-8">
                        {column1.map(item => (
                            <MenuItemCard key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="space-y-8">
                        {column2.map(item => (
                            <MenuItemCard key={item.id} item={item} />

                        ))}
                    </div>
                </div>

                {totalPages > 0 && (
                    <div className="flex justify-center items-center space-x-4 mt-12">

                        <button
                            onClick={goToPrevPage}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft
                                className={getArrowClass(false)}
                            />
                        </button>

                        <span className="text-sm text-gray-400 font-bold">
                            {currentPage} / {totalPages}
                        </span>

                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages || totalPages === 0}
                        >
                            <ChevronRight
                                className={getArrowClass(true)}
                            />
                        </button>
                    </div>
                )}
            </section>

            ---
            
            {/* 3. Why Choose Us Section */}
            <section
                className="relative h-[450px] flex items-center justify-center text-center overflow-hidden"
            >

                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: `url(${FixedBackground})`,
                    }}
                ></div>

                {/* Overlay for Readability */}
                <div className="absolute inset-0 bg-white/70"></div>

                {/* Content */}
                <div className="relative z-10 max-w-2xl mx-auto px-4">
                    <h2 className="text-4xl font-serif text-gray-800 italic"
                        style={{ fontFamily: 'Brush Script MT, cursive' }}>
                        Why Choose Us?
                    </h2>
                    <div className="flex justify-center my-4">
                        {/* Simple red line separator with dots */}
                        <div className="h-0.5 w-16 bg-red-600 relative">
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-600"></div>
                        </div>
                    </div>

                    <p className="text-gray-700 text-lg mt-6 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.
                    </p>
                </div>
            </section>

            ---
            
            {/* 4. Promotions Section */}
            <section className="bg-gray-950 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-extrabold text-yellow-500 uppercase tracking-widest mb-10">
                        Promotions of the Week
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div
                            className="relative h-64 overflow-hidden rounded-lg shadow-xl flex items-end p-6"
                            style={{
                                backgroundImage: `url(${PromoPizzaImage1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                            <span className="relative text-3xl font-extrabold text-white leading-tight z-10">
                                <span className="text-yellow-500">25% OFF</span> ON HAWAIIAN PIZZA
                            </span>
                        </div>

                        <div
                            className="relative h-64 overflow-hidden rounded-lg shadow-xl flex items-end p-6"
                            style={{
                                backgroundImage: `url(${PromoPizzaImage2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                            <span className="relative text-3xl font-extrabold text-white leading-tight z-10">
                                <span className="text-yellow-500">15% OFF</span> ON ITALIAN PIZZA
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            ---
            
           
            <section
                className="relative py-16 md:py-24 bg-gray-250 h-[650px] flex items-center overflow-hidden" 
            >

                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: `url(${FixedBackgroundSpecials})`,
                    }}
                ></div>


                <div className="absolute inset-0 bg-black/35"></div>

                <div className="relative z-10 w-full">

                   
                    <div className="mb-6 text-center">
                        <h2 className="text-5xl font-extrabold text-white">
                            Today's Special
                        </h2>
                        <p className="text-2xl italic text-yellow-500 font-serif"
                            style={{ fontFamily: 'Brush Script MT, cursive' }}>
                            Fresh and delicious
                        </p>
                        <div className="h-1 w-12 bg-yellow-500 mx-auto mt-4"></div>
                    </div>
                    <SpecialItemContainer/>



                </div>
            </section>
        </div>
    );
};

export default Menu;