import React, {useState} from 'react'
import {Col, Row} from "react-bootstrap";
import avatar from '../../Assets/images/avatar.png'
import {createCategory} from "../../Redux/actions/categoryAction";
import {useDispatch} from "react-redux";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import {toast} from "react-toastify";

function AdminAddCategory(){
    const [image,setImage] =useState(avatar)
    const [selectedFile,setSelectedFile] =useState(null)
    const [text,settext] =useState('')
    const [loading,setloading] =useState(false)
    const dispatch = useDispatch()
    const notify = (msg,type) => toast[type](msg);
    const onImageChange = e => {
        setImage(URL.createObjectURL(e.target.files[0]))
        setSelectedFile(e.target.files[0])
    }

    const onSubmit = async _ =>{
        //post the data
        // BaseURL.post('/api/v1/categories',{name:text,image:image}, {headers: {'Content-Type':"multipart/form-data"}})
        if(image !== avatar && text !== ''){
        const formData = new FormData()
        formData.append('name',text)
        formData.append('image',selectedFile)
        settext('')
        setImage(avatar)
        setSelectedFile(null)
        setloading(true)
        await dispatch(createCategory(formData))
        notify('Category added successfully','success')
        setloading(false)
        }else{
            notify('Enter a valid Data!!!','warning')
        }
    }
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
                            <label for='upload-photo'>
                                <img src={image} alt='fzx' height='100px' width='120px' style={{cursor:'pointer'}}/>
                            </label>
                            <input type='file' id='upload-photo' name='photo' onChange={onImageChange}/>
                        </div>
                        <input
                            type="text"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Category Name"
                            value={text}
                            onChange={e=> settext(e.target.value)}
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