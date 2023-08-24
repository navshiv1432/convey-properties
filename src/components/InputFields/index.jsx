import React from 'react'
import './index.css'


const InputFields = () => {
  return (
    <div className='input-fields-container'>
       <div className='options-group-container'>
        <div className='options-group'>
            <label htmlFor="location" className="label">Location</label>
            <select id='location' className='input-bar'>
                <option value="bhanu" className='opt'>ALL</option>
                <option value="bhanu" className='opt'>Banglore</option>
                <option value="bhanu" className='opt'>Hyderabad</option>
                <option value="bhanu" className='opt'>Tirupati</option>
                <option value="bhanu" className='opt'>Nellore</option>
            </select>
        </div>
        <div className='options-group1'>
            <label htmlFor="property" className="label">Property Types</label>
            <select id='property' className='input-bar'>
                <option value="bhanu" className='opt'>ALL Types</option>
                <option value="bhanu" className='opt'>Appartment</option>
                <option value="bhanu" className='opt'>Farmland</option>
                <option value="bhanu" className='opt'>Villa</option>
                <option value="bhanu" className='opt'>Plot</option>
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