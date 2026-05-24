import React from 'react'
import Card from './components/card'
import User from './components/user'
const App = () => {
  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "1 week ago",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$135/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "4 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "8 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "1 month ago",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$125/hr",
    location: "Delhi, India"
  }
];
  return (
    <div className='parent'>
     {jobs.map(function(Elem,idx){
      return <div key={idx}><Card companyName={Elem.companyName} brandLogo={Elem.brandLogo} datePosted={Elem.datePosted} tag1={Elem.tag1} tag2={Elem.tag2} pay={Elem.pay} location={Elem.location} /></div>
     })}
    </div>
  )
}

export default App

     