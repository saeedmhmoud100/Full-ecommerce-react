import React from "react";
import {Container} from "react-bootstrap";
import ProdudtDetails from "../../Components/Products/ProdudtDetails";
import CategoryHeader from "../../Components/Category/CategoryHeader";

function ProductDetailsPage(){
    return(
        <div style={{minHeight:'670px'}}>
            <CategoryHeader />
            <Container>
                <ProdudtDetails />
            </Container>
        </div>
    )
}

export default ProductDetailsPage