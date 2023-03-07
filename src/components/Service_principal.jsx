import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Service_principal = () => {

    return (
        <div className='w-full lg:w-[1200px] pb-10 m-2 mx-auto'>
            <h1 className='font-secundario text-neutral-400 pt-20 m-2 text-[3.33rem]'>SERVICES.</h1>
            <h2 className='font-secundario text-neutral-400 m-2 text-lg mt-5'>CHECK OUT OUR AWESOME SERVICES</h2>
            <hr class='linea' />
            <p className='font-secundario m-2 text-md w-full'>This hotel offers a wide range of services and amenities designed to enhance the guest experience and make their stay as comfortable and enjoyable as possible. From on-site dining options to fitness facilities, there is something for everyone at this hotel.

            </p>
            <hr class='linea' />

            <div className=' p-2 flex flex-wrap gap-5 '>
                <div className='w-full lg:max-w-[48%]'>

                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div>
                            <div className='relative'>
                                <SwiperSlide className='relative'>
                                    <img src="https://preview.eagle-themes.com/html/himara/images/services/spa.jpg" alt="" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                                    <h1 className='absolute bottom-4 font-secundario text-white text-2xl lg:text-4xl left-2 font-bold'>SPA</h1>
                                </SwiperSlide>
                            </div>
                            <div className='relative'>
                                <SwiperSlide className='relative'>
                                    <img src="https://preview.eagle-themes.com/html/himara/images/services/restaurant.jpg" alt="" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                                    <h1 className='absolute bottom-4 font-secundario text-white text-2xl lg:text-4xl left-2 font-bold'>RESTAURANT</h1>
                                </SwiperSlide>
                            </div>
                            <div className='relative'>
                                <SwiperSlide className='relative'>
                                    <img src="https://preview.eagle-themes.com/html/himara/images/services/swimming.jpg" alt="" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                                    <h1 className='absolute bottom-4 font-secundario text-white text-2xl lg:text-4xl left-2 font-bold'>SWIMMING</h1>
                                </SwiperSlide>
                            </div>
                            <div className='relative'>
                                <SwiperSlide className='relative'>
                                    <img src="https://preview.eagle-themes.com/html/himara/images/services/conference.jpg" alt="" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                                    <h1 className='absolute bottom-4 font-secundario text-white text-2xl lg:text-4xl left-2 font-bold'>CONFERENCE</h1>
                                </SwiperSlide>
                            </div>
                        </div>
                    </Swiper>

                </div>

                <div className='flex flex-col mx-auto w-full lg:max-w-[50%] gap-4 '>
                    <div className=''>
                        <h1 className='font-secundario text-3xl text-neutral-400'>SPA</h1>
                        <p className='font-secundario text-md'>Indulge in a pampering spa treatment and rejuvenate your mind, body, and soul. Our experienced therapists offer a range of massages, facials, and body treatments to help you unwind and feel your best.</p>
                    </div>
                    <div className=''>
                        <h1 className='font-secundario text-3xl text-neutral-400'>RESTAURANT</h1>
                        <p className='font-secundario text-md'>Savor delicious cuisine at our on-site restaurant, serving a variety of dishes inspired by local and international flavors. With a cozy atmosphere and exceptional service, it's the perfect place to enjoy a memorable dining experience.</p>
                    </div>
                    <div className=''>
                        <h1 className='font-secundario text-3xl text-neutral-400'>SWIMMING</h1>
                        <p className='font-secundario text-md'>Enjoy a refreshing dip in our sparkling swimming pool. With crystal-clear waters and a peaceful ambiance, it's the perfect place to relax and soak up the sun.</p>
                    </div>
                    <div className=''>
                        <h1 className='font-secundario text-3xl text-neutral-400'>CONFERENCE</h1>
                        <p className='font-secundario text-md'>Host your next meeting or event at our state-of-the-art conference center. With a variety of flexible spaces and advanced technology, we provide everything you need to make your event a success.</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Service_principal