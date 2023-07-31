import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegisterHook from "../../hooks/auth/Register-hook";
import LoadingSpinner from "../../Components/Uitily/LoadingSpinner";

const RegisterPage = () => {
    const [username,email,phone,password,rePassword,loading,onChangeUsername,onChangeEmail,onChangePhone,onChangePassword,onChangeRePassword,onSubmit] = RegisterHook()
    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center hieght-search">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">Register a new account</label>
                    <input
                        value={username}
                        onChange={onChangeUsername}
                        placeholder="Username..."
                        type="text"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <input
                        value={email}
                        onChange={onChangeEmail}
                        placeholder="Email..."
                        type="text"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <input
                        value={phone}
                        onChange={onChangePhone}
                        placeholder="Phone..."
                        type="text"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <input
                        value={password}
                        onChange={onChangePassword}
                        placeholder="Password..."
                        type="password"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <input
                        value={rePassword}
                        onChange={onChangeRePassword}
                        placeholder="Repeat Pass..."
                        type="password"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    {
                        loading ? <LoadingSpinner className='mt-3'></LoadingSpinner>: (<>
                                <button className="btn-login mx-auto mt-4" onClick={onSubmit}>Register</button>
                                <label className="mx-auto my-4">
                                    You already have an account?{" "}
                                    <Link to="/auth/login" style={{ textDecoration: "none" }}>
                                    <span style={{ cursor: "pointer" }} className="text-danger">
                                      click here
                                    </span>
                                    </Link>
                                </label>
                            </>
                        )

                    }

                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage