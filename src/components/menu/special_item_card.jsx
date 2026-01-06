// --- Sub-Component: SpecialItemCard for Swiper (Unchanged) ---
const SpecialItemCard = ({ item }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-xl h-full transition-all duration-300 transform border border-transparent hover:border-orange-400">
        <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-1">
                {item.name}
            </h3>
            <p className="text-3xl font-extrabold text-yellow-400">
                {item.price}
            </p>
        </div>
    </div>
);
export default SpecialItemCard