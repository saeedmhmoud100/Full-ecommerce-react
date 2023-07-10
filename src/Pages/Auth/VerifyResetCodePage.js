import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import VerifyResetCodeHook from "../../hooks/auth/verify-reset-code-hook";

const VerifyResetCodePage = () => {
    const [code,onChangeCode,onSubmit] = VerifyResetCodeHook()

    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 mt-3 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">Enter the code</label>
                    <input
                        value={code}
                        onChange={onChangeCode}
                        placeholder="enter your code..."
                        type="code"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <button className="btn-login mx-auto" onClick={onSubmit}>submit the code</button>




                </Col>
            </Row>
        </Container>
    )
}

export default VerifyResetCodePage