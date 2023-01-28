import React from 'react'
import next from '../../Assets/images/next.png'
const LeftButton = ( onClick, onDisable ) => {
    return (
        <img
            src={next}
            alt=""
            width="35px"
            onClick={onClick}
            disabled={onDisable}
            height="35px"
            style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
        />
    )
}

export default LeftButton