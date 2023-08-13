import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import {getAllBrand} from "../../Redux/actions/brandAction";
import ShopProductsPageHook from "../product/Shop-Products-Page-Hook";
import {useNavigate} from "react-router-dom";

const SideFilterHook =(navig=false) =>{

    useEffect(_=>{
        if(!localStorage.getItem('catSelected')){
            localStorage.setItem('catSelected','');
        }else{
            const temp=localStorage.getItem('catSelected');
            localStorage.setItem('catSelected','');
            localStorage.setItem('catSelected',temp);
        }
        if(!localStorage.getItem('brandSelected')){
            localStorage.setItem('brandSelected','');
        }else{
            const temp=localStorage.getItem('brandSelected');
            localStorage.setItem('brandSelected','');
            localStorage.setItem('brandSelected',temp);
        }
        if(!localStorage.getItem('priceFrom')){
            localStorage.setItem('priceFrom',0);
        }
        if(!localStorage.getItem('priceTo')){
            localStorage.setItem('priceTo',9999999);
        }


    },[])

    const [,,,getProduct] = ShopProductsPageHook()
    const dispatch = useDispatch()
    const [categorySelected,setCategorySelected] = useState(localStorage.getItem('catSelected')&& localStorage.getItem('catSelected')!=='' ? (localStorage.getItem('catSelected').split("&category[in][]=")).splice(1):[])
    const [brandSelected,setBrandSelected] = useState(localStorage.getItem('brandSelected')&& localStorage.getItem('brandSelected')!=='' ? (localStorage.getItem('brandSelected').split("&brand[in][]=")).splice(1):[])
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
            catVal=categorySelected.filter(item => (item!== val&&item!==''));
        }
        localStorage.setItem('catSelected',catVal.map(item => "&category[in][]="+item).join(''))
        setTimeout(async _=>{ await getProduct()},200)
        setCategorySelected(catVal);

    }
    const navigate = useNavigate()
    const categoryHeaderClick = id =>{
        let catVal=[id];
        localStorage.setItem('catSelected',catVal.map(item => "&category[in][]="+item).join(''))
        setTimeout(async _=>{ await getProduct()},200)
        setCategorySelected(catVal);
        if(navig)
            navigate('/Full-ecommerce-react/products')

    }

    const clearCat = _=>{
        localStorage.setItem('catSelected','')
        setTimeout(async _=>{ await getProduct()},200)
        setCategorySelected([]);
    }

    const brandClick = e =>{
        const val= e.target.value
        let brandVal=[];
        if(e.target.checked && val!==''){
            brandVal=[...brandSelected,val];
        }else{
            brandVal=brandSelected.filter(item => (item!== val&&item!==''));
        }
        localStorage.setItem('brandSelected',brandVal.map(item => "&brand[in][]="+item).join(''))
        setTimeout(async _=>{ await getProduct()},200)
        setBrandSelected(brandVal);
    }
    const clearBrand = _=>{
        localStorage.setItem('brandSelected','')
        setTimeout(async _=>{ await getProduct()},200)
        setBrandSelected([]);
    }
    const [from,setFrom]=useState(0)
    const [to,setTo]=useState(0)
    const priceFrom = e=>{
        if(e.target.value>=0){

        localStorage.setItem('priceFrom',e.target.value)
        setFrom(e.target.value)
        }


    }
    const priceTo = e=>{
        if(e.target.value>=0){

        localStorage.setItem('priceTo',e.target.value)
        setTo(e.target.value)
        }
    }

    useEffect(_=>{
        const run = async _=> await getProduct();
        setTimeout(async _=> await run(),200)

    },[to,from])
    return [allCat,allBrand,categorySelected,categoryClick,clearCat,brandSelected,brandClick,clearBrand,priceFrom,priceTo,getProduct,categoryHeaderClick]
}

export default SideFilterHook