import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="home ps-md-5 pe-md-5 ps-3 pe-3 mt-md-5 pt-md-5 pt-0 mt-0">
      <center>
              <p className="text-secondary fs-1">Welcome to HStore</p>
              <hr className="mb-4"/>
              <img src='/ecom.png' className="img-fluid home-img" alt="" />
              <Link className=" text-primary" to={'/products'}><i><h5>Visit our store</h5></i></Link>
      </center>
    </div>
  )
}

export default Home
