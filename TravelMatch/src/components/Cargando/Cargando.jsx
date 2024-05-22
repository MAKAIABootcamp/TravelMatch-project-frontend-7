import React from 'react'
import viaje from '../../assets/travelC.gif'
import '../../components/Cargando/cargando.scss'

const Cargando = () => {
  return (
    <div className='contenido_cargando'>
      Cargando..
      <img src={viaje} alt="" />
    </div>

    
  )
}

export default Cargando


