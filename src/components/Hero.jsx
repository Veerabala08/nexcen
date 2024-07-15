import Illustration from "../assets/Illustration.png"
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
import logo7 from "../assets/logo7.png"
import './Hero.scss'

function Hero() {
    return ( 
        <>
        <div className="container">
        <div>
            <h1>Lesson and Insight<br/> from 8 Years</h1>
            <p>Where to grow your business as a photographer: site or social media?</p>
            <button>Register</button>
        </div>
        <div>
        <img src={Illustration} alt="Illustration" />
        </div>
        </div>
        <div className="container2">
            <div>
                <h1>Our Clients</h1>
                <p>We have been working with some 500+ fortune clients</p>
            </div>
                <div className="clientLogo">
                    <img src={logo1}/>
                    <img src={logo2}/>
                    <img src={logo3}/>
                    <img src={logo4}/>
                    <img src={logo5}/>
                    <img src={logo6}/>
                    <img src={logo7}/>
                </div>
        </div>
        </>
     );
}

export default Hero;

