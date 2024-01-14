import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../../../Style.Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>

                <div className="row">
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="row">
                    Globe General Constraction Copyright © 2023 - All rights reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer