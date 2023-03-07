import React,{useState,useEffect} from 'react'

const Clima_principal = () => {

   const [clima,setClima] = useState({})

   useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=11&lon=-63&units=metric&appid=b2d8ec63c898cd0a46d0fd221a00f1a4", requestOptions)
      .then(response => response.json())
      .then(result => setClima(result))
      .catch(error => console.log('error', error));
   }, []);
    

   const fecha = new Date();

   // Crea un objeto options con las opciones de formato que deseas
   const options = { 
     year: 'numeric', 
     month: 'long', 
     day: 'numeric' 
   };

   const fechaFormateada = fecha.toLocaleDateString('en-EN', options);

  return (
    <div className='w-full  lg:w-[1200px] pt-20 m-2 mx-auto'>
      <hr />
        <h1 className='text-4xl m-5 font-secundario text-center text-neutral-500'>Current Weather in the Resort:</h1>
        <h3 className='text-2xl m-5 font-principal text-center text-neutral-500'>{fechaFormateada}</h3>

        <div className=' grid lg:flex justify-around '>
            <div className='flex-col text-center'>
              <h3 className='text-lg font-secundario text-neutral-500'>City name:</h3>
              <h1 className='text-3xl font-secundario mb-5'>{clima.name}</h1>
              <p className='text-lg font-secundario text-neutral-500'>Current Temperature:</p>
              <p className='text-3xl font-secundario mb-5'>{clima.main?.temp} °C</p>
              
            </div>  

            <div className='flex-col text-center'>
              <p className='text-lg font-secundario text-neutral-500'>Sea Level</p>
              <p className='text-3xl font-secundario mb-5'>{clima.main?.sea_level} Mts</p>
              <p className='text-lg font-secundario text-neutral-500'>Feels Like:</p>
              <p className='text-3xl font-secundario mb-5'>{clima.main?.feels_like} ºC</p>
            </div>  

            <div className='flex-col text-center'>
              <h3 className='text-lg font-secundario text-neutral-500'>Actual Weather</h3>
              <h1 className='text-3xl font-secundario mb-5'>{clima.weather && clima.weather[0].main}</h1>
              <p className='text-lg font-secundario text-neutral-500'>Humidity:</p>
              <p className='text-3xl font-secundario mb-5'>{clima.main?.humidity} %</p>
            </div>  


        </div>    

      <hr />
    </div>
  )
}

export default Clima_principal