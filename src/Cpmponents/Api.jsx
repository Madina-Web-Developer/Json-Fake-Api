
import { useState } from 'react'
import './Api.css'
import { useEffect } from 'react'

const Api = () => {

  const [show , setshow ] = useState()

  return (
    <>

     <p>Application Programming Interface Practice</p>


    <div className="main_card">

                 

                    <div className="single_card">
                        
                        <div className="img">
                          <img src='' alt="n" />
                        </div>

                   <div className="text">
                   <h2>$</h2>
                    <h1></h1>
                    <h3></h3>
                   </div>
                    </div>

    </div>
    
    </>
  )
}

export default Api