import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddCategory from "../../Components/Admin/AdminAddCategory";
import {useDispatch, useSelector} from "react-redux";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import {getAllCategory} from "../../Redux/actions/categoryAction";

function AdminAddCategoryPage() {
    const dispatch = useDispatch()
    const categoriesData = useSelector(state => state.allCategory.category)
    const categoriesChange = useSelector(state => state.allCategory.chage)
    console.log(categoriesData)
    useEffect(_=>{
        dispatch(getAllCategory())
    },[categoriesChange])
    return (
        <Container className='py-3'>
            <Row>
                <Col sm='3' xs='12' md='2'>
                    <AdminSideBar />
                </Col>
                <Col sm='9' xs='12' md='10'>
                    <AdminAddCategory />
                    {
                        categoriesData && categoriesData.data ?
                    <CategoryContainer data={categoriesData && categoriesData.data}/>
                            : null
                    }
                </Col>
            </Row>
        </Container>
    );
}


export default AdminAddCategoryPage