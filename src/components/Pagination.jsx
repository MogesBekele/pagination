import React from 'react'
import { jobsData } from '../assets/assets';
import { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);
  return (

    <div>

      {
         currentJobs.map((job, index)=>(
          <div className=' gap-4 ' key={index}>
            <h1>{job.title}</h1>
            <h2>{job.level}</h2>
            <h3>{job.location}</h3>
            <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
          </div>

        ))
      }
      <button>{currentJobs.map(())}</button>
      
    </div>
  )
}

export default Pagination
