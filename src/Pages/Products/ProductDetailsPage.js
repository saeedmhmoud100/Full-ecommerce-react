import React from "react";
import {Container} from "react-bootstrap";
import ProdudtDetails from "../../Components/Products/ProdudtDetails";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductContainer from "../../Components/Products/CardProductsContainer";
import ProductDetailsPageHook from "../../hooks/product/Product-Details-Page-Hook";
import SideFilterHook from "../../hooks/search/Side-Filter-Hook";

function ProductDetailsPage(){
    const [product,images,specificProducts,loading] = ProductDetailsPageHook()
    const [allCat,,categorySelected,,clearCat,,,,,,,categoryHeaderClick]=SideFilterHook(true)
    return(
        <div style={{minHeight:'670px'}}>
            <CategoryHeader cats={allCat} categorySelected={categorySelected} clearCat={clearCat} categoryHeaderClick={categoryHeaderClick}/>
            <Container>
                <ProdudtDetails loading={loading} images={images} product={product}/>
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