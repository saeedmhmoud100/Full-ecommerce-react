import React from 'react'
import {Col, Row} from "react-bootstrap";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import AdminAddCategoryHook from "../../hooks/admin/Admin-Add-Category-Hook";

function AdminAddCategory(){
    const [image,text,loading,setTextState,onImageChange,onSubmit] = AdminAddCategoryHook()
    return(
        <div>
            {
                loading ? <div className='d-flex justify-content-center align-items-center pt-5'><LoadingSpinner></LoadingSpinner> </div>
                : (
                <><Row className="justify-content-start ">
                    <div className="admin-content-text pb-4">Add New Category</div>
                    <Col sm="8">
                        <div className="text-form pb-2">Category Image</div>
                        {/*<img src={avatar} alt="" height="100px" width="120px" />*/}
                        <div>
                            <label htmlFor='upload-photo'>
                                <img src={image} alt='fzx' height='100px' width='120px' style={{cursor:'pointer'}}/>
                            </label>
                            <input type='file' id='upload-photo' name='photo' onChange={onImageChange}/>
                        </div>
                        <input
                            type="text"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Category Name"
                            value={text}
                            onChange={setTextState}
                        />
                    </Col>
                </Row>
                <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                <button className="btn-save d-inline mt-2 " onClick={onSubmit}>Save Changes</button>
                </Col>
                </Row></>)
            }

        </div>
    )
}

export default AdminAddCategory