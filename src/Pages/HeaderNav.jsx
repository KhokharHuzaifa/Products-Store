import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { delCartProduct } from "../Redux/CartReducer"

function HeaderNav() {
    const { CartReducer } = useSelector(state => state);
    const dispatch = useDispatch();
    const handleDelProduct = (id) => {
        dispatch(delCartProduct(id));
    }
    return (
        <div>
            <nav className="navigation container-fluid fixed-top">
                <div>
                    <Link className="navbar-brand fs-3" to={'/'}><b>H</b>Store</Link>
                </div>
                <div className="nav-links me-2">
                    <Link className="nav-link" to={'/'}><b>Home</b></Link>
                    <Link className="nav-link ms-4" to={'/products'}><b>Products</b></Link>
                    <span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                            <><i className="ri-shopping-cart-line cart fs-3 ms-3"></i></>
                            <span className="position-absolute translate-middle badge bg-danger">{CartReducer.value.length}</span>
                        </button>
                        <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
                            <div className="offcanvas-header">
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                            </div>
                            <div className="offcanvas-body">
                                <center><h3 className="offcanvas-title" id="offcanvasNavbarLabel">Shopping Cart</h3></center>
                                <hr />
                                {
                                    CartReducer.value < 1 ? <center className="mt-5">
                                        <h4 className="text-danger">Oops Cart is empty</h4>
                                        </center>:
                                        CartReducer.value.map((item, idx) =>
                                            <div key={idx} className="d-flex card-cart pb-3 pb-md-2 mt-4 pt-3 pt-md-2">
                                                <div className="cart-img-cont">
                                                    <img src={item.image} alt="" className="img-fluid cart-img ms-2 mt-2"/>
                                                </div>
                                                <div className="mt-md-3 container ms-2 mt-2 mt-md-0">
                                                    <center>
                                                        <b className="text-secondary">{item.title}</b><br />
                                                        <b>Total : </b><b className="text-primary">{item.price} $</b><br />
                                                        <i className="ri-delete-bin-6-line btn btn-danger mt-2 ms-3" onClick={() => handleDelProduct(item.id)}></i>
                                                    </center>
                                                    
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </span>
                </div>
            </nav>
            <ToastContainer />
        </div>
    )
}

export default HeaderNav
