import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../Assets/images/clothe.png";
import cat2 from "../../Assets/images/cat2.png";
import labtop from "../../Assets/images/labtop.png";
import sale from "../../Assets/images/sale.png";
import pic from "../../Assets/images/pic.png";

const HomeCategory = () => {
    return (
        <Container>
            <SubTiltle title="Categories" btntitle="More" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="machines" img={clothe} background="#F4DBA4" />
                <CategoryCard title="machines" img={cat2} background="#F4DBA4" />
                <CategoryCard title="machines" img={labtop} background="#0034FF" />
                <CategoryCard title="machines" img={sale} background="#F4DBA4" />
                <CategoryCard title="machines" img={clothe} background="#FF6262" />
                <CategoryCard title="machines" img={pic} background="#F4DBA4" />
            </Row>
        </Container>
    )
}

export default HomeCategory