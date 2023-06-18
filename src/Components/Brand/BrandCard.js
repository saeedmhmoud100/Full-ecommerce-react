import React from 'react'
import { Col,Card } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

const BrandCard = ({img,item}) => {
    const navigate = useNavigate()
    const brandClick =_=>{
        localStorage.clear();
        localStorage.setItem('brandSelected',`&brand[in][]=${item._id}`)
        navigate('/products')
    }
    return (
        <Col
            onClick={brandClick}
            xs="10"
            sm="6"
            md="4"
            lg="2"
            className="my-2 d-flex justify-content-sm-center">
            <Card
                className="my-1"
                style={{
                    width: "100%",
                    height: "151px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    cursor:'pointer'
                }}>
                <Card.Img style={{ width: "100%", height: "151px" }} src={img} />
            </Card>
        </Col>
    )
}

export default BrandCard