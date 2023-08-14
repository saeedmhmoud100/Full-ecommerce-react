import React, {useState} from 'react'
import { Col,Card } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import {deleteBrand} from "../../Redux/actions/brandAction";
import {useDispatch} from "react-redux";
import LoadingSpinner from "../Uitily/LoadingSpinner";

const BrandCard = ({img,item,isAdmin}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [brandLoading,setBrandLoading] = useState(false)
    const brandClick =_=>{
        localStorage.clear();
        localStorage.setItem('brandSelected',`&brand[in][]=${item._id}`)
        navigate('/Full-ecommerce-react/products')
    }
    const handleDeleteBrand =async e=>{
        e.stopPropagation()
        setBrandLoading(true)
        await dispatch(deleteBrand(item._id))
        setBrandLoading(false)
        localStorage.removeItem('brandSelected')
    }
    return (
        <Col
            onClick={brandClick}
            xs="10"
            sm="6"
            md="4"
            lg="2"
            className={`my-2 d-flex justify-content-sm-center ${isAdmin ? "position-relative" : null}`}>
            {
                isAdmin ?
            <span onClick={handleDeleteBrand} className={'position-absolute p-1'} style={{zIndex:'20',left: '18px',top: '2px',color:' #4444e2',cursor:'pointer'}}>
                {
                   brandLoading ? <LoadingSpinner style={{width:'20px',height:'20px',marginLeft: '8px',marginTop:'3px'}}></LoadingSpinner> :'Delete'
                }
            </span>
                : null
            }
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