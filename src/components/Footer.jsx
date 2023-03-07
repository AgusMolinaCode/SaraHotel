import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-[10rem]'>
        <footer className="footer items-center p-2 bg-principal text-neutral-content">
             
            <div className="flex justify-center mx-auto">
                <a href="https://github.com/AgusMolinaCode" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></a>
                <p className='text-xl mt-1'>Agustin Molina</p>
                <a href="https://www.linkedin.com/in/agustin-molina-994635138/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
            </div>
        </footer>
    </div>
  )
}

export default Footer