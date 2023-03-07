import React,{useState,useEffect} from 'react'
import { AiFillStar } from 'react-icons/ai';
import { FaCoffee, FaShower, FaWifi,FaAccessibleIcon } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import firebaseConfig from "../firebase/config";
import { initializeApp } from "firebase/app";
import 'animate.css';
import { Link } from 'react-router-dom';



const Rooms = () => {

  const bgImgUrl = "https://res.cloudinary.com/dkrxctgeq/image/upload/v1677884941/fondo_rooms-min_uluphr.jpg";
  const divStyle = { backgroundImage: `url(${bgImgUrl})`, };
  

  const [room,setRoom] = useState([])

  useEffect(() => {
      const querydb = getFirestore()
      const queryCollection = collection(querydb, 'rooms')
      getDocs(queryCollection)
        .then( (res) => setRoom(res.docs.map((product) => ({ id: product.id, ...product.data() }))));  
  }, [])

  return (
    <div className='pt-[4.1rem]'>
      <div style={divStyle} className='bg-no-repeat bg-cover h-[18rem]'></div>
      <div className="absolute top-0 left-0 w-full h-[22.2rem] bg-black/40">
        <h1 className='flex justify-center text-[4rem]  md:text-[6rem] font-principal z-10 text-white animate__animated animate__delay-1s animate__zoomIn  pt-[8.2rem]'>ROOMS.</h1>
      </div>

      <div className='w-full lg:w-[1200px] m-2 mx-auto'>

        <div className='grid'>

        {room.map(item => ( 

          <div className='grid lg:flex p-2 mx-auto mt-10 mb-10 w-full'>
            <img src={item.image} alt={item.name} className='w-[400px] rounded-lg' />

            <div className='flex-col p-2'>
              <h1 className='text-4xl font-secundario text-neutral-500'>{item.name}</h1>

              {item.name === 'SINGLE ROOM' ?
              <div className='flex items-center'>    
                  <AiFillStar size={23} className='text-dorado' />
                  <AiFillStar size={23} className='text-dorado' />
                  <AiFillStar size={23} className='text-dorado' />   
                <h3 className='font-secundario flex items-center pt-1 pl-2 text-neutral-400 text-xs'>3.00 BASED ON 3 RATINGS</h3>
              </div>
              : null }

              {item.name === 'DOUBLE ROOM' ?
              <div className='flex items-center'>    
                  <AiFillStar size={23} className='text-dorado' />
                  <AiFillStar size={23} className='text-dorado' />
                  <AiFillStar size={23} className='text-dorado' />   
                  <AiFillStar size={23} className='text-dorado' />   
                <h3 className='font-secundario flex items-center pt-1 pl-2 text-neutral-400 text-xs'>4.00 BASED ON 3 RATINGS</h3>
              </div>
              : null }

              {item.name === 'DELUXE ROOM' ?
              <div className='flex items-center'>    
                  <AiFillStar size={23} className='text-dorado' />
                  <AiFillStar size={23} className='text-dorado' />
                  <AiFillStar size={23} className='text-dorado' />   
                  <AiFillStar size={23} className='text-dorado' />   
                  <AiFillStar size={23} className='text-dorado' />   
                <h3 className='font-secundario flex items-center pt-1 pl-2 text-neutral-400 text-xs'>5.00 BASED ON 3 RATINGS</h3>
              </div>
              : null }

              <p className='font-secundario text-neutral-500 pt-1'>{item.description_short}</p>

              <div className='flex text-neutral-500 mt-4 gap-3'>

                {item.name === 'SINGLE ROOM' ?
                null : 
                <div className='border p-3'>
                  <FaCoffee size={21} />
                </div>
                }

                {item.name === 'SINGLE ROOM' || 'DOUBLE ROOM' ?
                null : 
                <div className='border p-3'>
                  <FaWifi size={20} />
                </div>
                }

                {item.name === 'DELUXE ROOM' ? 
                <div className='border p-3'>
                  <FaWifi size={20} />
                </div> : null
                }
                
                <div className='border p-3'>
                  <RiComputerLine size={20} />
                </div>

                <div className='border p-3'>
                  <FaShower size={20} />
                </div>

                

              </div>

                <Link to={`/RoomCard/${item.id}`}>
                  <button className=' btn p-2 pt-3 mt-6 bg-principal hover:bg-hover border-none text-black font-secundario'>
                      VIEW MORE
                  </button>
                </Link>
                
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Rooms