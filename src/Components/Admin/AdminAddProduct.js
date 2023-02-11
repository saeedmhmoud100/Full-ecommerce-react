import React from 'react'
import {Col, Row} from "react-bootstrap";
import Multiselect from 'multiselect-react-dropdown';
import add from '../../Assets/images/add.png'
import MultiImageInput from "react-multiple-image-input";
import AdminAddProductHook from "../../hooks/product/Admin-Add-Product-Hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import {CompactPicker} from "react-color";

function AdminAddProduct(){
   const [images,setImages,crop,prodName,prodDescription,priceBefore,priceAfter,qty,catID,brandID,subCatID,showColors,selectedColors,formLoading,

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
   ] = AdminAddProductHook()


    return(
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add A new Product</div>
                <Col sm="8">
                    <div className="text-form pb-2"> Product's Images</div>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={{outlineColor:'#999',modalColor:'#fff'}}
                        cropConfig={{crop,ruleOfThirds: true}}
                        max={5}
                        // allowCrop={false}
                    />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product Name"
                        value={prodName}
                        onChange={SetProdName}
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Product Description"
                        value={prodDescription}
                        onChange={SetProdDescription}
                    />
                    {
                        priceBefore == null ?
                            <input
                                type="number"
                                className="input-form d-block mt-3 px-3"
                                placeholder="Product Price"
                                value={''}
                                onChange={SetPriceBefore}
                            />
                            :<input
                                type="number"
                                className="input-form d-block mt-3 px-3"
                                placeholder="Product Price"
                                value={priceBefore}
                                onChange={SetPriceBefore}
                            />
                    }
                    {
                        priceAfter == null ?
                            <input
                                type="number"
                                className="input-form d-block mt-3 px-3"
                                placeholder="Price after discount"
                                value={''}
                                onChange={SetPriceAfter}
                            />
                            :<input
                                type="number"
                                className="input-form d-block mt-3 px-3"
                                placeholder="Price after discount"
                                value={priceAfter}
                                onChange={SetPriceAfter}
                            />
                    }
                    {
                        qty == null ?
                            <input
                                type="number"
                                className="input-form d-block mt-3 px-3"
                                placeholder="Available Quantity"
                                value={''}
                                onChange={SetQty}
                            />
                            :<input
                                type="number"
                                className="input-form d-block mt-3 px-3"
                                placeholder="Available Quantity"
                                value={qty}
                                onChange={SetQty}
                            />
                    }


                    {
                        allCategories.data ? (
                    <select
                        name="cat"
                        id="lang"
                        className="select input-form-area mt-3 px-2 "
                        onChange={SetCatID}
                        value={catID}
                    >
                        <option value="0">Main Categories</option>
                        {
                              allCategories.data.map(item => <option key={item._id} value={item._id}>{item.name}</option>)
                        }
                    </select>) : <div className='w-100 d-flex justify-content-center mt-2'><LoadingSpinner></LoadingSpinner></div>
                    }


                    {
                        subCategoriesLoading ?
                            <div className='w-100 d-flex justify-content-center mt-2'><LoadingSpinner></LoadingSpinner></div>
                            : subCatID == null ? <Multiselect
                                className="mt-2"
                                placeholder="Subcategory "
                                options={[]}
                                onSelect={onSelect}
                                onRemove={onRemove}
                                displayValue="name"
                                style={{ color: "red" }}
                                emptyRecordMsg='Select a main Category'

                            /> : <Multiselect
                                className="mt-2"
                                placeholder="Subcategory "
                                options={subCatID}
                                onSelect={onSelect}
                                onRemove={onRemove}
                                displayValue="name"
                                style={{ color: "red" }}
                                emptyRecordMsg='There is no subCategory'/>

                    }

                    {
                        !allBrandsLoading ?
                            <select name="brand" id="brand" className="select input-form-area mt-3 px-2 " onChange={SetBrandID} value={brandID}>
                            <option value="0">Brand</option>
                            {
                                allBrands.data.map(item => <option key={item._id} value={item._id}>{item.name}</option>)
                            }
                        </select> : <div className='w-100 d-flex justify-content-center mt-2'><LoadingSpinner></LoadingSpinner></div>
                    }



                    <div className="text-form mt-3 ">Available colors for the product</div>
                    <div className="mt-1 d-flex">
                        {
                            selectedColors.map((color,i) => <div
                                key={i}
                                className="color ms-2 border  mt-1"
                                style={{ backgroundColor: color }}
                                onClick={_ => setSelectedColors([...selectedColors.filter((clr) => clr !== color)])}
                                >

                            </div>
                            )
                        }


                        <img src={add} alt="" width="30px" height="35px" style={{cursor:'pointer'}} onClick={_ => setShowColors(!showColors)}/>
                        {
                            showColors ? <CompactPicker onChangeComplete={handleChangeColor}/> : null
                        }

                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className={` justify-content-end d-flex  `}>
                    {
                        formLoading ? <div className='d-flex justify-content-center'><LoadingSpinner className='mx-5'></LoadingSpinner></div>
                            : <button className="btn-save d-inline mt-2 " onClick={onSubmit}>Save Changes</button>
                    }

                </Col>
            </Row>
        </div>
    )
}

export default AdminAddProduct