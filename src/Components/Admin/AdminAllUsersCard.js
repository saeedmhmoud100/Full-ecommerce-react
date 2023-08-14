import {Col, Row} from "react-bootstrap";
import React from "react";


const AdminAllUsersCard = _=>{
    return (
        <div className="user-address-card my-3 px-2 position-relative">
            <div style={{top:"3px",right:'9px'}} className={"text-end position-absolute item-delete-edit text-decoration-underline"}>
                Remove
            </div>
            <Row className={'p-2 d-flex flex flex-column-reverse flex-sm-row'}>

                    <Row style={{width:'80% d-flex'}} className={'p-2 pt-sm-0  mx-0 mx-sm-1 '}>

                        <Col sm={5}>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1'}>Id: </p> <span>useasdsafr</span>
                            </div>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1'}>username: </p> <span>user</span>
                            </div>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1'}>email: </p> <span>user@gmail.com</span>
                            </div>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1'}>phone: </p> <span>01212345678</span>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1'}>registered at : </p> <span>8/3/2022</span>
                            </div>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1'}>active : </p> <span>true</span>
                            </div>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1'}>last password update at : </p> <span>true</span>
                            </div>
                        </Col>
                    </Row>

            </Row>

        </div>
    )
}

export default AdminAllUsersCard