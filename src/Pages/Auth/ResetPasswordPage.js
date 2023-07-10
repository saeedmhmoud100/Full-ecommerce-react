import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ResetPasswordHook from "../../hooks/auth/reset-password-code-hook";
import LoadingSpinner from "../../Components/Uitily/LoadingSpinner";

const ResetPasswordPage = () => {
    const [password,confirmPassword,loading,onChangePassword,onChangeConfirmPassword,onSubmit] = ResetPasswordHook()

    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">Reset Password</label>
                    <input
                        value={confirmPassword}
                        onChange={onChangeConfirmPassword}
                        placeholder="Enter the new password"
                        type="password"
                        className="user-input text-center mx-auto my-3"
                    />
                    <input
                        value={password}
                        onChange={onChangePassword}
                        placeholder="confirm password"
                        type="password"
                        className="user-input text-center mx-auto"
                    />

                    {
                        loading ? <LoadingSpinner className='mt-2'></LoadingSpinner>
                            :<button className="btn-login mx-auto mt-4" onClick={onSubmit}>Reset</button>
                    }
                </Col>

            </Row>
        </Container>
    )
}

export default ResetPasswordPage