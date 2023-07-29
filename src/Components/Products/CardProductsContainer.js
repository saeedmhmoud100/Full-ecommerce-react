import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from "./ProductCard";
import LoadingSpinner from "../Uitily/LoadingSpinner";

const CardProductContainer = ({products,title,btntitle,pathText,imgURL}) => {

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
            <Row className='my-2 d-flex justify-sm-content-center'>
                {
                    products?
                    products.map(item => <ProductCard key={item._id} product={item} background="#F4DBA4" imgURL={imgURL}/>)
                    :<div className='d-flex justify-content-center'><LoadingSpinner></LoadingSpinner></div>

                //{/*  Placeholders
                    // <Card style={{ width: '18rem' }}>
                    //         <Card.Img variant="top" src="holder.js/100px180" />
                    //         <Card.Body>
                    //           <Placeholder as={Card.Title} animation="glow">
                    //             <Placeholder xs={6} />
                    //           </Placeholder>
                    //           <Placeholder as={Card.Text} animation="glow">
                    //             <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    //             <Placeholder xs={6} /> <Placeholder xs={8} />
                    //           </Placeholder>
                    //           <Placeholder.Button variant="primary" xs={6} />
                    //         </Card.Body>
                    //       </Card>
                    // */}
                }

            </Row>
        </Container>
    )
}

export default CardProductContainer