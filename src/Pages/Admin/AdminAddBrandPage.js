import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddBrand from "../../Components/Admin/AdminAddBrand";
import BrandContainer from "../../Components/Brand/BrandContainer";
import {useDispatch, useSelector} from "react-redux";
import {getAllBrand} from "../../Redux/actions/brandAction";

function AdminAddBrandPage() {
    const dispatch = useDispatch()
    const brandsData = useSelector(state=> state.allBrand.brands)
    const brandChange = useSelector(state=> state.allBrand.change)
    // console.log(brandsData)
    useEffect(_=>{
        dispatch(getAllBrand())
    },[brandChange])

    return (
        <Container className='py-3'>
            <Row>
                <Col sm='3' xs='12' md='2'>
                    <AdminSideBar />
                </Col>
                <Col sm='9' xs='12' md='10'>
                    <AdminAddBrand />
                    <BrandContainer data={brandsData ? brandsData.data : []} isAdmin={true}/>
                </Col>
            </Row>
        </Container>
    );
}


export default AdminAddBrandPage