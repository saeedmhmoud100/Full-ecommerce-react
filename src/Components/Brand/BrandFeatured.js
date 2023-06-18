import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle';
import BrandCard from "./BrandCard";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import HomeBrandHook from "../../hooks/Brand/home-brand-hook";
// import HomeBrandHook from "../../hooks/category/Home-Category-Hook";


const BrandFeature = ({title,btntitle}) => {
    const [BrandData,loading,BrandDataLength] = HomeBrandHook()

    return (
        <Container>
            {
                BrandDataLength > 0 ? (
                <>
                    <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
                    <Row className='my-2 d-flex justify-content-center'>
                        {
                            !loading ?(
                                BrandData.data.slice(0,6).map((item,i) => <BrandCard key={i} img={item.image} item={item}/>)
                            ): <LoadingSpinner />

                        }

                    </Row>
                </>
                ) : null
            }

        </Container>
    )
}

export default BrandFeature