import React from "react";
import UserAddressCard from "./UserAddressCard";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import UserAllAddressesHook from "../../hooks/user/user-all-addresses-hook";

function UserAllAddresses() {
        const [AllAddresses] = UserAllAddressesHook()

    return (
        <div>
            <div className={'admin-content-text pb-2 '}>Addresses</div>
            {
                AllAddresses && AllAddresses.data && AllAddresses.data.length > 0 ?
                    AllAddresses.data.map((item,i) => <UserAddressCard key={i} address={item}/>)
                    : <h4 className={'mt-4 text-center mb-2'}>there are no addresses have been added yet </h4>


            }

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/Full-ecommerce-react/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">Add New Addresses</button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default UserAllAddresses