import React from "react";
import UserAddressCard from "./UserAddressCard";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import UserAllAddressesHook from "../../hooks/user/user-all-addresses-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";

function UserAllAddresses() {
        const [AllAddresses,loading] = UserAllAddressesHook()

    return (
        <div className={loading ?'d-flex flex-column' : null}>
            <div className={'admin-content-text pb-2 '}>Addresses</div>
            {
                loading ? <LoadingSpinner className={'text-center mx-auto my-4 '} /> :AllAddresses && AllAddresses.data && AllAddresses.data.length > 0 ?
                    AllAddresses.data.map((item,i) => <UserAddressCard key={i} address={item}/>)
                    : <h4 className={'mt-4 text-center mb-2'}>there are no addresses have been added yet </h4>


            }

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">Add New Addresses</button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default UserAllAddresses