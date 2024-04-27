
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';


const Home = () => {
    return (
        <div className='roboto mt-10'>

            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // autoplay={{
                //     delay: 2000,
                //     disableOnInteraction: false,
                //     effect: "fade"
                // }}

            >
                <SwiperSlide>
                    <div className="w-full h-[500px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center bg-cyan-100">

                        <img src={s1} className="w-[340px] md:w-[600px] rounded-2xl mb-8 md:mb-0 mt-8 md:mt-0 ml-0 md:ml-40" />
                        <div className='w-[340px] md:w-[600px] bg-stone-400 bg-opacity-75 p-8 rounded-xl mb-8 md:mb-0 absolute ml-0 md:ml-20 lg:ml-[450px] mt-40 md:mt-0 z-20'>
                            <h2 className='text-2xl md:text-4xl font-extrabold text-orange-900 mb-5'>
                                Folded Splendor: Masterful Paper Crafts
                            </h2>
                            <p className='text-sm font-medium text-yellow-950'>Delve into the intricate world of paper crafting, where delicate folds and precise cuts transform humble sheets into breathtaking creations. Explore a myriad of techniques and designs to ignite your creativity.</p>
                        </div>
                    </div>

                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="w-full h-[500px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center bg-cyan-100">

                        <img src={s2} className="w-[340px] md:w-[600px] rounded-2xl mb-8 md:mb-0 mt-8 md:mt-0 ml-0 md:ml-40" />
                        <div className='w-[340px] md:w-[600px] bg-stone-400 bg-opacity-75 p-8 rounded-xl mb-8 md:mb-0 absolute ml-0 md:ml-20 lg:ml-[450px] mt-40 md:mt-0'>
                            <h2 className='text-2xl md:text-4xl font-extrabold text-orange-900 mb-5'>
                            Glass Mosaic Magic: Crafting with Brilliance
                            </h2>
                            <p className='text-sm font-medium text-yellow-950'>Discover the captivating artistry of glass mosaics, where fragments of color come together to form dazzling masterpieces. Unlock the secrets of glass cutting, arrangement, and grouting to bring your visions to life.</p>
                        </div>
                    </div>

                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="w-full h-[500px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center bg-cyan-100">

                        <img src={s3} className="w-[340px] md:w-[600px] rounded-2xl mb-8 md:mb-0 mt-8 md:mt-0 ml-0 md:ml-40" />
                        <div className='w-[340px] md:w-[600px] bg-stone-400 bg-opacity-75 p-8 rounded-xl mb-8 md:mb-0 absolute ml-0 md:ml-20 lg:ml-[450px] mt-40 md:mt-0'>
                            <h2 className='text-2xl md:text-4xl font-extrabold text-orange-900 mb-5'>
                            Quilled Wonders: Sculpting with Paper Strips
                            </h2>
                            <p className='text-sm font-medium text-yellow-950'>Journey into the mesmerizing realm of quilling, where slender paper strips are coaxed into intricate shapes and designs. Learn the art of rolling, shaping, and arranging to craft stunning three-dimensional artworks.</p>
                        </div>
                    </div>

                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="w-full h-[500px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center bg-cyan-100">

                        <img src={s4} className="w-[340px] md:w-[600px] rounded-2xl mb-8 md:mb-0 mt-8 md:mt-0 ml-0 md:ml-40" />
                        <div className='w-[340px] md:w-[600px] bg-stone-400 bg-opacity-75 p-8 rounded-xl mb-8 md:mb-0 absolute ml-0 md:ml-20 lg:ml-[450px] mt-40 md:mt-0'>
                            <h2 className='text-2xl md:text-4xl font-extrabold text-orange-900 mb-5'>
                            Fused Glass Fantasies: Crafting with Heat and Color
                            </h2>
                            <p className='text-sm font-medium text-yellow-950'>Immerse yourself in the process of fused glass art, where heat and color merge to create striking compositions. Explore techniques such as kiln-forming and glass layering to produce unique and luminous pieces.</p>
                        </div>
                    </div>

                </SwiperSlide>


                
            </Swiper>

        </div>

    );
};

export default Home;