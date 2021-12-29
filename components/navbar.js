import Link from 'next/link';
import React from 'react';
import Footer from './footer';
import Header from './header';
const Navbar = () => {
    return (
        <>
        <Header/>
        <div className="home page-template-default page page-id-7684 theme-mediz gdlr-core-body woocommerce-no-js mediz-body mediz-body-front mediz-full  mediz-with-sticky-navigation  mediz-sticky-navigation-no-logo  mediz-blockquote-style-1 gdlr-core-link-to-lightbox" data-home-url="index.html">
        <div className="mediz-mobile-header-wrap">
            <div className="mediz-mobile-header mediz-header-background mediz-style-slide mediz-sticky-mobile-navigation " id="mediz-mobile-header">
                <div className="mediz-mobile-header-container mediz-container clearfix">
                    <div className="mediz-logo  mediz-item-pdlr">
                        <div className="mediz-logo-inner">
                            <Link href="/"><a className=""><img src="upload/logo.png" alt="" style={{ width : 50}} title="logo" /></a></Link>
                        </div>
                    </div>
                    <div className="mediz-mobile-menu-right">
                        
                        <div className="mediz-overlay-menu mediz-mobile-menu" id="mediz-mobile-menu">
                            <Link href="#"><a className="mediz-overlay-menu-icon mediz-mobile-menu-button mediz-mobile-button-hamburger"><span></span></a></Link>
                            <div className="mediz-overlay-menu-content mediz-navigation-font">
                                <div className="mediz-overlay-menu-close"></div>
                                <div className="mediz-overlay-menu-row">
                                    <div className="mediz-overlay-menu-cell">
                                        <ul id="menu-main-navigation" className="menu">
                                            <li className="menu-item menu-item-home current-menu-item page_item page-item-7684 current_page_item"><Link href="/"><a aria-current="page">Home</a></Link></li>
                                            <li className="menu-item menu-item-home current-menu-item page_item page-item-7684 current_page_item"><Link href="/about"><a  aria-current="page">About</a></Link></li>
                                            <li className="menu-item menu-item-home current-menu-item page_item page-item-7684 current_page_item"><Link href="/services"><a  aria-current="page">Services</a></Link></li>
                                            <li className="menu-item menu-item-home current-menu-item page_item page-item-7684 current_page_item"><Link href="/contact"><a  aria-current="page">Contact</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mediz-body-outer-wrapper ">
            <div className="mediz-body-wrapper clearfix  mediz-with-frame">
                <div className="mediz-top-bar">
                    <div className="mediz-top-bar-background"></div>
                    <div className="mediz-top-bar-container mediz-container ">
                        <div className="mediz-top-bar-container-inner clearfix">
                            <div className="mediz-top-bar-left mediz-item-pdlr"><i className="icon-clock" style={{fontSize: 19 , color: '#17449E' , marginLeft: 25, marginRight: 10 }}></i>Mon - Sun 0900 - 2100
                                <i className="icon-phone" style={{fontSize: 19 , color: '#17449E' , marginLeft: 25, marginRight: 10 }}></i>+1-2345-3455-33<i className="icon-envelope" style={{fontSize: 19 , color: '#17449E' , marginLeft: 25, marginRight: 10 }}></i>
                                <Link href="#"><span className="__cf_email__" >test@gmail.com</span></Link>
                                </div>
                            <div className="mediz-top-bar-right mediz-item-pdlr">
                                <div className="mediz-top-bar-right-social">
                                    <Link href="#"><a  target="_blank" className="mediz-top-bar-social-icon" title="facebook"><i className="fa fa-facebook" ></i></a></Link>
                                    <Link href="#"><a target="_blank" className="mediz-top-bar-social-icon" title="linkedin"><i className="fa fa-linkedin" ></i></a></Link>
                                    <Link href="#"><a target="_blank" className="mediz-top-bar-social-icon" title="pinterest"><i className="fa fa-pinterest-p" ></i></a></Link>
                                    <Link href="#"><a target="_blank" className="mediz-top-bar-social-icon" title="twitter"><i className="fa fa-twitter" ></i></a></Link>
                                    <Link href="#"><a target="_blank" className="mediz-top-bar-social-icon" title="instagram"><i className="fa fa-instagram" ></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="mediz-header-wrap mediz-header-style-bar mediz-header-background  mediz-style-left">
                    <div className="mediz-header-container clearfix  mediz-container">
                        <div className="mediz-header-container-inner">
                            <div className="mediz-logo  mediz-item-pdlr">
                                <div className="mediz-logo-inner">
                                    <Link href="/"><a className=""><img src="upload/logo.png" alt="" style={{ width : 80}} title="logo" /></a></Link>
                                </div>
                                
                            </div>
                            <div className="mediz-logo-right-text mediz-item-pdlr clearfix">
                                    <div className="mediz-logo-right-text-wrap"><i className="mediz-logo-right-text-icon icon-check"></i>
                                        <div className="mediz-logo-right-text-content-wrap">
                                            <div className="mediz-logo-right-text-title">Trusted By</div>
                                            <div className="mediz-logo-right-text-caption">1200+ People</div>
                                        </div>
                                    </div>
                                    <div className="mediz-logo-right-text-wrap"><i className="mediz-logo-right-text-icon icon-check"></i>
                                        <div className="mediz-logo-right-text-content-wrap">
                                            <div className="mediz-logo-right-text-title">Best Hospital</div>
                                            <div className="mediz-logo-right-text-caption"></div>
                                        </div>
                                    </div>
                                    <div className="mediz-logo-right-text-wrap"><i className="mediz-logo-right-text-icon icon-check"></i>
                                        <div className="mediz-logo-right-text-content-wrap">
                                            <div className="mediz-logo-right-text-title">Number #1</div>
                                            <div className="mediz-logo-right-text-caption"></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </header>
                <div className="mediz-navigation-bar-wrap  mediz-style-solid mediz-sticky-navigation mediz-sticky-navigation-height mediz-style-left  mediz-style-fixed">
                    <div className="mediz-navigation-background"></div>
                    <div className="mediz-navigation-container clearfix  mediz-container">
                        <div className="mediz-navigation mediz-item-pdlr clearfix ">
                            <div className="mediz-main-menu" id="mediz-main-menu">
                                <ul id="menu-main-navigation-1" className="sf-menu">
                                    <li className="menu-item menu-item-home current-menu-item page_item page-item-7684 current_page_item mediz-normal-menu"><Link href="/"><a >Home</a></Link></li>
                                    <li className="menu-item menu-item-home current-menu-item page_item page-item-7684 current_page_item mediz-normal-menu"><Link href="/about"><a >About</a></Link></li>
                                    <li className="menu-item menu-item-home current-menu-item page_item page-item-7684 current_page_item mediz-normal-menu"><Link href="/services"><a>Services</a></Link></li>
                                    <li className="menu-item menu-item-home current-menu-item page_item page-item-7684 current_page_item mediz-normal-menu"><Link href="/contact"><a >Contact</a></Link></li>
                                </ul>
                                <div className="mediz-navigation-slide-bar  mediz-navigation-slide-bar-style-2" data-size-offset="0" id="mediz-navigation-slide-bar"></div>
                            </div>
                            <div className="mediz-main-menu-right-wrap clearfix ">
                                <Link href="/contact"><a className="mediz-main-menu-right-button mediz-button-1 mediz-style-round " target="_self">Contact Now</a></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
 
export default Navbar;