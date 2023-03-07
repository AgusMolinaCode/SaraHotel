import React from 'react'
import Reserva_principal from '../components/Reserva_principal';
import Presentacion from '../components/Presentacion';
import Rooms_principal from '../components/Rooms_principal';
import Service_principal from '../components/Service_principal';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Clima_principal from '../components/Clima_principal';

const Main = () => {
  return (
    <div>
        <Hero />
        <Reserva_principal/>
        <Clima_principal />
        <Presentacion />
        <Rooms_principal />
        <Service_principal/>
        <Footer />
    </div>
  )
}

export default Main