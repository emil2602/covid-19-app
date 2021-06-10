
import React from 'react'
import './Modal.css'

const Modal = (props) => {

  const {
       active,
       setActive,
       Country,
       TotalConfirmed,
       TotalDeaths,
       TotalRecovered
    } = props

  return (
    <div className=  {active ? 'modal-window' : 'modal-hide'}>
           <div className="modal-window__content">
           <h2 className='modal-window-title'>{Country}</h2>
           <ul className='modal-window-list'>
               <li className='modal-window-list__item confirmed'>
                 <p className='modal-window-list__item_title'>Total Confirmed</p>
                 <span className='modal-window-list__item_total'>{TotalConfirmed}</span>
               </li>
               <li className='modal-window-list__item deaths'>
                 <p className='modal-window-list__item_title'>Total Deaths</p>
                 <span className='modal-window-list__item_total'>{TotalDeaths}</span>
               </li>
               <li className='modal-window-list__item recovered'>
                 <p className='modal-window-list__item_title'>Total Recovered</p>
                 <span className='modal-window-list__item_total'>{TotalRecovered}</span>
               </li>
           </ul>
           <button className ='modal-window-btn' onClick={() => setActive(false)}>OK</button>
         </div>
    </div>
  )
}

export default Modal