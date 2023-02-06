import React from 'react'
import {Container, Row} from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import LoadingSpinner from "../Uitily/LoadingSpinner";
import HomeCategoryHook from "../../hooks/category/Home-Category-Hook";

const HomeCategory = () => {
    const [colors,categoryData,loading] = HomeCategoryHook()


    return (
        <Container>
            <SubTiltle title="Categories" btntitle="More" pathText="/allcategory" />
            <Row className={`my-2 d-flex ${!loading ? 'justify-content-between' : 'justify-content-center'}`}>
                {
                    !loading ?(
                    categoryData.data.length
                        ? categoryData.data.slice(0,6).map((item,i) => <CategoryCard key={i} title={item.name} img={item.image} background={colors[i]} />)
                        : <h2 className='align-self-center m-auto w-auto'>There is no category</h2>)
                        : <LoadingSpinner animation='border' />

                }

            </Row>
        </Container>
    )
}

export default HomeCategory