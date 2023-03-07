import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import { Swiper, SwiperSlide } from 'swiper/react';
import { RxCheck } from 'react-icons/rx';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import "../styles2.css";
import Services from '../components/Services';

const RoomCard = () => {

    const { ID } = useParams();

    const [item, setItem] = useState({})

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "rooms", ID);
        getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() }));
    }, [ID]);

    return (
        <div className='pt-[4.1rem]'>

            <div className='lg:w-[1200px] mx-auto mt-5'>
                <h1 className='font-secundario text-neutral-400 text-[3.33rem]'>{item.name}.</h1>
                <hr class='linea' />
            </div>

            <div className='lg:w-[1200px] w-full h-[400px] lg:h-[800px] flex justify-center mx-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={item.image} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={item.image1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={item.image2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={item.image3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={item.image4} alt="" /></SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span className='text-xl' ref={progressContent}></span>
                    </div>
                </Swiper>

            </div>

            <div className='lg:w-[1200px] w-full h-full mx-auto mt-20 p-2'>
                <p class='dropcap'>{item.description}</p>

                <div className='mt-20'>
                    <h1 className='font-secundario text-neutral-400 text-[3.33rem]'>ROOM SERVICE.</h1>
                    <h2 className='font-secundario text-neutral-400 text-lg '>HIGH QUALITY ACCOMMODATION SERVICES</h2>
                    <hr class='linea' />
                </div>

                <div>
                    {item.name === 'DELUXE ROOM' ?
                            <div className='grid lg:flex w-full justify-around mb-20'>
                            
                                <div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>KING BED</h1>
                                    </div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>120 SQ MT</h1>
                                    </div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>2 PERSONS</h1>
                                    </div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>FREE WIFI</h1>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>BREAKFAST INCLUDE</h1>
                                    </div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>ROOM SERVICE</h1>
                                    </div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>PRIVATE BALCONY</h1>
                                    </div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>FULL AC</h1>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>BEACH VIEW</h1>
                                    </div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>FREE NEWSPAPER</h1>
                                    </div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>FLAT SCREEN TV</h1>
                                    </div>
                                    <div className='flex gap-2 mt-10 items-center'>
                                        <RxCheck size={30} className='text-red rounded-full bg-neutral-200' />
                                        <h1 className='text-xl mt-1 font-secundario'>GYM</h1>
                                    </div>
                                </div>

                                
                            </div> 

                            :
                                
                            <Services item={item} />
                    }
                </div> 

                <hr class='linea' />

                <div className='mt-10 mb-20'>
                    <h1 className='font-secundario text-lg'>{item.description2}</h1>
                </div>

            </div> 
        </div>
    )
}

export default RoomCard