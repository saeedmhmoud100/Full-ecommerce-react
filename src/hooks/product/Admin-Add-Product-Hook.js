import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../Redux/actions/categoryAction";
import {getSubCategoryByCategory} from "../../Redux/actions/subCategoryAction";
import {getAllBrand} from "../../Redux/actions/brandAction";
import {Notification} from "../useNotification";
import {createProduct} from "../../Redux/actions/productAction";

const AdminAddProductHook = _ =>{
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
    useEffect(_ =>{
        dispatch(getAllCategory())
        dispatch(getAllBrand())
    },[])

    const allCategories = useSelector(state => state.allCategory.category)
    const subCategories = useSelector(state => state.allSubCategory.subCategory)
    const allBrands = useSelector(state => state.allBrand.brands)
    const allBrandsLoading = useSelector(state => state.allBrand.loading)
    const [subCategoriesLoading,setSubCategoriesLoading] = useState(false)


    const onSelect = (e) => {
        setSelectedSubCatID(e)
    }
    const onRemove = (e) => {
        setSelectedSubCatID(e)
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


    const onSubmit = async _ => {
        if(images.length < 1){
            Notification('Product must have at least one image','warning')
        }else if(prodName===''){
            Notification('Product Name is required','warning')
        }else if(prodDescription===''){
            Notification('Product Description is required','warning')
        }else if(priceBefore===null){
            Notification('Product Price is required','warning')
        }else if(qty===null){
            Notification('Product Quantity is required','warning')
        }else if(catID==='' || catID==='0'){
            Notification('Main Category is required','warning')
        }else if(brandID==='' || brandID==='0'){
            Notification('Brand is required','warning')
        }else if(selectedColors.length < 1){
            Notification('Colors are required','warning')
        }else{


            const formData = new FormData()
            const imageCover = dataURLToFile(images[0],Math.random()+'.png')
            formData.append('title',prodName)
            formData.append('description',prodDescription)
            formData.append('quantity',qty)
            formData.append('price',priceBefore)
            formData.append('category',catID)
            formData.append('brand',brandID)
            selectedColors.map(color => formData.append('availableColors', color))
            formData.append('imageCover',imageCover)
            for (const [key, value] of Object.entries(images)) {
                formData.append('images',dataURLToFile(value,Math.random()+'.png'))
            }
            selectedSubCatID.map(subCat => formData.append('subcategory',subCat._id))


            setFormLoading(true)
            await dispatch(createProduct(formData))
            setFormLoading(false)
                setImages({})
                setProdName('')
                setProdDescription('')
                setPriceBefore(null)
                setPriceAfter(null)
                setQty(null)
                setCatID('0')
                setBrandID('0')
                setSelectedColors([])
                setSelectedSubCatID([])
                setSubCatID([])
                setSubCategoriesLoading(true)
                setTimeout(_ => setSubCategoriesLoading(false),50)
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
        showColors,
        selectedColors,
        formLoading,

        allCategories,
        subCategoriesLoading,
        allBrands,
        allBrandsLoading,

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
    ]

}

export default AdminAddProductHook