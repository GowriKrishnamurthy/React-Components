import React from 'react'

const userInput = (props) => {
    
    const inputStyle = {
        border: '2px solid blue'                
    }
    return(
        <input type="text"
         style={inputStyle}
         value={props.username} 
         onChange={props.onchanged}  />
    )    
}
export default userInput;