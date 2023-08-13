import React from 'react'
import {Link} from "react-router-dom";

const SubTiltle = ({ title, btntitle,pathText }) => {
    return (
        <div className="d-flex justify-content-between pt-4">
            <div className="sub-tile">{title}</div>
            {btntitle ? (
                    <Link style={{textDecoration:'none'}} to={'/Full-ecommerce-react'+pathText}> <div className="shopping-now">{btntitle}</div></Link>
            ) : null}
        </div>
    )
}

export default SubTiltle