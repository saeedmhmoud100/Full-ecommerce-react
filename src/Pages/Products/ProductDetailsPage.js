import React from "react";
import {Container} from "react-bootstrap";
import ProdudtDetails from "../../Components/Products/ProdudtDetails";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductContainer from "../../Components/Products/CardProductsContainer";
import ProductDetailsPageHook from "../../hooks/product/Product-Details-Page-Hook";

function ProductDetailsPage(){
    const [product,images,specificProducts] = ProductDetailsPageHook()
    return(
        <div style={{minHeight:'670px'}}>
            <CategoryHeader />
            <Container>
                <ProdudtDetails images={images} product={product}/>
                <RateContainer product={product} />
                {
                    specificProducts.length>0?
                <CardProductContainer products={specificProducts.slice(0,4)} title={"Products you may like" } pathText="/products"/>:null
                }
            </Container>
        </div>
    )
}

export default ProductDetailsPage