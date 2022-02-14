import { FormGroup, Form, Button, Input, Label, Nav } from "reactstrap";

function Login() {
    return (
        <div className="container" >
            <nav style={{ breadcrumbDivider: '>' }} aria-label="breadcrumb" >
                <ol className="breadcrumb justify-content-center mb-0 ">
                    <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-dark">Home</a></li>
                    <li className="breadcrumb-item active text-danger" aria-current="page">Login</li>
                </ol>
            </nav>
            <h1 className="text-center heading pt-2 pb-3 ">Login or Create an Account</h1>
            <div className="row">
                <section className="col-md-6 col-12">
                    <h5>New Customer</h5>
                    <hr />
                    <div>
                        <p>
                            Registration is free and easy.
                        </p>
                        <ul>
                            <li>Faster checkout</li>
                            <li>Save multiple shipping addressess</li>
                            <li>View and track orders and more</li>
                        </ul>
                        <div className="pt-0 pt-md-5">
                            <Button className="bg-danger text-light mt-0 mt-md-5  " style={{ width: '220px', height: '45px' }} >Create an Account</Button>
                        </div>
                    </div>
                </section>
                <section className="col-md-6 col-12 mt-4 mt-md-0">
                    <h5>
                        Registered Customers
                    </h5>
                    <hr />
                    <div>
                        <p>If you have an account with us, please log in</p>
                        <Form className="">
                            <FormGroup>
                                <Label htmlFor="email">Email Address</Label>
                                <Input type='email' id="email"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type='password' id="password"></Input>
                            </FormGroup>
                            <Button className="bg-danger text-light mt-0 mt-md-3" style={{ width: '100px', height: '45px' }}>Log In</Button>
                        </Form>
                    </div>
                </section>
            </div>
        </div >
    );
}

export default Login;