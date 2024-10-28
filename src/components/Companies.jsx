import React from 'react'
import Company from './Company'
function Companies() {
    let companies = [
      { name:"Amazon" , stipend:3600000},
      { name : "Google" , stipend: 4500000},
      { name : "BNY Mellon", stipend : 2900000},
      {name: "Test Sigma" , stipend : 700000},
      {name: "shipsy", stipend: 700000},
      {name: "Gridlex", stipend: 800000},
      {name : "Vedantu", stipend: 900000}];
    
    return <div>{companies.map(company=>(
      <li key = {company.name}><Company name = {company.name} stipend = {company.stipend}/></li>
    ))}</div>
      

    
}
export default  Companies;