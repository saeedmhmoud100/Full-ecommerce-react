import React, {useEffect} from 'react'
import {Row } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {getAllWishList} from "../../Redux/actions/wishListAction";
import CardProductContainer from "../Products/CardProductsContainer";
const UserFavoriteProducts = () => {
    const dispatch = useDispatch()
    const wishListProducts = useSelector(state=> state.wishList.wishList)
    const deletewishListProduct = useSelector(state=> state.wishList.res)
    useEffect(_=>{
        dispatch(getAllWishList())
    },[deletewishListProduct])

    return (
        <div>
            <div className='admin-content-text pb-2'>Favorites Products</div>

            <Row className={ 'justify-content-md-start'+ wishListProducts.length > 0 ?'' :' text-center'}>
                {
                    wishListProducts.length > 0 ? <CardProductContainer products={wishListProducts} imgURL={true}/>
                    : <h3 className={'m-auto my-4'}>you haven't added any products to wishList yet</h3>

                }
            </Row>
        </div>
    )
}

export default UserFavoriteProducts