import React from 'react'
import './index.css'


const InputFields = () => {
  return (
    <div className='input-fields-container'>
       <div className='options-group-container'>
        <div className='options-group'>
            <label htmlFor="location">Location</label>
            <select id='location' className='input-bar'>
                <option value="bhanu">ALL</option>
                <option value="bhanu">Banglore</option>
                <option value="bhanu">Hyderabad</option>
                <option value="bhanu">Tirupati</option>
                <option value="bhanu">Nellore</option>
            </select>
        </div>
        <div className='options-group'>
            <label htmlFor="property">Property Types</label>
            <select id='property' className='input-bar'>
                <option value="bhanu">ALL Types</option>
                <option value="bhanu">Appartment</option>
                <option value="bhanu">Farmland</option>
                <option value="bhanu">Villa</option>
                <option value="bhanu">Plot</option>
            </select>
        </div>
       </div>

       <ul className='buttons-list'>
            <li className='item'>All</li>
            <li className='item'>PLOT</li>
            <li className='item'>VILLA</li>
            <li className='item'>FORMLAND</li>
            <li className='item'>APPARTMENT</li>
       </ul>
    </div>
  )
}

export default InputFields