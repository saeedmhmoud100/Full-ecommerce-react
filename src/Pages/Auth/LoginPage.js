import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import loginHook from "../../hooks/auth/login-hook";
import LoadingSpinner from "../../Components/Uitily/LoadingSpinner";

const LoginPage = () => {
    const [email,password,loading,onChangeEmail,onChangePassword,onSubmit] = loginHook()
    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">Login</label>
                    <input
                        value={email}
                        onChange={onChangeEmail}
                        placeholder="Email..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                        value={password}
                        onChange={onChangePassword}
                        placeholder="Password..."
                        type="password"
                        className="user-input text-center mx-auto"
                    />
                    {
                        loading ? <LoadingSpinner className={'mt-3'}></LoadingSpinner>
                            : (<>
                                <button className="btn-login mx-auto mt-4" onClick={onSubmit}>Login</button>
                                <label className="mx-auto my-4 text-center">
                                    You don't have an account?{" "}
                                    <Link to="/auth/register" style={{textDecoration:'none'}}>
                                        <span style={{ cursor: "pointer" }} className="text-danger">
                                            click here
                                        </span>
                                    </Link>
                                    <br/>or<br/>
                                    <Link to="/auth/forget-password" style={{textDecoration:'none',margin:"auto"}}>
                                        <span style={{ cursor: "pointer" }} className="text-danger">
                                            forget password
                                        </span>
                                    </Link>
                                </label>
                            </>)
                    }




                </Col>


                <label className="my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            Login as an Admin
                        </span>
                    </Link>
                    <br/>
                    <Link to="/user/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            Login as a user
                        </span>
                    </Link>
                </label>
            </Row>
        </Container>
    )
}

export default LoginPage