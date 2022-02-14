import { Form, Input, Button, FormGroup, Table } from 'reactstrap';
function Product() {
    return (
        <div className='container'>
            <h1 className="text-center">Product Page</h1>
            <Form>
                <FormGroup className='row'>
                    <Input type="search" placeholder="Search ..." className='ms-auto col-md-3 col-8 ' style={{ width: '300px', height: '40px' }} id='search_ms_0' />
                    <Button color="danger" className='col-md-4 button ms-2' id='btn_margin_top'>Add Product</Button>
                </FormGroup>
            </Form>

            <div className='table-responsive-md'>
                <Table className='table' id='border_collapse'>
                    <thead>
                        <tr style={{ height: '' }}>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Data Source</td>
                            <td>Query</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ height: '64px' }}>
                            <td>12</td>
                            <td>IBSM Follow Up</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>

                            <td className=''>
                                <ul className='product_list d-flex list-unstyled justify-content-end mb-0'>
                                    <li className='' >
                                        <a href='#' className='btn btn-outline-success button_product'>Edit</a>
                                    </li>
                                    <li className='text-decoration-none ms-2'>
                                        <a href='#' className='btn btn-outline-danger button_product'>Delete</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr style={{ height: '64px' }}>
                            <td>13</td>
                            <td>IBSM Follow Up</td>
                            <td>Data Source 2</td>
                            <td>Teste</td>
                            <td className=''>
                                <ul className='product_list d-flex list-unstyled justify-content-end mb-0'>
                                    <li className='' >
                                        <a href='#' className='btn btn-outline-success button_product'>Edit</a>
                                    </li>
                                    <li className='text-decoration-none ms-2'>
                                        <a href='#' className='btn btn-outline-danger button_product'>Delete</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr style={{ height: '64px' }}>
                            <td>24</td>
                            <td>IBSM Follow Up</td>
                            <td>Data Source 2</td>
                            <td>Teste</td>
                            <td className=''>
                                <ul className='product_list d-flex list-unstyled justify-content-end mb-0'>
                                    <li className='' >
                                        <a href='#' className='btn btn-outline-success button_product'>Edit</a>
                                    </li>
                                    <li className='text-decoration-none ms-2'>
                                        <a href='#' className='btn btn-outline-danger button_product'>Delete</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr style={{ height: '64px' }}>
                            <td>16</td>
                            <td>IBSM Follow Up</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td className=''>
                                <ul className='product_list d-flex list-unstyled justify-content-end mb-0'>
                                    <li className='' >
                                        <a href='#' className='btn btn-outline-success button_product'>Edit</a>
                                    </li>
                                    <li className='text-decoration-none ms-2'>
                                        <a href='#' className='btn btn-outline-danger button_product'>Delete</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr style={{ height: '64px' }}>
                            <td>21</td>
                            <td>IBSM Follow Up</td>
                            <td>Data Source 2</td>
                            <td>Teste</td>
                            <td className=''>
                                <ul className='product_list d-flex list-unstyled justify-content-end mb-0'>
                                    <li className='' >
                                        <a href='#' className='btn btn-outline-success button_product'>Edit</a>
                                    </li>
                                    <li className='text-decoration-none ms-2'>
                                        <a href='#' className='btn btn-outline-danger button_product'>Delete</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr style={{ height: '64px' }} className=''>
                            <td>23</td>
                            <td>IBSM Follow Up</td>
                            <td>Data Source 2</td>
                            <td>Teste</td>
                            <td className=''>
                                <ul className='product_list d-flex list-unstyled justify-content-end mb-0'>
                                    <li className='' >
                                        <a href='#' className='btn btn-outline-success button_product'>Edit</a>
                                    </li>
                                    <li className='text-decoration-none ms-2'>
                                        <a href='#' className='btn btn-outline-danger button_product'>Delete</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody >
                </Table >
                <div className='d-flex justify-content-end align-items-center'>
                    <p className='mb-0 me-2'>Rows per Page</p>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                    <p className='mb-0 ms-2'>1-5 of 6 </p>
                    <ul className='d-flex list-unstyled align-items-center mb-0 '>
                        <li className='ps-2 '>
                            <a href='#' className='text-decoration-none text-dark ' ><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg></a>
                        </li>
                        <li className='ps-2'>
                            <a href='#' className='text-decoration-none text-dark'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg></a>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    )
}

export default Product;