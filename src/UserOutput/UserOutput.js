import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    
    return(
        <div className="UserOutputStyle">
            <p>{props.username} </p> 
        </div>
    ) 
}
export default userOutput;