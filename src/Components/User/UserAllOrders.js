import React from "react";
import UserAllOrderItem from "./UserAllOrderItem";
import {Row} from "react-bootstrap";

function UserAllOrders() {

    return (
        <div>
            <div className='admin-content-text pb-2'>Welcome, Ahmed</div>
            <Row className='justify-content-between'>

                <UserAllOrderItem />
                <UserAllOrderItem />
                <UserAllOrderItem />
            </Row>
        </div>
    );
}

export default UserAllOrders