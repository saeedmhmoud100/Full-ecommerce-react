import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import clothe from "../../Assets/images/clothe.png";
import cat2 from "../../Assets/images/cat2.png";
import labtop from "../../Assets/images/labtop.png";
import sale from "../../Assets/images/sale.png";
import ProductCard from "./ProductCard";

const CardProductContainer = ({title,btntitle}) => {
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allcategory" />
            <Row className='my-2 d-flex justify-sm-content-center'>
                <ProductCard title="machines" img={clothe} background="#F4DBA4" />
                <ProductCard title="machines" img={cat2} background="#F4DBA4" />
                <ProductCard title="machines" img={labtop} background="#0034FF" />
                <ProductCard title="machines" img={sale} background="#F4DBA4" />
            </Row>
        </Container>
    )
}

export default CardProductContainer