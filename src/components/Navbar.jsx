import Logo from "../assets/ComLogo.png"
import "./Navbar.scss"
function Navbar() {
    return ( 
        <>
        <div className="navbar">
            <img src ={Logo} alt="logo-img"/>
            <div className="menu">
                <p>Home</p>
                <p>Service</p>
                <p>Feature</p>
                <p>Product</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div className="buttonGroup">
                <button>Login</button>
                <button>SignUp</button>
            </div>
        </div>
        </>
     );
}

export default Navbar;