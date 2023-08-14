import {Col, Row} from "react-bootstrap";
import React from "react";


const AdminAllUsersCard = ({userData})=>{
    const formatDate = dateString =>{
        const options = {year:'numeric',month:'long','day':'numeric'}   // July 29, 2023
        // const options = {year:'numeric',month:'numeric','day':'numeric'} // 7/29/2023
        return new Date(dateString).toLocaleDateString(undefined,options)
    }
    return (
        <div className="user-address-card my-3 px-2 position-relative" style={{height:"auto"}}>
            <div style={{top:"3px",right:'9px'}} className={"text-end position-absolute item-delete-edit text-decoration-underline"}>
                Remove
            </div>
            <Row className={'p-2 d-flex flex flex-column-reverse flex-sm-row'}>

                    <Row className={'p-2 pt-sm-0  mx-1  flex-column flex-md-row'}>

                        <Col sm={5}>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1 fw-bold'}>Id: </p> <span>{userData._id}</span>
                            </div>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1 fw-bold'}>username: </p> <span>{userData.name}</span>
                            </div>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1 fw-bold'}>email: </p> <span>{userData.email}</span>
                            </div>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1 fw-bold'}>phone: </p> <span>{userData.phone}</span>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1 fw-bold'}>registered at : </p> <span>{formatDate(userData.createdAt)}</span>
                            </div>
                            <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                <p className={'my-1 fw-bold'}>password change at : </p> <span>{userData.passwordChangedAt ? formatDate(userData.passwordChangedAt) : "Not Changed"}</span>
                            </div>
                            <div className={'d-flex flex-column '}>
                                <div className={'d-flex flex-wrap gap-1 align-items-center '}>
                                    <p className={'my-1 fw-bold'}>active : </p> <span>{userData.active.toString()}</span>
                                </div>
                                <button className={'btn btn-dark b-0'} style={{maxWidth:"254.5px"}}>deactivate the user</button>
                            </div>
                        </Col>
                    </Row>

            </Row>

        </div>
    )
}

export default AdminAllUsersCard