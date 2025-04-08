import React from "react";


export default props => {
    
    const { min, max } = props;
    
    const random =  parseInt(Math.random() * (max  - min )) + min;
    
    return (
    <div>
        <h2>O numero é {random}</h2>
    </div>
    )

}