import React from 'react'
import {RiSendPlaneFill} from 'react-icons/ri'
import {FaComment,FaPhoneAlt,FaInfoCircle,FaLocationArrow,FaAddressBook} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import Swal from 'sweetalert2'


const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe por defecto
    
        const nameInput = event.target.elements.name; // Obtiene el input de nombre del formulario
        const name = nameInput.value.trim(); // Obtiene el valor del input y elimina los espacios en blanco al inicio y al final
    
        if (name.length < 5) { // Comprueba si el nombre tiene menos de 5 caracteres
            Swal.fire({
                icon: 'error',
                title: 'Very short name...',
                text: 'Put full name',
              })// Muestra una alerta al usuario
          nameInput.focus(); // Hace foco en el input de nombre para que el usuario pueda corregirlo
          return; // Termina la ejecución de la función si el nombre no es válido
        }
    
        const phoneInput = event.target.elements.phone; // Obtiene el input de teléfono del formulario
        const phone = phoneInput.value.trim(); // Obtiene el valor del input y elimina los espacios en blanco al inicio y al final

        if (phone.length < 8) { // Comprueba si el teléfono tiene menos de 8 dígitos
            Swal.fire({
                icon: 'error',
                title: 'Very short number phone...',
                text: 'Put full number',
              }); // Muestra una alerta al usuario
        phoneInput.focus(); // Hace foco en el input de teléfono para que el usuario pueda corregirlo
        return; // Termina la ejecución de la función si el teléfono no es válido
        }

        const commentInput = event.target.elements.comment;
        const comment = commentInput.value.trim();

        if (comment.length < 15) {
            Swal.fire({
                icon: 'error',
                title: 'Very short comment...',
                text: 'Put full message',
              });
            commentInput.focus();
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent.',
          });
          event.target.reset();

      }
    
  return (
    <div className='pt-[4.1rem]'>

            <div className='w-[1200px]  mx-auto pt-10'>
                <h1 className='font-secundario text-neutral-400 m-2 text-[3.33rem]'>CONTACT.</h1>
                <h2 className='font-secundario text-neutral-400 m-2 text-md flex flex-wrap lg:text-lg uppercase'>contact us</h2>
                <hr class='linea' />
            </div>
        
        <div className='grid lg:flex justify-center w-full gap-10 mx-auto'>

            <form onSubmit={handleSubmit}>

                <div className='flex-col mt-10 mb-10 bg-principal p-2 lg:p-10 rounded-2xl shadow-2xl justify-center mx-auto'>
                    
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor="name" className="label flex justify-center">
                            <FaInfoCircle size={18} className='mr-3'/><span className="label-text text-center mt-[0.35rem] font-secundario text-lg">NAME:</span>
                        </label>
                        <input type="text" id="name" name="name" placeholder="Type your Name here" className="input input-bordered w-[290px] lg:w-[800px] max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label flex justify-center">
                            <MdEmail size={18} className='mr-3'/><span className="label-text text-center mt-[0.35rem] font-secundario text-lg">EMAIL:</span>
                        </label>
                        <input type="email" placeholder="Type your Email here" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label htmlFor="phone" className="label flex justify-center">
                            <FaPhoneAlt size={18} className='mr-3'/><span className="label-text mt-[0.35rem] text-center font-secundario text-lg">PHONE:</span>
                        </label>
                        <input type="tel" pattern="[0-9]{8,}" id="phone" name="phone" placeholder="Type your Phone here" className="input input-bordered w-full font-secundario max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label htmlFor="comment" className="label flex justify-center">
                            <FaComment size={18} className='mr-3'/><span className="label-text mt-[0.35rem] text-center font-secundario text-lg">COMMENT:</span>
                        </label>
                        <textarea type="text" id="comment" name="comment" placeholder="How can we help you?" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div>
                        <button type='submit' className=' text-black font-secundario text-2xl mx-auto mt-10 flex btn justify-center  bg-hover  rounded-2xl cursor-pointer hover:bg-principal duration-500 pl-10 pr-10 mb-5 pt-1'><RiSendPlaneFill size={25} className='mr-3'/><span className='mt-1'>SUBMIT</span></button>
                    </div>

                </div>
            </form>

            <div className='mt-10'>
                <img className='w-[250px] flex justify-center mx-auto rounded-full shadow-2xl' src="https://urbantravel.tur.ar/wp-content/uploads/2019/08/00.jpg" alt="" />
                
                <div className='grid mt-14 gap-2'>
                    <div className='flex justify-center mx-auto items-center gap-2'>
                        <FaLocationArrow size={20}/><span className='text-lg'>Isla Margarita,Venezuela</span>
                    </div>
                    <div className='flex mt-3 justify-center mx-auto items-center gap-2'>
                        <FaAddressBook size={20}/><span className='text-lg'>contact@hotelsara.com</span>
                    </div>
                    <div className='flex mt-3 justify-center mx-auto items-center gap-2'>
                        <FaPhoneAlt size={20}/><span className='text-lg'>11389887585</span>
                    </div>
                </div>

            </div>
        </div>    
    </div>
  )
}

export default Contact