function Company({name, stipend}){
    return (
        
        <>
        
            {stipend > 1000000? <h3>{name} accepted me for the package of  {stipend}  </h3>: <h3>{name} rejected me for the package of  {stipend}  </h3>      }
            
        </>
        
    )
}

export default Company;