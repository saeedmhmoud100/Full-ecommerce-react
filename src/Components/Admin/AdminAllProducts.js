import React from 'react'
import AdminAllProductsCard from "./AdminAllProductsCard";
import {Row} from "react-bootstrap";
import LoadingSpinner from "../Uitily/LoadingSpinner";

function AdminAllProducts({products}){

    return(
        <div>
            <div className='admin-content-text'>Management all products</div>
        <Row>
            {
                (products && products.data) ? products.data.map(
                    item => <AdminAllProductsCard product={item} />
                ) : <div className='d-flex justify-content-center my-3'><LoadingSpinner></LoadingSpinner></div>
            }


        </Row>
        </div>
    )
}

export default AdminAllProducts