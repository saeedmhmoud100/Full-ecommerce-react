import React from "react";
import UserAllOrderItem from "./UserAllOrderItem";
import {Row} from "react-bootstrap";
import UserAllUserOrdersHook from "../../hooks/user/user-all-user-orders-hook";
import Pagination from "../Uitily/Pagination";

function UserAllOrders() {
    const [OrdersData,userData,getOrdersData] = UserAllUserOrdersHook()
    return (
        <div>
            <div className='admin-content-text pb-2'>Welcome, {userData.data && userData.data.name}</div>
            <div className='admin-content-text pb-2'>You have ({OrdersData.results || 0}) Orders</div>
            {
                OrdersData&& OrdersData.results > 0 ?
                    <Row className='justify-content-between'>
                        {
                            OrdersData.data.map( item => <UserAllOrderItem orderData={item}/>)
                        }
                        {
                            OrdersData.paginationResult.numberOfPages > 1 &&
                            <Pagination pagesCount={OrdersData.paginationResult.numberOfPages} onPress={getOrdersData}/>
                        }

                    </Row>
                    :<h4 className={'text-center my-2'} style={{margin:"auto"}}>you haven't made any orders yet</h4>
            }

        </div>
    );
}

export default UserAllOrders