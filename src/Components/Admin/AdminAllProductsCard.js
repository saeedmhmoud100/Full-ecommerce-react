import React from 'react'
import {Col, Card, Row, Modal, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminAllProductsCardHook from "../../hooks/admin/Admin-All-Product-Card-Hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";
const AdminAllProductsCard = ({product}) => {
    const [onDeleteProduct,show,handleShow,handleClose,deleteLoading] = AdminAllProductsCardHook()
    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>The product will be removed</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove({product.title})</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    {
                        deleteLoading ? <LoadingSpinner className={'mx-4'}></LoadingSpinner>
                            :<Button variant="danger" onClick={_=>onDeleteProduct(product._id)}>
                                Remove
                            </Button>
                    }

                </Modal.Footer>
            </Modal>

            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div className="d-inline item-delete-edit" onClick={handleShow}>Remove</div>
                        <Link to={`/admin/updateproduct/${product._id}`} className={'text-decoration-none'}>
                        <div className="d-inline item-delete-edit pointer-event">modulation</div>
                        </Link>
                    </Col>
                </Row>
                <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
                    {/*<Card.Img style={{ height: "228px", width: "100%",/*transform: 'scaleX(-1)' *!/} src={product.imageCover} />*/}
                    <div  style={{ height: "228px", width: "100%",backgroundImage:"url("+product.imageCover +")",backgroundSize:"cover"}}></div>
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                {product.title}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">{product.rate}</div>
                                <div className="d-flex">
                                    {product && product.priceAfterDiscount && product.priceAfterDiscount>0 && product.priceAfterDiscount<product.price
                                        ?<div className="card-price"><span className={'price-before-discount-product'} style={{
                                            top: '89%',
                                            left: '74%'
                                        }}>{product ? product.price : 0}</span>{product.priceAfterDiscount}$</div>
                                        :<div className="card-price">{product && product.price}$</div>
                                    }
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard