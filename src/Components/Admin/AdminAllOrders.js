import React from 'react'
import {Row} from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import UserAllUserOrdersHook from "../../hooks/user/user-all-user-orders-hook";
import Pagination from "../Uitily/Pagination";

function AdminAllOrders(){
    const [OrdersData,,getOrdersData] = UserAllUserOrdersHook()
    // console.log(OrdersData)
    return(
        <div>
            <div className='admin-content-text'>Management all Orders #{OrdersData.length || 0}</div>
            <Row className={'p-sm-30px'} >
                {
                    OrdersData&& OrdersData.length > 0 ?
                        OrdersData.map( item => <AdminAllOrdersItem OrdersData={item} admin={true}/>)
                        : <h3 className={'text-center mt-2'}>there are no orders yet</h3>
                }
                {
                    OrdersData&& OrdersData.results > 0 && OrdersData.paginationResult.numberOfPages > 1 &&

                    <Pagination pagesCount={OrdersData.paginationResult.numberOfPages} onPress={getOrdersData}/>
                }
            </Row>
        </div>
    )
}

export default AdminAllOrders