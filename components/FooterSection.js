import React from 'react'

function FooterSection() {
    return (
        <footer>
                <div className="mediz-footer-wrapper ">
                    <div className="mediz-footer-container mediz-container clearfix">
                        <div className="mediz-footer-column mediz-item-pdlr mediz-column-20">
                            <div id="text-1" className="widget widget_text mediz-widget">
                                <div className="textwidget">
                                    <p><img className="alignnone size-full wp-image-6129" src="upload/logo.png" alt="" style={{width : 80}} />
                                        <br />
                                        <span className="gdlr-core-space-shortcode" style={{marginTop : -27}}></span>
                                        <br /> Box 3233
                                        <br /> 1810 Kings Way
                                        <br /> King Street, 5th Avenue, New York
                                        <br />
                                        <span className="gdlr-core-space-shortcode" style={{marginTop : 0}}></span>
                                        <br />
                                        <i className="icon-phone" style={{fontSize: 19,color: '#17449E', marginRight: 10 }}></i><span style={{color: '#17449e'}}>+1-2345-3455-33</span>
                                        <br />
                                        <span className="gdlr-core-space-shortcode" style={{marginTop : -15}}></span>
                                        <br />
                                        <i className="icon-envelope" style={{fontSize: 19,color: '#17449E', marginRight: 10 }}></i><a href="#" style={{color: '#17449e'}}><span className="__cf_email__">test@gmail.com</span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="mediz-footer-column mediz-item-pdlr mediz-column-20">
                            <div id="nav_menu-3" className="widget widget_nav_menu mediz-widget">
                                <h3 className="mediz-widget-title">Quick Links</h3><span className="clear"></span>
                                <div className="menu-about-us-container">
                                    <ul id="menu-about-us" className="menu">
                                        <li className="menu-item"><a href="/about">About us</a></li>
                                        <li className="menu-item"><a href="/servies">Our Services</a></li>
                                        <li className="menu-item"><a href="/about">Our Mission &#038; Values</a></li>
                                        <li className="menu-item"><a href="/contact">Contact</a></li>
                                        {/* <li className="menu-item"><a href="#">Career</a></li> */}
                                        {/* <li className="menu-item"><a href="#">Blog</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="mediz-footer-column mediz-item-pdlr mediz-column-15">
                            <div id="nav_menu-2" className="widget widget_nav_menu mediz-widget">
                                <h3 className="mediz-widget-title">Our Services</h3><span className="clear"></span>
                                <div className="menu-our-services-container">
                                    <ul id="menu-our-services" className="menu">
                                        <li className="menu-item"><a href="#">Lung Diseases</a></li>
                                        <li className="menu-item"><a href="#">Orthopaedic</a></li>
                                        <li className="menu-item"><a href="#">Pharmacy</a></li>
                                        <li className="menu-item"><a href="#">Sport Injury</a></li>
                                        <li className="menu-item"><a href="#">Heart</a></li>
                                        <li className="menu-item"><a href="#">Dental Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <div className="mediz-footer-column mediz-item-pdlr mediz-column-15">
                            <div id="gdlr-core-opening-hour-widget-3" className="widget widget_gdlr-core-opening-hour-widget mediz-widget">
                                <h3 className="mediz-widget-title">Hospital Hours</h3><span className="clear"></span>
                                <div className="gdlr-core-opening-hour-widget" style={{color: '#17449e'}}>
                                    <div className="gdlr-core-opening-hour-widget-list clearfix"><span className="gdlr-core-head"><i className="icon-clock" ></i>Monday - Friday</span><span className="gdlr-core-tail">08:00 - 20:00</span></div>
                                    <div className="gdlr-core-opening-hour-widget-list clearfix"><span className="gdlr-core-head"><i className="icon-clock" ></i>Saturday</span><span className="gdlr-core-tail">09:00 - 18:00</span></div>
                                    <div className="gdlr-core-opening-hour-widget-list clearfix"><span className="gdlr-core-head"><i className="icon-clock" ></i>Sunday</span><span className="gdlr-core-tail">09:00 - 18:00</span></div>
                                </div>
                            </div>
                            <div id="text-9" className="widget widget_text mediz-widget">
                                <div className="textwidget">
                                    <p><span className="gdlr-core-space-shortcode" style={{marginTop : -23}}></span><a className="gdlr-core-button gdlr-core-button-shortcode  gdlr-core-button-solid gdlr-core-button-no-border emergency-24-hours-btn" href="/contact" target="_blank" rel="noopener noreferrer"><span className="gdlr-core-content" >Emergency : 24 hours</span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mediz-copyright-wrapper">
                    <div className="mediz-copyright-container mediz-container clearfix">
                        <div className="mediz-copyright-left mediz-item-pdlr">
                            <div className="gdlr-core-social-network-item gdlr-core-item-pdb  gdlr-core-none-align" style={{paddingBottom:0}}><a href="#url" target="_blank" className="gdlr-core-social-network-icon" title="facebook" style={{fontSize: 17, color: '#17449E'}}><i className="fa fa-facebook" ></i></a><a href="#" target="_blank" className="gdlr-core-social-network-icon" title="linkedin" style={{fontSize: 17, color: '#17449E'}}><i className="fa fa-linkedin" ></i></a><a href="#" target="_blank" className="gdlr-core-social-network-icon" title="skype" style={{fontSize: 17, color: '#17449E'}}><i className="fa fa-skype" ></i></a><a href="#url" target="_blank" className="gdlr-core-social-network-icon" title="twitter" style={{fontSize: 17, color: '#17449E'}}><i className="fa fa-twitter" ></i></a></div>
                        </div>
                        <div className="mediz-copyright-right mediz-item-pdlr">Copyright 2019 Mediz, All Right Reserved</div>
                    </div>
                </div>
            </footer>
    )
}

export default FooterSection
