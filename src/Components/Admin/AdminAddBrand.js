import React from 'react'
import {Col, Row} from "react-bootstrap";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import AdminAddBrandHook from "../../hooks/admin/Admin-Add-Brand-Hook";

function AdminAddBrand(){
    const [image,text,loading,setTextState,onImageChange,onSubmit] = AdminAddBrandHook()
    return(
        <div>

                       <Row className="justify-content-start ">
                            <div className="admin-content-text pb-4">Add a New Brand</div>
                            <Col sm="8">
                                <div className="text-form pb-2">Category Image</div>
                                {/*<img src={avatar} alt="" height="100px" width="120px" />*/}
                                <div>
                                    <label htmlFor='upload-photo'>
                                        <img src={"https://saeedmhmoud100.github.io/Full-ecommerce-react"+image} alt='fzx' height='100px' width='120px' style={{cursor:'pointer'}}/>
                                    </label>
                                    <input type='file' id='upload-photo' name='photo' onChange={onImageChange}/>
                                </div>
                                <input
                                    type="text"
                                    className="input-form d-block mt-3 px-3"
                                    placeholder="Brand Name"
                                    value={text}
                                    onChange={setTextState}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="8" className={`d-flex justify-content-end`} style={loading ? {paddingRight:'70px'} : {}}>
                                {
                                loading ? <div className='d-flex justify-content-center align-items-center pt-3'><LoadingSpinner></LoadingSpinner> </div>
                                    : (
                                        <button className="btn-save d-inline mt-2 " onClick={onSubmit}>Save Changes</button>
                                )}
                            </Col>
                        </Row>

        </div>
    )
}

export default AdminAddBrand