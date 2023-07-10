import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ForgetPasswordHook from "../../hooks/auth/forget-passwor-hook";

const ForgetPasswordPage = () => {
    const [email,onChangeEmail,onSubmit] = ForgetPasswordHook()

    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 mt-3 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">Forget Password</label>
                    <input
                        value={email}
                        onChange={onChangeEmail}
                        placeholder="enter your email..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <button className="btn-login mx-auto" onClick={onSubmit}>send the code</button>




                </Col>
            </Row>
        </Container>
    )
}

export default ForgetPasswordPage