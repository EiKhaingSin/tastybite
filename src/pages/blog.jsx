import { Link } from "react-router-dom";

import blogHeroVideo from "../assets/food.mp4";
import postImage1 from "../assets/71.webp";
import postImage2 from "../assets/hm.jpg";
import postImage3 from "../assets/summer.jpg";
import postImage4 from "../assets/6.mp4"; 



const mockRecentPosts = [
    { id: 1, date: "07 JUN", title: "7 Essential Spices for Vegan Cooking" },
    { id: 2, date: "25 JUN", title: "The Secret to Perfect Homemade Pasta Dough" },
    { id: 3, date: "10 JUN", title: "Summer Food and Ingredients Guide" },
    { id: 4, date: "10 JUN", title: "6 Ways to Cook a Roast" },
];

const mockMainPosts = [
    {
        id: 'main1',
        date: "26 FEB",
        title: "5 Powerfull Natural Antibiotics",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
        image: postImage1,
    },
    {
        id: 'main2',
        date: "20 FEB",
        title: "25 Reasons to Eat Bananas",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
        image: postImage2,
    },
    {
        id: 'main3',
        date: "16 FEB",
        title: "Summer Food and Ingredients Guide",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
        image: postImage3,
    },
    {
        id: 'main4',
        date: "12 FEB", 
        title: "6 Ways to Cook a Perfect Steak Video Guide", 
        excerpt: "Watch our step-by-step video guide to cooking the perfect roast or steak every time. Learn about seasoning, searing, and resting for juicy results.",
        image: postImage4,
    },
];

const mockTags = [
    "Recipes", "Vegan", "Baking", "Healthy", "Desserts",
    "Tips", "Drinks", "Dinner", "Snacks", "Quick",
    "Meat", "Vegetables",
];




const RecentPostItem = ({ post }) => (
    <Link to={`/blog/${post.id}`} className="block mb-4 p-2 transition duration-150">
        <div className="flex items-center space-x-3">
            <span className="bg-orange-600 text-black px-2 py-1 text-xs font-bold flex-shrink-0">
                {post.date.split(" ")[0]} <br /> {post.date.split(" ")[1]}
            </span>
            <p className="text-white hover:text-orange-400 text-sm font-semibold leading-tight">
                {post.title}
            </p>
        </div>
    </Link>
);


const BlogSidebar = () => (
    <aside className="lg:col-span-1 p-6 lg:p-0 lg:ml-8 sticky top-0">


        <div className="mb-10">
            <h3 className="text-xl font-bold border-b-2 border-orange-600 pb-2 mb-6">
                Recent Posts
            </h3>
            {mockRecentPosts.map(post => (
                <RecentPostItem key={post.id} post={post} />
            ))}
        </div>


        <div className="mt-10 pt-6 border-t border-gray-700">
            <h3 className="text-xl font-bold border-b-2 border-orange-600 pb-2 mb-4">
                About Us
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
                "Welcome to My TastyBite website Blog, your daily source for delicious food inspiration!
                 We believe that great cooking shouldn't be complicated.
                 Our mission is simple: to share mouth-watering, tested recipes,
                 smart kitchen tips, and easy-to-follow guides that empower you to create amazing meals every day.
                 Whether you're a beginner cook or a seasoned home chef,
                 join us as we explore the best flavors the culinary world has to offer."
            </p>
        </div>


        <div className="mt-10 pt-6 border-t border-gray-700">
            <h3 className="text-xl font-bold border-b-2 border-orange-600 pb-2 mb-6">
                Tags
            </h3>
            <div className="flex flex-wrap gap-2">
                {mockTags.map(tag => (
                    <Link
                        key={tag}
                        to={`/blog/tag/${tag.toLowerCase()}`}
                        className="text-xs px-3 py-1 border border-gray-600 text-gray-400 rounded-md hover:bg-gray-700 hover:text-orange-400 transition"
                    >
                        {tag}
                    </Link>
                ))}
            </div>
        </div>
    </aside>
);



const MainBlogPostCard = ({ post }) => {
   
    const isVideo = typeof post.image === 'string' && post.image.toLowerCase().endsWith('.mp4');
    
 
    const mediaHeightClass = "h-96"; 

    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl mb-12">

         
            <div className={`relative ${mediaHeightClass}`}>
                {isVideo ? (
                    <video
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover" 
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover" 
                    />
                )}
            </div>


   
            <div className="p-8 flex items-start">

         
                <div className="flex flex-col items-center bg-orange-600 text-black p-3 w-16 h-20 flex-shrink-0 mr-6 border-b-4 border-gray-300">
                    <span className="text-3xl font-extrabold">{post.date.split(" ")[0]}</span>
                    <span className="text-sm font-semibold uppercase">{post.date.split(" ")[1]}</span>
                </div>


                <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-white mb-3 hover:text-orange-400 transition">
                        {post.title}
                    </h2>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                        {post.excerpt}
                    </p>

                    <Link
                        to={`/blog/${post.id}`}
                        className="inline-block px-6 py-3 bg-orange-600 text-black font-semibold rounded-md hover:bg-orange-700 transition duration-300"
                    >
                        READ MORE
                    </Link>
                </div>
            </div>
        </div>
    );
};



function BlogPage() {
    return (
        <div className="bg-black text-white min-h-screen">


            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={blogHeroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative text-center max-w-4xl px-4 z-10">
                    <h1 className="text-6xl font-extrabold text-orange-400 drop-shadow-lg">
                        Welcome To My Food Blog
                    </h1>
                    <p className="text-xl mt-4 text-gray-200">
                        Discover delicious recipes, cooking tips, and food inspiration.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-6 inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-orange-500 hover:border-orange-500 hover:text-black transition duration-300"
                    >
                        Subscribe Now
                    </Link>
                </div>
            </section>

            <hr className="border-gray-800" />

         
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">


                    <div className="lg:col-span-2">
                        {mockMainPosts.map(post => (
                            <MainBlogPostCard key={post.id} post={post} />
                        ))}
                    </div>

                    <BlogSidebar />
                </div>
            </section>

            <hr className="border-gray-800 my-12" />


            <section className="bg-gray-900 py-16 px-6 text-center">
                <h2 className="text-4xl font-bold text-orange-400 mb-4">Get Weekly Recipes 🍽️</h2>
                <p className="text-gray-300 mb-6">
                    Join our yummy newsletter for tasty recipes and cooking tips.
                </p>

                <div className="max-w-md mx-auto flex gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-md text-black"
                    />
                    <button className="px-6 py-3 bg-orange-500 rounded-md font-semibold hover:bg-orange-600 transition">
                        Subscribe
                    </button>
                </div>
            </section>

        </div>
    );
}

export default BlogPage;