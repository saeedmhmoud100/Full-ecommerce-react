import React from 'react'
import {Row} from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";

function AdminAllOrders(){
    return(
        <div>
            <div className='admin-content-text'>Management all Orders</div>
            <Row>
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
            </Row>
        </div>
    )
}

export default AdminAllOrders