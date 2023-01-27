import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle';
import BrandCard from "./BrandCard";
import brand1 from "../../Assets/images/brand1.png";
import brand2 from "../../Assets/images/brand2.png";
import brand3 from "../../Assets/images/brand3.png";


const BrandFeature = ({title,btntitle}) => {
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allcategory" />
            <Row className='my-2 d-flex justify-sm-content-center'>
                <BrandCard img={brand1}/>
                <BrandCard img={brand2} />
                <BrandCard img={brand1} />
                <BrandCard img={brand3} />
                <BrandCard img={brand2} />
                <BrandCard img={brand3} />
            </Row>
        </Container>
    )
}

export default BrandFeature