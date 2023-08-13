import {Container, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import login from "../../Assets/images/login.png";


const NoInternetPage =_=>{

    return(
        <div>
            <div style={{height:"8dvh",backgroundColor:"#333"}}>
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
                                type="search"
                                placeholder="Search..."
                                className="me-2 w-100 text-center"
                                aria-label="Search"
                            />

                            <Nav className="me-auto">
                                    <Link style={{textDecoration:'none'}} className='nav-text d-flex pb-2 justify-content-center nav_icon_container nav-link'>
                                        <p style={{ color: "white" }}>offline</p>
                                        <img src={login} className="login-img" alt="sfvs" />
                                    </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div style={{height:"82dvh"}} className={'text-center py-5'}>

            <h2 className={'mt-5'}>Unfortunately, You are offline😢</h2>
                <a href='src/Pages' onClick={e => {e.preventDefault();window.location.reload(false)}}>reload the page</a>
            </div>
        </div>
    )
}
export default NoInternetPage