import React from 'react'
import {Navbar, Container, FormControl, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../../Assets/images/logo.png'
import login from '../../Assets/images/login.png'
import cart from '../../Assets/images/cart.png'
import '../../Assets/Style/NavBarLogin.scss'
import {Link} from "react-router-dom";
import NavbarSearchHook from "../../hooks/search/Navbar-Search-Hook";
import GetAllUserCartHook from "../../hooks/cart/get-all-user-cart-hook";
const NavBarLogin = () => {
    const [onChangeSearch,logout,isLogged,userData] = NavbarSearchHook();
    const [userCartData] = GetAllUserCartHook();
    return (
        <Navbar className="sticky-top text-center" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <Link to='Full-ecommerce-react/'>
                        <img src={logo} className='logo' alt='logo'/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        value={localStorage.getItem("searchWord") || ''}
                        onChange={onChangeSearch}
                        type="search"
                        placeholder="Search..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        {isLogged ?
                            (<NavDropdown title={'welcome '+userData.name} id="basic-nav-dropdown">

                                <NavDropdown.Item as={Link} to={`Full-ecommerce-react/${userData.role}/profile`}  >Profile</NavDropdown.Item>
                                {
                                    userData.role === 'admin' ?
                                        <NavDropdown.Item as={Link} to={'Full-ecommerce-react/admin/allproducts'}  >control panel</NavDropdown.Item>
                                        : null
                                }
                                {/*<NavDropdown.Item as={Link} to={'user/profile'} /!*onClick={event => event.stopPropagation()}*!/ >Profile</NavDropdown.Item>*/}

                                <NavDropdown.Item onClick={logout}>
                                    logout
                                </NavDropdown.Item>
                            </NavDropdown>)
                            :
                            (<Link to={'Full-ecommerce-react/auth/login'} style={{textDecoration:'none'}} className='nav-text d-flex pb-2 justify-content-center nav_icon_container nav-link'>
                            {/*<Nav.Link href={'/login'} className="nav-text d-flex pb-2 justify-content-center nav_icon_container">*/}
                            <p style={{ color: "white" }}>Login</p>
                            <img src={login} className="login-img" alt="sfvs" />

                            {/*</Nav.Link>*/}
                        </Link>)}

                        <Link to={'Full-ecommerce-react/cart'} style={{textDecoration:'none'}} className='nav-text d-flex pb-2 justify-content-center nav_icon_container nav-link'>
                        {/*<Nav.Link href='/cart' className="nav-text d-flex pb-2 justify-content-center nav_icon_container" style={{ color: "white" }}>*/}

                                <p style={{ color: "white" }} className={' position-relative'}>Cart
                                <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{top:'-12%',right:'-56px'}}>
                                {
                                    (userCartData && userCartData.status && userCartData.status === "success") ? userCartData.numOfCartItems : 0
                                }
                              </span></p>
                                <img src={cart} className="login-img " alt="sfvs" />



                        {/*</Nav.Link>*/}
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLogin