import { SwiperSlide } from "swiper/react"
import { Swiper } from "swiper/react"
import SpecialItemCard from "./special_item_card"
import { EffectCoverflow, Pagination } from "swiper/modules";
import ImageList from "./specialItems_imgs"
const SpecialItemContainer = () =>{
    const specials = [
        { name: "Roasted Chicken", price: "$55", image: ImageList.SpecialChicken },
        { name: "Baked Crab Cheese", price: "$66", image: ImageList.SpecialCrab },
        { name: "Foie Gras", price: "$99", image: ImageList.SpecialFoieGras },
        { name: "Chicken Satay", price: "$56", image: ImageList.SpecialSatay },
        { name: "Spicy Tacos", price: "$32", image: ImageList.SpecialTaco },
        { name: "Truffle Pasta", price: "$78", image: ImageList.SpecialPasta },
        { name: "Grilled Salmon", price: "$49", image: ImageList.SpecialSalmon },
        { name: "Premium Steak", price: "$120", image: ImageList.SpecialSteak },
        { name: "Jumbo Prawns", price: "$75", image: ImageList.SpecialPrawn },
        { name: "Chocolate Lava", price: "$28", image: ImageList.SpecialDessert },
    ];
    
    return (
                    <div className="relative max-w-7xl mx-auto px-4">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={{ clickable: true }}
                            modules={[EffectCoverflow, Pagination]}
                        >
                            {specials.map((item, index) => (
                                <SwiperSlide 
                                    key={index}
                                 
                                    className="!w-[300px] !h-[400px] my-6" 
                                >
                                    <SpecialItemCard item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

    )
}
export default SpecialItemContainer