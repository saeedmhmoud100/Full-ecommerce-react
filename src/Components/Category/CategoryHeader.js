import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import {Link} from "react-router-dom";

const CategoryHeader = ({cats,categorySelected,clearCat,categoryHeaderClick}) => {
    return (
        <div className="cat-header">
            {
                cats && cats.results >0 ?
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-start py-2 flex-wrap">
                            <div className="cat-text-header " style={categorySelected.length ===0 ? {color: 'black' }: {}} onClick={clearCat}>All</div>
                            {cats.data.slice(0,8).map(item => <div onClick={_=>categoryHeaderClick(item._id)} className={`cat-text-header`} style={categorySelected.indexOf(item._id) !==-1 && categorySelected.length===1? {color: 'black' }: {}} key={item._id}>{item.name}</div>)}
                            <Link to={'/allcategory'} className="cat-text-header">More</Link>
                        </Col>
                    </Row>
                </Container>
                    : null
            }

        </div>
    )
}

export default CategoryHeader