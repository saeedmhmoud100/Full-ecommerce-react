import React, {useEffect, useState} from 'react'
import ReactPaginate from "react-paginate";

const Pagination = ({pagesCount,onPress}) => {
    const [pageNumber,setPageNumber] = useState(0)
    useEffect(_=>{
        setPageNumber(0)
    },[pagesCount])


    const handlePageClick = (data) => {
        onPress(data.selected + 1)
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pagesCount}
            previousLabel="previous"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            initialPage={0}
            // forcePage={0}
        />
    )
}

export default Pagination