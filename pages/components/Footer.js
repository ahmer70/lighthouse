import Link from "next/link"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import About from './About';
export default function Footer() {
    return (

        <>

            <footer className="text-center text-lg-start py-3 bg-dark text-white">



                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <h3 className="footer-header-title">the<span className="footer-header-title-span">LIGHTHOUSE-</span>PORTAL</h3>
                                    <p className="footer-header-hashtag">#THELIGHTHOUSEPORTAL</p>
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>



                            <div className="col-md-4 col-lg-4 col-xl-4  mx-auto mb-4">


                                <p>
                                    <Link href="/terms-conditions/">
                                        <a className="footer-links-terms-conditions text-white text-decoration-none">TERMS AND CONDITIONS</a>
                                    </Link>

                                </p>
                                <p>
                                    <Link href="/privacy/">
                                        <a className="footer-links-privacy-policy text-white text-decoration-none">PRIVACY POLICY</a>
                                    </Link>                                </p>
                                <p>
                                    <Link href="/about-us/">
                                        <a className="footer-links-privacy-policy text-white text-decoration-none">About US</a>
                                    </Link>
                                </p>
                                <p>
                                    <Link href="/">
                                        <a className="footer-links-privacy-policy text-white text-decoration-none">OUR STORY</a>
                                    </Link>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p> P.O. Box 156 New Jersey, USA</p>
                                <p>

                                    <a href="mailto:support@lighthouse_portal.com" className="footer-body-contact-us-email">support@lighthouse_portal.com</a>
                                </p>
                                <img src="/assets/images/apple.webp" alt="apple" className="w-100" />

                            </div>

                        </div>

                    </div>
                </section>
                <section className="d-flex justify-content-center border-top justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block">
                        <span>© 2021 Copyright:</span>
                    </div>

                    <div>
                        <a href="" className="me-4 link-secondary">
                            <span className=" rounded-circle p-2 text-white" style={{ backgroundColor: "#4267B2" }}><FaFacebookF /></span>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <span className=" rounded-circle p-2 text-white" style={{ backgroundColor: "#00acee" }}><FaTwitter /></span>
                        </a>

                        <a href="" className="me-4 link-secondary">
                            <span className=" rounded-circle p-2 text-white" style={{ backgroundColor: "#0072b1" }}><FaLinkedinIn /></span>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <span className=" rounded-circle p-2 text-white" style={{ backgroundColor: "#8a3ab9" }}><FaInstagram /></span>
                        </a>

                    </div>

                </section>


            </footer>

            
        </>

    )
}