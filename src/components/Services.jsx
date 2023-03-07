import React from 'react'
import { RxCheck,RxCross2 } from 'react-icons/rx';

const Services = ({item}) => {
  return (
    
    <div>
                <div>
                    {item.name === 'SINGLE ROOM' ?
                    
                    <div className='grid lg:flex w-full justify-around mb-20'>
                        <div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCross2 size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>DOUBLE BED</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>80 SQ MT</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>2 PERSONS</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>FREE WIFI</h1>
                            </div>
                        </div>

                        <div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCross2 size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>BREAKFAST INCLUDE</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>ROOM SERVICE</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCross2 size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>PRIVATE BALCONY</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>FULL AC</h1>
                            </div>
                        </div>

                        <div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCross2 size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>BEACH VIEW</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCross2 size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>FREE NEWSPAPER</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCross2 size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>FLAT SCREEN TV</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>GYM</h1>
                            </div>
                        </div>
                    </div>

                    :

                    <div className='grid lg:flex w-full justify-around mb-20'>
                        <div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>DOUBLE BED</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>100 SQ MT</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>4 PERSONS</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>FREE WIFI</h1>
                            </div>
                        </div>

                        <div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCross2 size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>BREAKFAST INCLUDE</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>ROOM SERVICE</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>PRIVATE BALCONY</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>FULL AC</h1>
                            </div>
                        </div>

                        <div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCross2 size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>BEACH VIEW</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCross2 size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>FREE NEWSPAPER</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>FLAT SCREEN TV</h1>
                            </div>
                            <div className='flex gap-2 mt-10 items-center'>
                                <RxCheck size={30} className='text-red rounded-full bg-neutral-200'/>
                                <h1 className='text-xl mt-1 font-secundario'>GYM</h1>
                            </div>
                        </div>
                    </div>

                    }
                </div>



                

    </div>            
  )
}

export default Services