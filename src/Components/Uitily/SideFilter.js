import React from 'react'
import { Row } from 'react-bootstrap'
import SideFilterHook from "../../hooks/search/Side-Filter-Hook";

const SideFilter = () => {
    const [allCat,allBrand,categorySelected,categoryClick,clearCat,brandSelected,brandClick,clearBrand,priceFrom,priceTo,getProduct]=SideFilterHook()

    console.log(categorySelected.length)
    return (
        <div className="mt-3">
            <Row>
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title">Categories</div>
                        <div className="d-flex mt-3">
                            <input id="All" type="checkbox" value="0" onChange={clearCat} checked={categorySelected.length===0}/>
                            <label htmlFor="All" className="filter-sub me-2 ">All</label>
                        </div>
                    {
                        allCat.data && allCat.data.map(item =>(
                            <div className="d-flex mt-3">
                                <input id={item._id} type="checkbox" value={item._id} onChange={categoryClick} checked={categorySelected.indexOf(item._id)!==-1}/>
                                <label htmlFor={item._id} className="filter-sub me-2 ">{item.name}</label>
                            </div>
                        ))
                    }
                </div>

                <div className="d-flex flex-column mt-2">
                    <div className="filter-title mt-3">Brands</div>
                    <div className="d-flex mt-3">
                        <input id="AllB" type="checkbox" value="0" onChange={clearBrand} checked={brandSelected.length===0}/>
                        <label htmlFor="AllB" className="filter-sub me-2 ">All</label>
                    </div>
                    {
                        allBrand.data && allBrand.data.map(item =>(
                            <div className="d-flex mt-3">
                                <input id={item._id} type="checkbox" value={item._id} onChange={brandClick} checked={brandSelected.indexOf(item._id)!==-1}/>
                                <label htmlFor={item._id} className="filter-sub me-2 ">{item.name}</label>
                            </div>
                        ))
                    }
                </div>

                <div>

                    <div className=" filter-title my-3">Price <span onClick={_=>{localStorage.setItem('priceFrom',0);localStorage.setItem('priceTo',9999999);getProduct()}} className='text-decoration-underline' style={{color:'rgb(9 75 127)',cursor:"pointer",fontSize:'10px'}}>reset</span></div>
                    <div className="d-flex">
                        <p className="filter-sub my-2">From:</p>
                        <input
                            onChange={priceFrom}
                            value={localStorage.getItem('priceFrom')}
                            className="m-2 text-center"
                            type="number"
                            style={{maxWidth: '77px', height: "25px" ,padding:0}}
                            min={0}
                        />
                    </div>
                    <div className="d-flex">
                        <p className="filter-sub my-2">To:</p>
                        <p className="filter-sub my-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <input
                            onChange={priceTo}
                            value={localStorage.getItem('priceTo')}
                            className="m-2 text-center"
                            type="number"
                            style={{maxWidth: '77px', height: "25px" ,padding:0}}
                            min={0}
                        />
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default SideFilter