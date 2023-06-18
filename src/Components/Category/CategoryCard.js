import React from 'react'
import { Col } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

const CategoryCard = ({ background, img, title,item }) => {
    const navigate = useNavigate()
    const brandClick =_=>{
        localStorage.clear();
        localStorage.setItem('catSelected',`&category[in][]=${item._id}`)
        navigate('/products')
    }
    return (
        <Col
            onClick={brandClick}
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-4 d-flex justify-content-around ">
            <div className="allCard mb-3 " style={{cursor:"pointer"}}>
                <div
                    className="categoty-card "
                    style={{ backgroundColor: `${background}` }}></div>{" "}
                <img alt="zcv" src={img} className="categoty-card-img" />
                <p className="categoty-card-text my-2">{title}</p>
            </div>
        </Col>
    )
}

export default CategoryCard