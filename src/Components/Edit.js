import { Form, FormGroup, Label, Input, Button, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import React from 'react';
function Edit() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggle = () => setDropdownOpen(prevstate => !prevstate);
    return (
        <div>
            <h1 className="text-center">Edit Product</h1>
            <Form className='container'>
                <div className='row'>
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="firstname">First Name *</Label>
                        <Input id="firstname" type="text" name="firstname" required></Input>
                    </FormGroup>
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="lastname">Last Name *</Label>
                        <Input id="lastname" name="lastname" type="text" required ></Input>
                    </FormGroup>
                </div>
                <div className='row'>
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="categories">Shop by Categories</Label>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle className='col-12 '> &nbsp; <span className='fa fa-chevron-down'></span></DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Academic</DropdownItem>
                                <DropdownItem>Sports</DropdownItem>
                                <DropdownItem>Romantic</DropdownItem>
                                <DropdownItem>Fiction</DropdownItem>
                                <DropdownItem>Realistic</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </FormGroup>
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="discription">Discription</Label>
                        <Input id="discription" name="discription" type="text"></Input>
                    </FormGroup>
                </div>
                <div className='row'>
                    <FormGroup className='col-md-6 col-12'>
                        <Input type='file' name='file' ></Input>
                    </FormGroup>
                </div>
                <Button className='bg-success'>Save</Button>
                <Button className='bg-danger'>Cancel</Button>
            </Form>
        </div>
    )
}
export default Edit;