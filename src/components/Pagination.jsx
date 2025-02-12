import React from 'react'
import { jobsData } from '../assets/assets';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (

    <div>

      {
        jobsData.map((job, index)=>(
          <div className='flex gap-4 ' key={index}>
            <h1>{job.title}</h1>
            <h2>{job.level}</h2>
            <h3>{job.location}</h3>
            <p>{job.description}</p>
          </div>
        ))
      }
      
    </div>
  )
}

export default Pagination
