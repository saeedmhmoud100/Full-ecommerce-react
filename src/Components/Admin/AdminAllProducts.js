import React from 'react'
import AdminAllProductsCard from "./AdminAllProductsCard";
import {Row} from "react-bootstrap";

function AdminAllProducts(){
    return(
        <div>
            <div className='admin-content-text'>Management all products</div>
        <Row>
            <AdminAllProductsCard />
            <AdminAllProductsCard />
            <AdminAllProductsCard />
            <AdminAllProductsCard />
            <AdminAllProductsCard />
            <AdminAllProductsCard />
            <AdminAllProductsCard />
            <AdminAllProductsCard />
        </Row>
        </div>
    )
}

export default AdminAllProducts