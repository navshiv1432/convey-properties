import React from 'react'
import './index.css'
import {BsGridFill} from "react-icons/bs"
import {MdFormatListBulleted} from "react-icons/md"

const projectsData = [
    {
        imageUrl:"https://i.ibb.co/7vGVcrn/open-plots.jpg",
        type:"plot",
        locations:"Nellore",
        name:"One World Residential Plots",
        id:"1",
    },
    {
        imageUrl:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/0c/59/4b/green-meadows-resort.jpg?w=700&h=-1&s=1",
        type:"plot",
        locations:"Banglore",
        name:"Green Meadows",
        id:"2",
    },
    {
        imageUrl:"https://im.proptiger.com/1/3015577/6/lake-city-elevation-117993228.jpeg",
        type:"plot",
        locations:"Hyderabad",
        name:"IT Lake City",
        id:"3",
    },
    {
        imageUrl:"https://images.unsplash.com/photo-1511802269876-bf873cc7b2c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyZWVuJTIwZmllbGR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        type:"plot",
        locations:"Tirupati",
        name:"Green Fields",
        id:"4",
    },
]

const Projects = () => {
  return (
    <div className='projects-container'>
       <div className='project-heading'>
        <div className="pro">
        <h1 className="head">Ongoing Projects</h1>
        <div className="views">
        <BsGridFill className='grid' />
        <MdFormatListBulleted className="grid"/>
        </div>
        </div>
        <hr />
       </div>
       <ul className='cards-container'>
        {projectsData.map(each =>(
            <li key={each.id} className='each-card'>
              <img src={each.imageUrl} alt={each.name} className='plot-images' />
              <h3 className='card-content'>{each.name}</h3>
              <p className='card-content'>Type: {each.type}</p>
              <p className='card-content'>Location : {each.locations}</p>
            </li>
        ))}
       </ul>
       
       <div className='project-heading'>
        <h1>Upcoming Projects</h1>
        <hr />
        <div className='no-results'>
            No results Found....
        </div>
       </div>
    </div>
  )
}

export default Projects