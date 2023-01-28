import React from "react";
import {Container} from "react-bootstrap";
import ProdudtDetails from "../../Components/Products/ProdudtDetails";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import RateContainer from "../../Components/Rate/RateContainer";

function ProductDetailsPage(){
    return(
        <div style={{minHeight:'670px'}}>
            <CategoryHeader />
            <Container>
                <ProdudtDetails />
                <RateContainer />
            </Container>
        </div>
    )
}

export default ProductDetailsPage