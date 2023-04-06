import React from 'react'
import {Col, Card, Row, Modal, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminAllProductsCardHook from "../../hooks/product/Admin-All-Product-Card-Hook";
const AdminAllProductsCard = ({product}) => {
    const [onDeleteProduct,show,handleShow,handleClose] = AdminAllProductsCardHook()
    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>The product will be removed</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove({product.title})</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={_=>onDeleteProduct(product._id)}>
                        Remove
                    </Button>
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
                        <div className="d-inline item-delete-edit">modulation</div>
                    </Col>
                </Row>
                <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%",/*transform: 'scaleX(-1)' */}} src={product.imageCover} />
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
                                    <div className="card-currency mx-1">$</div>
                                    <div className="card-price">{product.price}</div>
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