import React from 'react'
import { Navbar, Container, FormControl, Nav } from 'react-bootstrap'
import logo from '../../Assets/images/logo.png'
import login from '../../Assets/images/login.png'
import cart from '../../Assets/images/cart.png'
import '../../Assets/Style/NavBarLogin.scss'
const NavBarLogin = () => {
    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        placeholder="Search..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        <Nav.Link href='/login'
                                  className="nav-text d-flex pb-2 justify-content-center nav_icon_container">
                            <p style={{ color: "white" }}>Login</p>
                            <img src={login} className="login-img" alt="sfvs" />

                        </Nav.Link>
                        <Nav.Link href='/cart'
                                  className="nav-text d-flex pb-2 justify-content-center nav_icon_container"
                                  style={{ color: "white" }}>
                            <p style={{ color: "white" }}>Cart</p>
                            <img src={cart} className="login-img" alt="sfvs" />

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLogin