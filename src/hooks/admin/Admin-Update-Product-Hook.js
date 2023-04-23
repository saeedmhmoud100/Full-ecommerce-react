import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import {getSubCategoryByCategory} from "../../Redux/actions/subCategoryAction";
import {getAllBrand} from "../../Redux/actions/brandAction";
import {Notification} from "../useNotification";
import {getOneProduct, updateProduct} from "../../Redux/actions/productAction";
import {useNavigate, useParams} from "react-router-dom";

const AdminAddProductHook = _ =>{
    const {id}=useParams()
    const [redirect,setRedirect]=useState(false)
    const [images,setImages] = useState([])
    const crop = {
        unit:'px',
        // aspect: 4/3,
        x: 100,
        y: 100,
        width: 200,
        height: 200
    }
    const dispatch = useDispatch()
    const [prodName,setProdName] = useState('')
    const [prodDescription,setProdDescription] = useState('')
    const [priceBefore,setPriceBefore] = useState(null)
    const [priceAfter,setPriceAfter] = useState(null)
    const [qty,setQty] = useState(null)
    const [catID,setCatID] = useState('0')
    const [brandID,setBrandID] = useState('0')
    const [subCatID,setSubCatID] = useState(null)
    const [selectedSubCatID,setSelectedSubCatID] = useState([])
    const [showColors,setShowColors] = useState(false)
    const [selectedColors,setSelectedColors] = useState([])
    const [formLoading,setFormLoading] = useState(false)
    //when page first load
    const product=useSelector(state=> state.allProduct.product)

    useEffect(_ =>{
        const run = async _=>{
            await dispatch(getOneProduct(id))
            await dispatch(getAllCategory())
            await dispatch(getAllBrand())
        }
        run()
    },[])
    useEffect(_=>{
        if(product && product.data){
            dispatch(getSubCategoryByCategory(product.data.category))
            setSelectedSubCatID([...product.data.subcategory])
        }
    },[product])
    // useEffect(_=>{
    //     if(catID){
    //         dispatch(getSubCategoryByCategory(catID))
    //         setSubCatID([...subCategory])
    //     }
    // },[catID])

    useEffect(_=>{
        if(product && product.data){
            setImages([...product.data.images])
            setProdName(product.data.title)
            setProdDescription(product.data.description)
            setPriceBefore(product.data.price)
            setPriceAfter(product.data.price)
            setQty(product.data.quantity)
            setCatID(product.data.category)
            setBrandID(product.data.brand)
            setSelectedColors(product.data.availableColors)
            setSelectedSubCatID(product.data.subcategory)
        }
    },[product])
    const allCategories = useSelector(state => state.allCategory.category)
    const subCategories = useSelector(state => state.allSubCategory.subCategory)
    const allBrands = useSelector(state => state.allBrand.brands)
    const allBrandsLoading = useSelector(state => state.allBrand.loading)
    const [subCategoriesLoading,setSubCategoriesLoading] = useState(false)


    const onSelect = (e) => {
        const arr=[]
        e.map(({_id}) => arr.push(_id))
        setSelectedSubCatID(arr)
        console.log(selectedSubCatID)
    }
    const onRemove = (e) => {
        onSelect(e)
    }

    const SetProdName = e =>{
        setProdName(e.target.value)
    }
    const SetProdDescription = e =>{
        setProdDescription(e.target.value)
    }
    const SetPriceBefore = e =>{
        setPriceBefore(e.target.value)
    }
    const SetPriceAfter = e =>{
        setPriceAfter(e.target.value)
    }
    const SetQty = e =>{
        setQty(e.target.value)
    }
    const SetCatID =async e =>{
        if(e.target.value==='0'){
            setSubCatID([])
            setSubCategoriesLoading(false)
        }else {
            setCatID(e.target.value)
            setSubCategoriesLoading(true)
            await dispatch(getSubCategoryByCategory(e.target.value))
            setSubCategoriesLoading(false)
        }

    }

    const SetBrandID = e =>{
        setBrandID(e.target.value)
    }
    // set subCategories when update Category
    useEffect( _  => {
        setSubCatID(subCategories.data)

    },[subCategories])


    const handleChangeColor = color =>{

        if(selectedColors.indexOf(color.hex) === -1){
            setSelectedColors([...selectedColors,color.hex])
            setShowColors(false)
        }
    }

    // convert base 64 to image
    function dataURLToFile(dataurl,filename){
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            uBarr = new Uint8Array(n);
        while (n--){
            uBarr[n] =bstr.charCodeAt(n)
        }
        return new File([uBarr],filename,{type:mime})
    }

    // convert url to base 64
    const getBase64FromUrl = async (url) => {
        const data = await fetch(url);
        const blob = await data.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                resolve(base64data);
            }
        });
    }

        const updatedProduct=useSelector(state=> state.allProduct.updateProduct)

    useEffect(_=>{
        if(updatedProduct.status==200 && redirect==false){
        setRedirect(true)
            setRed()
        }
    },[updatedProduct])

    const navigate = useNavigate()

    const setRed = _=>{
        setRedirect(false)
        // return navigate(`/products/${id}`)
        setTimeout(_=> window.location = `/products/${id}`,1000)

    }

    const onSubmit = async _ => {
        if(Object.keys(images).length<1){
            Notification('Product must have at least one image','warning')
        }else if(prodName===''){
            Notification('Product Name is required','warning')
        }else if(prodDescription===''){
            Notification('Product Description is required','warning')
        }else if(priceBefore===null || priceBefore===0 || !priceBefore){
            Notification('Product Price is required','warning')
        }else if(qty===null || qty===0 || !qty){
            Notification('Product Quantity is required','warning')
        }else if(catID==='' || catID==='0'){
            Notification('Main Category is required','warning')
        }else if(brandID==='' || brandID==='0'){
            Notification('Brand is required','warning')
        }else if(selectedColors.length < 1){
            Notification('Colors are required','warning')
        }else{


            const formData = new FormData()
            let imageCover=images[0];
            if(images[0].length<1000){
                imageCover=await getBase64FromUrl(imageCover)
            }
            imageCover=dataURLToFile(imageCover, Math.random() + '.png')

            formData.append('title',prodName)
            formData.append('description',prodDescription)
            formData.append('quantity',qty)
            formData.append('price',priceBefore)
            formData.append('category',catID)
            formData.append('brand',brandID)
            selectedSubCatID.map(sub => formData.append('subcategory',sub))
            selectedColors.map(color => formData.append('availableColors', color))
            formData.append('imageCover',imageCover)
            for (const [key, value] of Object.entries(images)) {
                let image=value

                if(image.length<1000){
                    image = await getBase64FromUrl(image)
                }
                image=dataURLToFile(image, Math.random() + '.png')
                formData.append('images',image)
            }
                setFormLoading(true)
                await dispatch(updateProduct(id,formData))
                setFormLoading(false)


            // window.location.(`/products/${product.data._id}`)
        }
    }


    return [
        images,
        setImages,
        crop,
        prodName,
        prodDescription,
        priceBefore,
        priceAfter,
        qty,
        catID,
        brandID,
        subCatID,
        selectedSubCatID,
        showColors,
        selectedColors,
        formLoading,

        allCategories,
        subCategoriesLoading,
        allBrands,
        allBrandsLoading,
        id,
        redirect,

        onSelect,
        onRemove,
        SetProdName,
        SetProdDescription,
        SetPriceBefore,
        SetPriceAfter,
        SetQty,
        SetCatID,
        SetBrandID,
        setShowColors,
        setSelectedColors,
        handleChangeColor,
        onSubmit,
        setRed
    ]

}

export default AdminAddProductHook