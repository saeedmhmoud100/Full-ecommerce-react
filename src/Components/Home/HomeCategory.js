import React, {useEffect} from 'react'
import {Container, Row} from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import LoadingSpinner from "../Uitily/LoadingSpinner";

const HomeCategory = () => {
    const dispatch = useDispatch()
    const colors = ["#F4DBA4","#F4DBA4","#0034FF","#F4DBA4","#FF6262","#F4DBA4"]
    useEffect(_=>{
        dispatch(getAllCategory())
    },[])

    const categoryData = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)
    console.log(loading)
    return (
        <Container>
            <SubTiltle title="Categories" btntitle="More" pathText="/allcategory" />
            <Row className={`my-2 d-flex ${!loading ? 'justify-content-between' : 'justify-content-center'}`}>
                {
                    !loading ?(
                    categoryData.data.length
                        ? categoryData.data.slice(0,6).map((item,i) => <CategoryCard title={item.name} img={item.image} background={colors[i]} />)
                        : <h2>There is no category</h2>)
                        : <LoadingSpinner animation='border' />

                }

            </Row>
        </Container>
    )
}

export default HomeCategory