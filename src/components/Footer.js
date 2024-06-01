import React from 'react';


const Footer = () => {
  return (
    <footer aria-label="Footer">
        <section>
            {/* Complimentary close */}
            <div className="footer-note">
                <div 
                    className="footer-entry-title"
                    style={{color: "var(--base-green)"}}
                >
                    ZSI Energy
                </div>
                <div className="footer-note-brief">
                    Building a strong and distinctive reputation for delivering high-quality, efficient services to the energy and natural resource industry in Nigeria.
                </div>
                <div className="address">
                    <div>
                        <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717252329/zsienergy/location_icon_zwm0nk.svg" alt="location icon" />
                    </div>
                    <ul>
                        <li>
                            No. 100, East West Road Rumuokoro,<br />
                            Port Harcourt, Rivers State
                        </li>
                        <li>
                            1755, 5th Floor, Forum Building, Frans Indongo<br />
                            Street, CBD, Windhoek, Namibia
                        </li>
                        <li>
                            12802 Crow Valley Ln,<br/>
                            Houston, TX 77099, USA
                        </li>
                    </ul>
                </div>
            </div>
            {/* List of services */}
            <div className="footer-services">
                <div className="footer-entry-title">Services</div>
                <ul>
                <li>Marine and Logistics Services</li>
                <li>Marine Fuel supply and Bunkering Services</li>
                <li>Pipeline and Fabrication Services</li>
                <li>Civil Engineering Works</li>
                <li>Procurement Services</li>
                <li>Consultancy Services</li>
                <li>Information Technology</li>
                <li>Waste management</li>
                </ul>
            </div>
            {/* Links */}
            <div className="footer-links">
                <div className="footer-entry-title">Explore</div>
                <ul>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/about">About us</a>
                    </li>
                </ul>
            </div>
            {/* Contact info */}
            <div className="footer-connect">
                <div className="footer-entry-title">Connect</div>
                <div className="phone-no">
                    <div>
                        <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717252337/zsienergy/telephone_icon_ew0il5.svg" alt="Telephone icon" />
                    </div>
                    <ul>
                        <li>+2348037347360</li>
                        <li>+2348071274090</li>
                    </ul>
                </div>
                <div className="email">
                    <div>
                        <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717252329/zsienergy/email_icon_wjalw5.svg" alt="email icon" />
                    </div>
                    <ul>
                        <li>
                        <a href="mailto:info@zsienergy.com">info@zsienergy.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div className="copyright-note">
            All Right Reserved © ZSI ENERGY LIMITED 2024
        </div>
    </footer>
  );
}

export default Footer;