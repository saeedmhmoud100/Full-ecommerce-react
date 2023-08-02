import React, {useState} from 'react'
import { Col } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import {useDispatch} from "react-redux";
import {deleteCategory} from "../../Redux/actions/categoryAction";

const CategoryCard = ({ background, img, title,item ,isAdmin}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [brandLoading,setBrandLoading] = useState(false)
    const brandClick =_=>{
        localStorage.clear();
        localStorage.setItem('catSelected',`&category[in][]=${item._id}`)
        navigate('/products')
    }

    const handleDeleteCategory =async e=>{
        e.stopPropagation()
        setBrandLoading(true)
        await dispatch(deleteCategory(item._id))
        setBrandLoading(false)
        localStorage.removeItem('catSelected')
    }
    return (
        <Col
            onClick={brandClick}
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className={`my-4 d-flex justify-content-around ${isAdmin ? "position-relative" : null}`}>
            {
                isAdmin ?
                    <span onClick={handleDeleteCategory} className={'position-absolute p-1'} style={{zIndex:'20',left: '65px',top: '-9px',color:' #4444e2',cursor:'pointer'}}>
                {
                    brandLoading ? <LoadingSpinner style={{width:'20px',height:'20px',marginLeft: '8px',marginTop:'3px'}}></LoadingSpinner> :'Delete'
                }
            </span>
                    : null
            }
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