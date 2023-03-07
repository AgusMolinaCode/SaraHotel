import React from 'react'
import 'animate.css';
import { AiFillStar } from 'react-icons/ai';

const Hero = () => {
    return (
        <div>
            <div className="h-[600px] w-full pt-[5rem] bg-cover bg-fixed bg-no-repeat 
        bg-[url('https://media.istockphoto.com/id/178574094/es/foto/seascape-tropical.jpg?s=612x612&w=0&k=20&c=lqsnkL7pnv5aeDdNHD1Qlhruju3OX5SlnsW-gSoolos=')]
        md:bg-[url('https://res.cloudinary.com/dkrxctgeq/image/upload/v1677201304/fondo_whv1e9.jpg')]">




                <div className=''>

                    <div className='flex justify-center animate__animated animate__delay-1s mt-10 md:mt-0 animate__bounceInLeft'>
                        <AiFillStar size={35} /><AiFillStar size={35} /><AiFillStar size={35} /><AiFillStar size={35} /><AiFillStar size={35} />
                    </div>

                    <h1 className='text-center  font-secundario animate__animated animate__delay-1s animate__bounceInRight font-bold text-3xl'>Sara Resort Luxury</h1>

                    <div className=''>
                        <h1 className='text-center animate__animated animate__delay-2s mt-20 md:mt-2 font-[900] text-black font-principal pt-3 lg:text-6xl animate__zoomIn text-5xl '>DISCOVER THE REAL PARADISE</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero