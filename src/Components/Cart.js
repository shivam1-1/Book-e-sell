import { spa } from 'fontawesome';
import { Button, Media } from 'reactstrap';
function Cart() {
    return (
        <div className='container'>
            <h1 className="text-center">Cart Page</h1>
            <header className='mx-auto' style={{ width: '585.5px' }}>
                <h5>
                    <span>My Shopping Bag</span>
                    <span className='float-end'>Total price: 3000</span>
                </h5>
            </header>
            <section className='mt-3'>
                <Media className='border d-flex mx-auto' style={{ width: '585.2px', height: '149.2px', padding: '15px' }}>
                    <Media object style={{ width: '150px', height: '117.2px' }} src='https://images.unsplash.com/photo-1643918759634-727b386d1092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Bird'></Media>
                    <Media body className='ms-3 '>
                        <Media heading >Campus Sutra</Media>
                        <p>Cart item</p>
                        <div>
                            <button className='btn btn-danger fa fa-plus p-1'></button>
                            <span className='btn btn-light p-1 m-1'>1</span>
                            <button className='btn btn-danger fa fa-minus p-1'></button>
                        </div>
                    </Media>
                    <Media body className='text-end flex-grow-1'>
                        <Media heading>500</Media>
                        <p><s>1000</s><span className='text-danger fw-bold'> &nbsp; 50% </span></p>
                        <p role='button' className='text-danger '>Remove</p>
                    </Media>
                </Media>
                <Media className='border d-flex mx-auto mt-2' style={{ width: '585.2px', height: '149.2px', padding: '15px' }}>
                    <Media object style={{ width: '150px', height: '117.2px' }} src='https://images.unsplash.com/photo-1643918759634-727b386d1092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Bird'></Media>
                    <Media body className='ms-3 '>
                        <Media heading >Campus Sutra</Media>
                        <p>Cart item</p>
                        <div>
                            <button className='btn btn-danger fa fa-plus p-1'></button>
                            <span className='btn btn-light p-1 m-1'>1</span>
                            <button className='btn btn-danger fa fa-minus p-1'></button>
                        </div>
                    </Media>
                    <Media body className='text-end flex-grow-1'>
                        <Media heading>500</Media>
                        <p><s>1000</s><span className='text-danger fw-bold'> &nbsp; 50% </span></p>
                        <p role='button' className='text-danger '>Remove</p>
                    </Media>
                </Media>
                <Media className='border d-flex mx-auto mt-2' style={{ width: '585.2px', height: '149.2px', padding: '15px' }}>
                    <Media object style={{ width: '150px', height: '117.2px' }} src='https://images.unsplash.com/photo-1643918759634-727b386d1092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Bird'></Media>
                    <Media body className='ms-3 '>
                        <Media heading >Campus Sutra</Media>
                        <p>Cart item</p>
                        <div>
                            <button className='btn btn-danger fa fa-plus p-1'></button>
                            <span className='btn btn-light p-1 m-1'>1</span>
                            <button className='btn btn-danger fa fa-minus p-1'></button>
                        </div>
                    </Media>
                    <Media body className='text-end flex-grow-1'>
                        <Media heading>500</Media>
                        <p><s>1000</s><span className='text-danger fw-bold'> &nbsp; 50% </span></p>
                        <p role='button' className='text-danger '>Remove</p>
                    </Media>
                </Media>
            </section>
            <footer className='mx-auto' style={{ width: '585.2px', height: '149.2px' }}>
                <button className='btn btn-danger' style={{ margin: '30px 0px 0px 0px' }}>Place Order</button>
            </footer>
        </div >
    )
}
export default Cart;
