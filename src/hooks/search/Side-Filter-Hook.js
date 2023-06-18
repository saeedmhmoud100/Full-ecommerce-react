import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import {getAllBrand} from "../../Redux/actions/brandAction";
import ShopProductsPageHook from "../product/Shop-Products-Page-Hook";

const SideFilterHook =_ =>{
    if(!localStorage.getItem('catSelected')){
    localStorage.setItem('catSelected','');
    }else{
        const temp=localStorage.getItem('catSelected');
        localStorage.setItem('catSelected','');
        localStorage.setItem('catSelected',temp);
    }
    const [,,,getProduct] = ShopProductsPageHook()
    const dispatch = useDispatch()
    const [categorySelected,setCategorySelected] = useState(localStorage.getItem('catSelected')&& localStorage.getItem('catSelected')!=='' ? (localStorage.getItem('catSelected').split("&category[in][]=")).splice(1):[])
    const [brandSelected,setBrandSelected] = useState([])
    useEffect(_=>{
        const run =async _=>{
            await dispatch(getAllCategory())
            await dispatch(getAllBrand())
        }
        run()
    },[])
    const allCat = useSelector(state => state.allCategory.category) || []
    const allBrand = useSelector(state => state.allBrand.brands)||[]
    const categoryClick = e =>{
        const val= e.target.value
        let catVal=[];
        if(e.target.checked && val!==''){
            catVal=[...categorySelected,val];
        }else{
            console.log('yes')
            catVal=categorySelected.filter(item => (item!== val&&item!==''));
        }
        localStorage.setItem('catSelected',catVal.map(item => "&category[in][]="+item).join(''))
        setTimeout(async _=>{ await getProduct()},200)
        setCategorySelected(catVal);

    }

    const clearCat = _=>{
        localStorage.setItem('catSelected','')
        setTimeout(async _=>{ await getProduct()},200)
        setCategorySelected([]);
    }

    const brandClick = e =>{
        const val= e.target.value
        if(val==="0"){
            setBrandSelected([]);
        }else{
            if(e.target.checked){
                setBrandSelected([...brandSelected,val])
            }else{
                setBrandSelected(brandSelected.filter(item => item!== val));
            }
        }
    }
    return [allCat,allBrand,categoryClick,categorySelected,brandClick,clearCat]
}

export default SideFilterHook