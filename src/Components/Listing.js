import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Card, CardImg, CardBody, CardHeader, Button, CardText, CardTitle, CardSubtitle, Label, FormGroup } from 'reactstrap';
import React from 'react';
import { spa, strikethrough } from 'fontawesome';

function Listing() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggle = () => setDropdownOpen(prevstate => !prevstate);
    return (
        <div className='container' style={{ width: '1031px' }}>
            <h1 className="text-center">Product Listing</h1>
            <section className='row'>
                <p className='col-9'>Product name - 14659 items</p>

                <div className='col-3'>
                    <FormGroup className='d-flex justify-content-end align-items-center'>
                        <Label htmlFor='dropdown'>Sort By</Label>
                        <Dropdown name='dropdown' id='dropdown' isOpen={dropdownOpen} toggle={toggle} className='mx-2'>
                            <DropdownToggle className=''>&nbsp;&nbsp; a - z &nbsp; &nbsp; <span className='fa fa-chevron-down'></span></DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>New</DropdownItem>
                                <DropdownItem>Featured</DropdownItem>
                                <DropdownItem>Price Low-High</DropdownItem>
                                <DropdownItem>Price High-Low</DropdownItem>
                                {/* <DropdownItem></DropdownItem> */}
                            </DropdownMenu>
                        </Dropdown>
                    </FormGroup>
                </div>
            </section>
            <section className='row'>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <Card style={{ width: '227.67px', height: '494.17px' }}>
                        <CardImg style={{ width: '227.67px', height: '188.5px' }} src='https://images.unsplash.com/photo-1643918759634-727b386d1092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Bird' />
                        <CardBody>
                            <CardTitle className='fw-bold mb-0 pb-0'>Product Title</CardTitle>
                            <CardSubtitle className='mt-0 pb-0'>Lorem</CardSubtitle>
                            <CardText className='fs-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text o</CardText>
                            <CardText>MRP <s>$1000 </s><span className='text-success'> 20.00 % off</span></CardText>
                            <CardText><span className='fa fa-inr'></span> 800</CardText>
                        </CardBody>
                        <Button className='bg-danger'>Add to Cart</Button>
                    </Card>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <Card style={{ width: '227.67px', height: '494.17px' }}>
                        <CardImg style={{ width: '227.67px', height: '188.5px' }} src='https://images.unsplash.com/photo-1643918759634-727b386d1092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Bird' />
                        <CardBody>
                            <CardTitle className='fw-bold mb-0 pb-0'>Product Title</CardTitle>
                            <CardSubtitle className='mt-0 pb-0'>Lorem</CardSubtitle>
                            <CardText className='fs-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text o</CardText>
                            <CardText>MRP <s>$1000 </s><span className='text-success'> 20.00 % off</span></CardText>
                            <CardText><span className='fa fa-inr'></span> 800</CardText>
                        </CardBody>
                        <Button className='bg-danger'>Add to Cart</Button>
                    </Card>
                </div>
                <div className='col-sm-6 col-md-3'>
                    <Card style={{ width: '227.67px', height: '494.17px' }}>
                        <CardImg style={{ width: '227.67px', height: '188.5px' }} src='https://images.unsplash.com/photo-1643918759634-727b386d1092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Bird' />
                        <CardBody>
                            <CardTitle className='fw-bold mb-0 pb-0'>Product Title</CardTitle>
                            <CardSubtitle className='mt-0 pb-0'>Lorem</CardSubtitle>
                            <CardText className='fs-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text o</CardText>
                            <CardText>MRP <s>$1000 </s><span className='text-success'> 20.00 % off</span></CardText>
                            <CardText><span className='fa fa-inr'></span> 800</CardText>
                        </CardBody>
                        <Button className='bg-danger'>Add to Cart</Button>
                    </Card>
                </div>
                <div className='col-sm-6 col-md-3'>
                    <Card style={{ width: '227.67px', height: '494.17px' }}>
                        <CardImg style={{ width: '227.67px', height: '188.5px' }} src='https://images.unsplash.com/photo-1643918759634-727b386d1092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Bird' />
                        <CardBody>
                            <CardTitle className='fw-bold mb-0 pb-0'>Product Title</CardTitle>
                            <CardSubtitle className='mt-0 pb-0'>Lorem</CardSubtitle>
                            <CardText className='fs-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text o</CardText>
                            <CardText>MRP <s>$1000 </s><span className='text-success'> 20.00 % off</span></CardText>
                            <CardText><span className='fa fa-inr'></span> 800</CardText>
                        </CardBody>
                        <Button className='bg-danger'>Add to Cart</Button>
                    </Card>
                </div>
                <div className='col-sm-6 col-md-3'>
                    <Card style={{ width: '227.67px', height: '494.17px' }}>
                        <CardImg style={{ width: '227.67px', height: '188.5px' }} src='https://images.unsplash.com/photo-1643918759634-727b386d1092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Bird' />
                        <CardBody>
                            <CardTitle className='fw-bold mb-0 pb-0'>Product Title</CardTitle>
                            <CardSubtitle className='mt-0 pb-0'>Lorem</CardSubtitle>
                            <CardText className='fs-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text o</CardText>
                            <CardText>MRP <s>$1000 </s><span className='text-success'> 20.00 % off</span></CardText>
                            <CardText><span className='fa fa-inr'></span> 800</CardText>
                        </CardBody>
                        <Button className='bg-danger'>Add to Cart</Button>
                    </Card>
                </div>
            </section>
            <ul className='pagination justify-content-center my-3'>
                <li className='page-item'><a className='page-link' href='#'>&lt;</a></li>
                <li className='page-item'><a className='page-link' href='#'>1</a></li>
                <li className='page-item'><a className='page-link' href='#'>2</a></li>
                <li className='page-item'><a className='page-link' href='#'>3</a></li>
                <li className='page-item'><a className='page-link' href='#'>4</a></li>
                <li className='page-item'><a className='page-link' href='#'>&gt;</a></li>

            </ul>
        </div>
    )
}
export default Listing;
