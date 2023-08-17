import React from 'react'
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import {Col, Container, Row} from "react-bootstrap";
import SideFilter from "../../Components/Uitily/SideFilter";
import CardProductContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Uitily/Pagination";
import ShopProductsPageHook from "../../hooks/product/Shop-Products-Page-Hook";
import SideFilterHook from "../../hooks/search/Side-Filter-Hook";


const ShopProductsPage = () => {
    const [allProducts,pagination,onPress,getProduct,loading] = ShopProductsPageHook()
    const [allCat,allBrand,categorySelected,categoryClick,clearCat,brandSelected,brandClick,clearBrand,priceFrom,priceTo,getProducts,categoryHeaderClick]=SideFilterHook()

    return (
        <div style={{minHeight:'670px'}}>
            <CategoryHeader cats={allCat} categorySelected={categorySelected} clearCat={clearCat} categoryHeaderClick={categoryHeaderClick}/>
            <Container>
            <SearchCountResult onClick={getProduct} title={`(${allProducts && allProducts.data ?allProducts.data.length : 0}) form (${allProducts.results || 0}) results`}/>

                <Row className={'d-flex justify-content-between xm-flex-dir-column'}>
                    <Col sm={1} xs={1} md={1} lg={1} className={'d-flex'}>
                        <SideFilter allCat={allCat} allBrand={allBrand} categorySelected={categorySelected} categoryClick={categoryClick} clearCat={clearCat}
                                    brandSelected={brandSelected} brandClick={brandClick} clearBrand={clearBrand} priceFrom={priceFrom} priceTo={priceTo} getProduct={getProducts}/>
                    </Col>
                    <Col sm={10} xs={10} md={10}>
                        {
                            loading ?<><CardProductContainer products={[]}/> <CardProductContainer products={[]}/></>
                                : allProducts.data && allProducts.data.length >0 ? <CardProductContainer products={allProducts.data}/>
                                :null
                        }

                        {
                        pagination > 1 ?
                            <Pagination pagesCount={pagination} onPress={onPress}/>
                            : null
                    }
                    </Col>

                </Row>


            </Container>
        </div>
    )
}

export default ShopProductsPage