import React from 'react'
import { Row } from 'react-bootstrap'
import SideFilterHook from "../../hooks/search/Side-Filter-Hook";

const SideFilter = () => {
    const [allCat,allBrand]=SideFilterHook()


    return (
        <div className="mt-3">
            <Row>
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title">Categories</div>
                    <div className="d-flex mt-3">
                        <input type="checkbox" value="0" />
                        <div className="filter-sub me-2 ">All</div>
                    </div>
                    {
                        allCat.data && allCat.data.map(item =>(
                            <div className="d-flex mt-3">
                                <input id={item._id} type="checkbox" value={item._id} />
                                <label htmlFor={item._id} className="filter-sub me-2 ">{item.name}</label>
                            </div>
                        ))
                    }
                </div>

                <div className="d-flex flex-column mt-2">
                    <div className="filter-title mt-3">Brands</div>
                    <div className="d-flex mt-3">
                        <input type="checkbox" value="0" />
                        <div className="filter-sub me-2 ">All</div>
                    </div>
                    {
                        allBrand.data && allBrand.data.map(item =>(
                            <div className="d-flex mt-3">
                                <input id={item._id} type="checkbox" value={item._id} />
                                <label htmlFor={item._id} className="filter-sub me-2 ">{item.name}</label>
                            </div>
                        ))
                    }
                </div>

                <div>
                    <div className="filter-title my-3">Price</div>
                    <div className="d-flex">
                        <p className="filter-sub my-2">From:</p>
                        <input
                            className="m-2 text-center"
                            type="number"
                            style={{ width: "50px", height: "25px" }}
                        />
                    </div>
                    <div className="d-flex">
                        <p className="filter-sub my-2">To:</p>
                        <p className="filter-sub my-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <input
                            className="m-2 text-center"
                            type="number"
                            style={{ width: "50px", height: "25px" }}
                        />
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default SideFilter