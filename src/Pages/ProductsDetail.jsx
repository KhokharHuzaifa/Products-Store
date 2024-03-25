import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../Redux/CartReducer'

const ProductsDetail = () => {
    const { productId } = useParams();
    const {ProductReducer}=useSelector(state=>state);
    const CartProduct = ProductReducer.value.find((item) => item.id == productId);
    const filteredProduct = ProductReducer.value.filter((item)=> item.id == productId);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(AddToCart(CartProduct));
    }
    return (
        <div className='mt-5 ps-md-5 pe-md-5 ps-3 pe-3 pt-5'>
            <center>
                <p className='text-secondary fs-1'>Product Details</p>
                <hr />
                {
                    filteredProduct < 1 ? 
                    <center>
                            <div className="spinner-grow" role="status" style={{ width: '3rem', height: '3rem' }}></div>
                        </center> 
                    : 
                    filteredProduct.map((item, idx) => <div key={idx}>
                        <div className="row">
                            <div className='col-md-6 col-12 ps-5 pe-5 pt-5'>
                                <img src={item.image} alt="" className='img-fluid detail-img' />
                            </div>
                            <div className='col-md-6 col-12 mt-3 mt-md-0 pt-md-5'>
                                <hr />
                                <h4>{item.title}</h4>
                                <hr />
                                <i><p>{item.description}</p></i>
                                <hr />
                                <b>{item.category}</b>
                                <hr />
                                <span>Ratings : <b>{item.rating.rate}</b></span> &nbsp; &nbsp; &nbsp; &nbsp; <span>Count : <b>{item.rating.count}</b></span>
                                <hr />
                                <p>Price : <b>{item.price} $</b></p>
                                <hr />
                                <button className='btn btn-outline-dark' onClick={handleAddToCart}>Add to Cart</button>
                                <hr />
                                <Link to={'/products'} className='nav-link text-primary'>Go back...</Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            </center>
            <ToastContainer />
        </div>
    )
}

export default ProductsDetail
