import React,{ useState, useEffect } from 'react';
//import JobItem from "./components/JobItem.jsx";


const JobList = ({ jobs}) => {
  const[Jobslist, setJobList] = useState([jobs]);
  
return(
  <div className="joblist">
      {jobs
      .map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
  </div>
  
);

}

const JobItem = ({ job }) =>  (  
      <div className="job-item">
          <img src={job.logo} alt="logo" className='company-logo'/>
          <NameRow job={job} />
          <Position job={job} />
          <JobStatus job={job} />
          <JobTags job={job}/>
          

      </div>
  )
  
function NameRow ({ job }){
  if(!job.new && !job.featured){
    return (
      <div className="name-row">
        <h2 className="company-name">{job.company}</h2>
        <button className='pry-btn hidden'>{job.new===true? "new!": null}</button>
  <button className='pry-btn hidden'>{job.featured===true? "featured": null}</button>  
      </div>
    )
  } else if(job.new && !job.featured){
    return (
      <div className="name-row">
        <h2 className="company-name">{job.company}</h2>
        <button className='pry-btn light'>{job.new===true? "new!": null}</button>
      </div>
    )
  }
  return (
<div className="name-row">
  <h3 className="company-name">{job.company}</h3>
  <button className='pry-btn light'>{job.new===true? "new!": null}</button>
  <button className='pry-btn dark'>{job.featured===true? "featured": null}</button>
</div>
  )}

  function Position({job}){
    return (
      <div className="position">
        <h3 className="position-title">{job.position}</h3>
      </div>
    )
  }

  function JobStatus({job}) {
    return (
      <div className="jobstatus-row">
      <li className="date-posted">{job.postedAt}</li>
      <li className="contract">{job.contract}</li>
      <li className="location">{job.location}</li>
      </div>
    )
  }

  function JobTags({job}){
    const language_tools = [...job.languages, job.level, ...job.tools];
    return (
      <div className="tags-row">
        {language_tools.map((tag) => (
          <Button_tag className="tag-btn" key={tag} lntool={tag} job={job}/>
        ))}
      </div>
    )
  
    
  }
  
  function Button_tag({lntool}){
    return (  
      <button className="tag-btn">{lntool}</button>
    )
  }



export default JobList;
