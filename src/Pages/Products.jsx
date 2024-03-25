import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreProducts } from "../Redux/ProductsReducer";

function Products() {

    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => dispatch(StoreProducts(data)));
    }, [])
    const {ProductReducer}=useSelector(state=>state);

    return (
        <div className="ps-md-5 pe-md-5 ps-3 pe-3 mt-5 pt-5">
            <center className="mb-5">
                {/* <br /><br /><br /> */}
                <p className="text-secondary fs-1">Our Products</p>
                <hr />
            </center>
            <div className="row">
                {
                    ProductReducer.value.length < 1 ?
                     <center>
                            <div className="spinner-grow" role="status" style={{ width: '3rem', height: '3rem' }}></div>
                     </center> 
                     : 
                        ProductReducer.value.map((items, idx) => <Card items={items} key={idx} idx={idx} />)
                }
            </div>
        </div>
    )
}

export default Products

export function Card({ items ,idx}) {

    const { image,category } = items
    return (
        <div className="col-md-4 col-sm-6 col-12 mb-4">
            <Link to={`/productDetail/${idx + 1}`} className="nav-link">
            <div className="card">
                <div className="parent-card-img mt-3 container">
                    <img src={image} className="img-fluid container card-img" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{category}</h5>
                    <p className="text-primary">Read more...</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

