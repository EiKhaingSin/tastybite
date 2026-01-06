import { ShoppingBasket } from "lucide-react";


const MenuItemCard = ({ item }) => (
    <div className="flex space-x-6 py-4">
        <div className="flex-shrink-0">
            <div
                className="w-35 h-35 rounded-full bg-gray-800 border-4 border-yellow-500/50 flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <span className="text-xs text-yellow-500 sr-only">{item.name}</span>
            </div>
        </div>

        <div className="flex flex-col justify-between flex-grow">
            <div>
                <h3 className="text-xl font-bold text-white uppercase">{item.name}</h3>
                <p className="text-sm text-gray-400 mt-1 max-w-xs">{item.ingredients}</p>
            </div>

            <div className="flex items-center justify-between mt-3">
                <p className="text-xl font-extrabold text-yellow-500">
                    ${item.price}
                </p>
                <button className="flex items-center px-4 py-2 bg-yellow-600 text-black text-sm font-semibold uppercase rounded-full hover:bg-yellow-500 transition duration-200">
                    GO TO BASKET
                    <ShoppingBasket className="w-4 h-4 ml-2" />
                </button>
            </div>
        </div>
    </div>
);
export default MenuItemCard