import React from 'react'
import {Row} from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import UserAllUserOrdersHook from "../../hooks/user/user-all-user-orders-hook";

function AdminAllOrders(){
    const [OrdersData] = UserAllUserOrdersHook()
    return(
        <div>
            <div className='admin-content-text'>Management all Orders #{OrdersData.results || 0}</div>
            <Row className={'p-sm-30px'} >
                {
                    OrdersData&& OrdersData.results > 0 && OrdersData.data ?
                        OrdersData.data.map( item => <AdminAllOrdersItem OrdersData={item}/>)
                        : null
                }

            </Row>
        </div>
    )
}

export default AdminAllOrders