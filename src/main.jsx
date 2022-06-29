import React from 'react'
import ReactDOM from 'react-dom/client'
import JobList from './joblist';
import './index.scss'
import jobinfo from "../src/data.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobList jobs={jobinfo}/>
  </React.StrictMode>
)
