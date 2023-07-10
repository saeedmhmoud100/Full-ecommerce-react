import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ResetPasswordHook from "../../hooks/auth/reset-password-code-hook";

const ResetPasswordPage = () => {
    const [email,password,onChangeEmail,onChangePassword,onSubmit] = ResetPasswordHook()

    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">Reset Password</label>
                    <input
                        value={email}
                        onChange={onChangeEmail}
                        placeholder="Enter your mail"
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                        value={password}
                        onChange={onChangePassword}
                        placeholder="Enter the new password"
                        type="password"
                        className="user-input text-center mx-auto"
                    />
                    <button className="btn-login mx-auto mt-4" onClick={onSubmit}>Reset</button>
                </Col>

            </Row>
        </Container>
    )
}

export default ResetPasswordPage