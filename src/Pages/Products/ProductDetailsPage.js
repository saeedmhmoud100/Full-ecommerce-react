import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import ProdudtDetails from "../../Components/Products/ProdudtDetails";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductContainer from "../../Components/Products/CardProductsContainer";
import ProductDetailsPageHook from "../../hooks/product/Product-Details-Page-Hook";

function ProductDetailsPage(){
    const [product,images] = ProductDetailsPageHook()

    return(
        <div style={{minHeight:'670px'}}>
            <CategoryHeader />
            <Container>
                <ProdudtDetails images={images} product={product}/>
                <RateContainer />
                <CardProductContainer title={"Products you may like" } pathText="/products"/>
            </Container>
        </div>
    )
}

export default ProductDetailsPage