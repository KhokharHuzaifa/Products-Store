import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { delCartProduct } from "../Redux/CartReducer"

function HeaderNav() {

    const { CartReducer } = useSelector(state => state);
    const dispatch = useDispatch();
   
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
                                    </center> :
                                        CartReducer.value.map((item, idx) =>
                                                <div key={idx} className="card-cart mt-4 card">
                                                    <div className="mt-md-3 mt-2 mt-md-0">
                                                        <center>
                                                            <b className="text-secondary container">{item.title}</b><br />
                                                            <div className="cart-img-cont">
                                                                <img src={item.image} alt="" className="img-fluid cart-img mt-2 mb-2" />
                                                            </div>
                                                            <div className="bg-dark d-flex text-light justify-content-around align-items-center">
                                                                <div>
                                                                    <>Price : </><b>{item.price}$</b>
                                                                </div>
                                                                <div>
                                                                    <i className="ri-delete-bin-6-line fs-4 ms-3 text-danger" onClick={() => handleDelProduct(item.id)}></i>
                                                                </div>
                                                            </div>
                                                        </center>
                                                    </div>
                                                </div>
                                        )
                                }

                            </div>
                            <div className="container bg-warning pt-2 ">
                                <h3>Total Price : {
                                    Math.floor(CartReducer.value.reduce((total, item) => total + item.price, 0))
                                }$
                                </h3>
                            </div>
                        </div>
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default HeaderNav
