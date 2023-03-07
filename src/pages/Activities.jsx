import React,{useState,useEffect} from 'react'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import firebaseConfig from "../firebase/config";
import { initializeApp } from "firebase/app";
import 'animate.css';



const Activities = () => {

    const [activitie,setActivitie] = useState([])

    const bgImgUrl = "https://www.costadeste.com/i/SITE_161213_12163014_WNF14/content/CMS_12132016_124202487_EC52W/5F2A5697-B1D2-D5A6-E7AF3B33872BEDC8.JPG";
    const divStyle = { backgroundImage: `url(${bgImgUrl})`, };

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'blog')
        getDocs(queryCollection)
          .then( (res) => setActivitie(res.docs.map((product) => ({ id: product.id, ...product.data() }))));  
    }, [])

    return (
        <div className='pt-[4.1rem]'>

            <div style={divStyle} className=' bg-center h-[18rem]'></div>

            <div className="absolute top-0 left-0 w-full h-[22.2rem] bg-black/40">
                <h1 className='flex justify-center text-[3rem]  md:text-[6rem] font-principal z-10 text-white animate__animated animate__delay-1s animate__zoomIn  pt-[8.2rem]'>ACTIVITIES.</h1>
            </div>

            <div className='w-full lg:w-[1200px] m-2 mx-auto'>
                
            {activitie.map(item => ( 
                <div className='grid w-full pb-10'>
                        
                    <h1 className='text-center font-secundario text-4xl pb-5 pt-20'>{item.name}</h1>

                    <div className='grid lg:flex p-2'>
                        <img className='rounded-2xl' src={item.image} alt="" />

                        <div className='grid gap-4'>
                            
                            <h2 className='font-secundario px-4 pt-3 text-[1rem]'>{item.text}</h2>

                            <h1 className='px-4 text-2xl font-secundario'>{item.duration}</h1>

                        </div>

                    </div>
                    

                    
                </div>
                ))}
            </div>


        </div>
    )
}

export default Activities