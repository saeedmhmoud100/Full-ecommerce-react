import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from '../../Assets/images/sort.png'
const SearchCountResult = ({title,onClick}) => {
    const queries=[
        {title:'No sorting',query:''},
        {title:'Price: Low to High',query:'+price'},
        {title:'Price: High to Low',query:'-price'},
        {title:'Best Sellers',query:'-sold'},
        {title:'Top Rating',query:'-ratingsQuantity'},
    ]

    const handler=()=> {

    }
    const onSortingClick=q=>{
        localStorage.setItem('sorting',q)
        onClick()
    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt=""
                            />
                            Sort by
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">

                        {
                            queries.map((item,i)=> <div onClick={_=> onSortingClick(item.query)} key={i} className="border-bottom card-filter-item">{item.title}</div>)
                        }
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult