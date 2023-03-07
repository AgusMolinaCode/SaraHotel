import React from 'react'
import { RxDividerHorizontal } from "react-icons/rx";

const Presentacion = () => {
  return (
    <div className='w-full p-2 mt-[10rem] grid  lg:flex mx-auto gap-4 lg:w-[1200px]'>
      <div className='w-full'>
        <h1 className='font-secundario text-neutral-400 text-[3.33rem]'>RESORT SARA. SINCE 2018</h1>
        <h2 className='font-secundario text-neutral-400 text-lg mt-5'>HIGH QUALITY ACCOMMODATION SERVICES</h2>
        <hr class='linea' />
        <p className='font-secundario text-md w-full lg:w-[683px]'>Located in the heart of the Caribbean, this luxurious all-inclusive hotel is the ultimate destination for travelers seeking a truly indulgent beach vacation. Set against a backdrop of turquoise waters and powdery white sand beaches, this hotel offers guests the chance to unwind and relax in a serene tropical paradise.

        The hotel boasts a range of upscale amenities and services, including several gourmet restaurants serving an array of international cuisines, multiple bars and lounges, a full-service spa, and a state-of-the-art fitness center. With everything included in the package, guests can savor delectable cuisine and drinks without worrying about the bill. Moreover, the hotel offers a variety of activities and excursions, from snorkeling and scuba diving to sunset cruises and beachfront yoga classes.

        The luxurious rooms and suites at the hotel are exquisitely furnished and feature breathtaking views of the Caribbean Sea. Each room comes equipped with modern amenities, including flat-screen TVs, air conditioning, and private balconies or terraces. For guests seeking an even more luxurious experience, the hotel offers premium suites with private plunge pools, butler service, and exclusive access to a VIP lounge.</p>
        <hr class='linea' />
        <div className='flex flex-wrap items-center gap-2'>
          <h3 className='font-secundario text-md'>Recommended on:</h3>
          <img src="https://preview.eagle-themes.com/html/himara/images/providers/provider-1.png" alt="" />
          <img src="https://preview.eagle-themes.com/html/himara/images/providers/provider-2.png" alt="" />
          <img src="https://preview.eagle-themes.com/html/himara/images/providers/provider-3.png" alt="" />
          <img src="https://preview.eagle-themes.com/html/himara/images/providers/provider-4.png" alt="" />
        </div>
      </div>

      <div className='mb-10'>
        <img className='w-[450px] lg:w-[800px] shadow-2xl rounded-3xl flex justify-center mx-auto h-[550px] lg:h-[650px]' src="https://i.pinimg.com/originals/8f/2e/22/8f2e22e370c73ee49a31e47e322e4368.jpg" alt="" />
      </div>
    </div>
  )
}

export default Presentacion