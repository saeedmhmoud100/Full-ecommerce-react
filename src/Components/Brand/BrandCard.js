import React from 'react'
import { Col,Card } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import {deleteBrand} from "../../Redux/actions/brandAction";

const BrandCard = ({img,item,isAdmin}) => {
    const navigate = useNavigate()
    const dispatch = useNavigate()
    const brandClick =_=>{
        localStorage.clear();
        localStorage.setItem('brandSelected',`&brand[in][]=${item._id}`)
        navigate('/products')
    }
    const handleDeleteBrand =async e=>{
    console.log(item)
        e.preventDefault()
        await dispatch(deleteBrand(item._id))
    }
    return (
        <Col
            onClick={brandClick}
            xs="10"
            sm="6"
            md="4"
            lg="2"
            className={`my-2 d-flex justify-content-sm-center ${isAdmin ? "position-relative" : null}`}>
            {/*{*/}
            {/*    isAdmin ?*/}
            {/*<span onClick={handleDeleteBrand} className={'position-absolute '} style={{zIndex:'2',left: '18px',top: '2px',color:' #4444e2',cursor:'pointer'}}>Delete</span>*/}
            {/*    : null*/}
            {/*}*/}
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