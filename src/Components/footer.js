import { Link } from "react-router-dom";
import { Facebook, Instagram, Snapchat, Twitter } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

export default function Footer(){
    return(
            <div className="row footer mt-5">
         
            <div className=" col-sm-10  col-md-auto mx-auto">
                <h4> Help & Information</h4>
                <ul className="list-unstyled px-2">
                    <Link to='# ' className="footer-link" ><li>Help</li></Link>
                    <Link to='#' className="footer-link"><li>Track orders</li></Link>
                    <Link to='# ' className="footer-link"> <li>Delivery Information</li></Link>
                </ul >
            </div>
            <div className=" col-sm-10 col-md-auto mx-auto">
                <h4> About WEARS</h4>
                <ul className="list-unstyled px-2">
                <Link to='# ' className="footer-link" ><li>About us</li></Link>
                <Link to='#' className="footer-link"><li>Carres at WEARS</li></Link>
                <Link to='#' className="footer-link"><li>Coporate Responsibilities</li></Link>
                <Link to='#' className="footer-link"><li>Investors' sites</li></Link>

                </ul >
            </div>
            <div className=" col-sm-10 col-md-auto mx-auto">
                <h4> More From WEARS</h4>
                <ul className="list-unstyled px-2" >
                <Link to='#' className="footer-link"><li>Mobile & WEARS APP</li></Link>
                <Link to='#' className="footer-link" ><li>WEARS Marketplace</li></Link>
                <Link to='#' className="footer-link"><li>Gift vouchers</li></Link>
                <Link to='#' className="footer-link" ><li>Help</li></Link>
                <Link to='#' className="footer-link"><li>Black Friday</li></Link>
                <Link to='#' className="footer-link"><li>WEARS x Thrift-</li></Link>
                </ul >
            </div>
            <div className="col-12 text-center">
                <Button variant="outline-primary" className="border-0"><Facebook size={30}/></Button>
                <Button  variant="outline-danger" className="border-0" ><Instagram size={30}/></Button>
                <Button  variant="outline-primary" className="border-0" ><Twitter size={30}/></Button>
                <Button  variant="outline-warning" className="border-0 " ><Snapchat size={30}/></Button>


            </div>
        
        <div className=" col-12 footer py-3 text-center brand text-light"> ©️ wears 2022 ™</div>
        </div>
    )
}