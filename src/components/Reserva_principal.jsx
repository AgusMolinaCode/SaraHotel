import React, { useState } from 'react'
import { getFirestore, addDoc, collection, doc, updateDoc } from "firebase/firestore";

const Reserva_principal = () => {
  const today = new Date().toISOString().substr(0, 10); // Obtener la fecha actual en formato ISO yyyy-mm-dd
  const [checkInDate, setCheckInDate] = useState(today); // Estado local para almacenar la fecha de check-in seleccionada

  const handleCheckInDateChange = (event) => {
    setCheckInDate(event.target.value); // Actualizar el estado local con la fecha de check-in seleccionada
  };

  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value || '',
    });
  };

  const order = {
    client: {
      name: form.name,
      email: form.email,
      checkin: form.checkin,
      checkOut: form.checkOut,  
    },
  }  

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => console.log(id));
  };

  return (
    <div id='reserve'>
      <div className='lg:h-[150px] h-full bg-principal mt-5 shadow-2xl m-3 rounded-2xl grid w-[300px] md:w-[700px] lg:flex lg:w-[1200px] mx-auto'>
        <div className='flex flex-col justify-center m-2'>
          <label className='text-center lg:w-[180px] md:w-[700px] w-[300px] font-bold font-secundario text-2xl' htmlFor='nombre'>
            Name:
          </label>
          <input 
          type='text' 
          placeholder='Your name' 
          className='input input-bordered input-accent md:w-[686px] lg:w-[180px] w-[286px]' 
          onChange={handleChange}
          name='name'
          />
        </div>

        <div className='flex flex-col justify-center m-2'>
          <label className='text-center lg:w-[180px] w-[300px] md:w-[700px] font-bold font-secundario text-2xl' htmlFor='nombre'>
            Email:
          </label>
          <input 
          type='email' 
          placeholder='Your name' 
          className='input input-bordered input-accent lg:w-[180px] md:w-[686px] w-[286px]'
          onChange={handleChange}
          name='email'
          />
        </div>

        <div className='flex flex-col justify-center m-2'>
          <label className='text-center lg:w-[180px] w-[300px] md:w-[700px] font-bold font-secundario text-2xl' htmlFor='nombre'>
            Check-in:
          </label>
          <input
            type='date'
            placeholder='Select a date'
            value={checkInDate}
            min={today}
            onChange={(event) => {
              handleCheckInDateChange(event);
              handleChange(event);
            }}
            className='input input-bordered input-accent lg:w-[180px] md:w-[686px] w-[286px]'
            name='checkin'
          />
        </div>

        <div className='flex flex-col justify-center m-2'>
          <label className='text-center lg:w-[180px] w-[300px] md:w-[700px] font-bold font-secundario text-2xl' htmlFor='nombre'>
            Check-out:
          </label>
          <input
            type='date'
            placeholder='Select a date'
            min={checkInDate} // Establecer la fecha mínima permitida como la fecha de check-in seleccionada
            className='input input-bordered input-accent lg:w-[180px] md:w-[686px] w-[286px]'
            onChange={handleChange}
            name='checkOut'
          />
        </div>

          <div className="form-control flex flex-col lg:w-[180px] w-[300px] justify-center m-2">

              <label className="text-center lg:w-[180px] w-[286px] md:w-[700px] font-bold font-secundario text-2xl">
                  Guests:
              </label>

              <select 
              className="select lg:w-[180px] md:w-[686px] w-[286px] select-bordered" 
              // onChange={handleChange} 
              // value={selectedOption}
              name='guests'
              >
                  <option disabled selected>Guests</option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                  <option value="option4">4</option>
                  <option value="option5">5</option>
              </select>

          </div>

          <div className='flex flex-col items-center w-[300px] md:w-[700px] justify-center mt-8'>
              <button 
              className='text-center w-[180px] bg-neutral-800 flex items-center rounded-2xl text-white font-bold font-secundario text-lg btn mb-5 lg:mb-0' 
              htmlFor='nombre'
              onClick={handleClick}
              >
                <span className='mt-1'>Reserve Now</span>
              </button>
          </div>

      </div>
    </div>   
  );
};

export default Reserva_principal;
