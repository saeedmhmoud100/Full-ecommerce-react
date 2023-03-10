import React from 'react'
import { Row } from 'react-bootstrap'

const SideFilter = () => {
    return (
        <div className="mt-3">
            <Row>
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title">Categories</div>
                    <div className="d-flex mt-3">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">All</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">machine</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">machine</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">machine</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">machine</div>
                    </div>
                </div>

                <div className="d-flex flex-column mt-2">
                    <div className="filter-title mt-3">Brands</div>
                    <div className="d-flex mt-3">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">All</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">Apple</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">Samsung</div>
                    </div>
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