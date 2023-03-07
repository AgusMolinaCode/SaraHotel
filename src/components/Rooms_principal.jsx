import React from 'react'
import { Link } from 'react-router-dom'

const Rooms_principal = () => {
  return (
    <div className='w-full p-2 bg-neutral-200'>
        <div className='w-full lg:w-[1200px] mx-auto'>
            <h1 className='font-secundario text-neutral-400 pt-20 text-[3.33rem]'>OUR ROOMS.</h1>
            <h2 className='font-secundario text-neutral-400 text-lg mt-5'>OUR FAVORITES ROOMS</h2>
            <hr class='linea' />
            <p className='font-secundario text-md w-full'>There are three different types of rooms available at this hotel: single, deluxe, and double. A single room is perfect for solo travelers and comes with all the basic amenities needed for a comfortable stay. A deluxe room offers additional space and luxury amenities such as a seating area and a mini-fridge. A double room is ideal for couples or friends traveling together, with either two comfortable beds or one large double bed. Each room type provides a unique and comfortable experience, tailored to meet the needs of different types of travelers.</p>
            <hr class='linea' />

            <Link to={'/rooms'}>
                <button className=' btn p-2 pt-3 bg-principal hover:bg-hover border-none text-black font-secundario'>
                    VIEW MORE
                </button>
            </Link>

            <div className='grid lg:flex mt-10 mx-auto p-2 pb-20 justify-around gap-4'>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://static.wixstatic.com/media/5a3cec_f794910db65c496ebc08bb3991206273~mv2.jpg/v1/fill/w_1098,h_732,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5a3cec_f794910db65c496ebc08bb3991206273~mv2.jpg" alt="single room" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-secundario font-bold">SINGLE ROOM</h2>
                        <p className='font-secundario text-md'>Enjoy Our Single Room</p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://static.wixstatic.com/media/5a3cec_98fda2ecbd574baca109c1e7fbd90cc6.jpg/v1/fill/w_1155,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5a3cec_98fda2ecbd574baca109c1e7fbd90cc6.jpg" alt="double room" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-secundario font-bold">DOUBLE ROOM</h2>
                        <p className='font-secundario text-md'>Enjoy Our Double Room</p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://static.wixstatic.com/media/5a3cec_d8248528cad94b4488ad69de2047ace6.jpg/v1/fill/w_1155,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5a3cec_d8248528cad94b4488ad69de2047ace6.jpg" alt="deluxe room" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-secundario font-bold">DELUXE ROOM</h2>
                        <p className='font-secundario text-md'>Enjoy Our Deluxe Room</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Rooms_principal