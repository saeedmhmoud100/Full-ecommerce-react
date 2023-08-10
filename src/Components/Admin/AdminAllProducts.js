import React from 'react'
import AdminAllProductsCard from "./AdminAllProductsCard";
import {Row} from "react-bootstrap";
import LoadingSpinner from "../Uitily/LoadingSpinner";

function AdminAllProducts({products}){
    // console.log(products)
    return(
        <div>
            <div className='admin-content-text'>Management all products ----> ({(products.results > 0 && products.data && products.data.length) || 0}) from ({products.results})</div>
        <Row>
            {
                products && products.data && products.data.length > 0 ?
                (products && products.data) ? products.data.map(
                    item => <AdminAllProductsCard product={item} />
                ) : <div className='d-flex justify-content-center my-3'><LoadingSpinner></LoadingSpinner></div>
                : <h3 className={'m-auto mt-3 text-center'}>There are no products yet</h3>
            }


        </Row>
        </div>
    )
}

export default AdminAllProducts