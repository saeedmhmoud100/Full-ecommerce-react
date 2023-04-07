import React from 'react'
import {Col, Row} from "react-bootstrap";
import AdminAddSubCategoryHook from "../../hooks/admin/Admin-Add-SubCategory-Hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";

function AdminAddSubCategory(){
    const [categoryData,nameVal,submitLoading,onNameChange,onSelectChange,onSubmit] = AdminAddSubCategoryHook()
    return(
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add a New SubCategory</div>
                {
                    submitLoading ? <LoadingSpinner animation='grow' className={'w-100'} /> :(
                        <Col sm="8">
                            <input
                                type="text"
                                className="input-form d-block mt-3 px-3"
                                placeholder="SubCategory Name"
                                onChange={onNameChange}
                                value={nameVal}
                            />

                            {   categoryData.data ? (
                                <>
                                    <select name='category' className="select mt-3 px-2" onChange={onSelectChange}>
                                        <option value='0'>Select the Main Category</option>
                                    {
                                    categoryData.data.map(item => <option key={item._id} value={item._id}>{item.name}</option>)
                                    }
                                    </select>
                                </>
                                )
                                : <div className='w-100 d-flex justify-content-center mt-3'><LoadingSpinner></LoadingSpinner></div>
                            }

                        </Col>
                    )
                }

            </Row>
            {
                !submitLoading ? <Row>
                    <Col sm="8" className="d-flex justify-content-end ">
                        <button className="btn-save d-inline mt-2 " onClick={onSubmit}>Save Changes</button>
                    </Col>
                </Row> : null
            }

        </div>
    )
}

export default AdminAddSubCategory