import { Nav, Navbar, NavItem, NavLink, Button, Form, Input, NavbarBrand, Jumbotron, NavbarToggler, Collapse } from 'reactstrap';
import React from 'react';
import { dice } from 'fontawesome';
;

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (

        <div>
            <Navbar expand='md' style={{ height: '92px' }}>

                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ms-auto text-danger my-auto'>
                        <NavItem >
                            <NavLink className='nav-link pe-0'>
                                <a href='#' className='text-danger border-end pe-4 text-decoration-none ' >Login</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link ps-0'>
                                <a href='#' className='text-danger ps-4 text-decoration-none'>Register</a>
                            </NavLink>

                        </NavItem>
                        <NavItem>

                            <button className='btn border button' >
                                <span className='fa fa-shopping-cart fa-lg text-danger'> 0</span> Cart
                            </button>

                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            {/* <Nav>
                    <NavItem>
                        <Form className='d-flex'>
                            <Input type='search' placeholder='What are you looking for !!!' />
                            <Button className='bg-success'>
                                <span className='fa fa-search fa-lg'></span>Search
                            </Button>
                            <Button className='bg-danger'>
                                Cancel
                            </Button>
                        </Form>
                    </NavItem>
                </Nav>  */}


            <Form className=' d-flex justify-content-center align-items-center bg-light' style={{ paddingTop: '20px', paddingBottom: '20px', marginBottom: '50px' }} id='form_display'>

                <Input className='mx-1 ' type="search" placeholder="What are you looking For..." id='search_bar' />
                <Button className='button mt-md-0 mt-2 button_header' color="success text-center ms-2" ><span className='fa fa-search ' ></span> Search</Button>
                <Button className='button mt-md-0 mt-2 button_header' color="danger text-center ms-2" >Cancel</Button>

            </Form>




            {/* <Form className="d-flex justify-content-center ">
                <Input type="search" className="col-12 col-sm-6 col-md-4 col-lg-3" placeholder="What are you looking For..."></Input>
                <Button color="success" className="button mt-md-0 mt-2 col-6 col-md-2"><span className='fa fa-search mx-1'></span> Search</Button>
                <Button color="danger" className=" button  mt-md-0 mt-2 col-6 col-md-2">Cancel</Button>
            </Form> */}


            {/* <Form className='d-flex justify-content-center bg-light' style={{ paddingTop: '20px', paddingBottom: '20px', marginBottom: '50px' }}>

                <Input className='mx-1   ' type="search" placeholder="What are you looking For..." style={{ width: '25%' }} id='search_bar' />
                <Button className='button   mt-md-0 mt-2 button_header' color="success text-center ms-2" ><span className='fa fa-search '></span> Search</Button>
                <Button className='button  mt-md-0 mt-2 button_header' color="danger text-center ms-2" >Cancel</Button>

            </Form> */}




        </div >


    );
}

export default Header;
