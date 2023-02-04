import React, {useEffect} from 'react'
import { Container, Row } from 'react-bootstrap';
import CategoryCard from './../Category/CategoryCard';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import useRandomNum from "../../hooks/useRandomNum";

const CategoryContainer = () => {
    const dispatch = useDispatch()
    const colors = ["#F4DBA4","#F4DBA4","#0034FF","#F4DBA4","#FF6262","#F4DBA4"]
    useEffect(_=>{
        dispatch(getAllCategory())
    },[])

    const categoryData = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)
    const randNum = useRandomNum
    return (
        <Container className={'mt-3'}>
            <div className={'admin-content-text'} >All Categories</div>
            <Row className={`my-2 d-flex ${!loading ? 'justify-content-between' : 'justify-content-center'}`}>{
                !loading ?(
                        categoryData.data.length
                            ? categoryData.data.map((item,i) => <CategoryCard key={i} itle={item.name} img={item.image} background={colors[randNum(colors)]} />)
                            : <h2 className='align-self-center m-auto w-auto'>There is no category</h2>)
                    : <LoadingSpinner animation='border' />

            }
            </Row>
        </Container>
    )
}

export default CategoryContainer