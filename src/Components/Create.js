import { FormGroup, Input, Label, Form, Button } from "reactstrap";

function Create() {
    return (
        <div className="container">
            <nav style={{ breadcrumbDivider: '>' }} aria-label="breadcrumb" >
                <ol className="breadcrumb justify-content-center mb-0 ">
                    <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-dark">Home</a></li>
                    <li className="breadcrumb-item active text-danger" aria-current="page">Create an Account</li>
                </ol>
            </nav>
            <h1 className="text-center pt-2 pb-3">Login or Create an Account</h1>
            <Form>
                <h4>Personal Information</h4>
                <hr></hr>
                <p>Please enter following details to create an account</p>
                <div className="row">
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="firstname">First Name *</Label>
                        <Input id="firstname" type="text" name="firstname" required></Input>
                    </FormGroup>
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="lastname">Last Name *</Label>
                        <Input id="lastname" name="lastname" type="text" required ></Input>
                    </FormGroup>
                </div>
                <FormGroup>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required ></Input>
                </FormGroup>

                <h4 className="mt-4 mt-md-0">Login Information</h4>
                <hr></hr>
                <div className="row">
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="password">Password *</Label>
                        <Input id="password" name="password" type="password" required ></Input>
                    </FormGroup>
                    <FormGroup className="col-md-6 col-12 ">
                        <Label htmlFor="confirmpassword">Confirm Password *</Label>
                        <Input id="confirmpassword" name="confirmpassword" type="password" required ></Input>
                    </FormGroup>
                </div>
                <Button className="bg-danger button text-light">Register</Button>
            </Form>

        </div>
    )
}

export default Create;