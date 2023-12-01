import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export const DataReservationPage = () => {

    let { state } = useLocation()
    console.log(state)

    useEffect(() => {
        axios.get(`https://kaloscorp.cyclic.app/kalos/reserva/id/${state.id_reserva}`)
            .then(({ data }) => {
                
                console.log((data));

            })
    }, [])

  return (
    <div>DataReservationPage{state.id_reserva}</div>
  )
}
