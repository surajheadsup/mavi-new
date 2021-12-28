import React from 'react'

function FooterSection() {
    return (
        <footer>
                <div class="mediz-footer-wrapper ">
                    <div class="mediz-footer-container mediz-container clearfix">
                        <div class="mediz-footer-column mediz-item-pdlr mediz-column-20">
                            <div id="text-1" class="widget widget_text mediz-widget">
                                <div class="textwidget">
                                    <p><img class="alignnone size-full wp-image-6129" src="upload/logo.png" alt="" style={{width : 80}} />
                                        <br />
                                        <span class="gdlr-core-space-shortcode" style={{marginTop : -27}}></span>
                                        <br /> Box 3233
                                        <br /> 1810 Kings Way
                                        <br /> King Street, 5th Avenue, New York
                                        <br />
                                        <span class="gdlr-core-space-shortcode" style={{marginTop : 0}}></span>
                                        <br />
                                        <i class="icon-phone" style={{fontSize: 19,color: '#17449E', marginRight: 10 }}></i><span style={{color: '#17449e'}}>+1-2345-3455-33</span>
                                        <br />
                                        <span class="gdlr-core-space-shortcode" style={{marginTop : -15}}></span>
                                        <br />
                                        <i class="icon-envelope" style={{fontSize: 19,color: '#17449E', marginRight: 10 }}></i><a href="#" style={{color: '#17449e'}}><span class="__cf_email__">test@gmail.com</span></a></p>
                                </div>
                            </div>
                        </div>
                        <div class="mediz-footer-column mediz-item-pdlr mediz-column-20">
                            <div id="nav_menu-3" class="widget widget_nav_menu mediz-widget">
                                <h3 class="mediz-widget-title">Quick Links</h3><span class="clear"></span>
                                <div class="menu-about-us-container">
                                    <ul id="menu-about-us" class="menu">
                                        <li class="menu-item"><a href="/about">About us</a></li>
                                        <li class="menu-item"><a href="/servies">Our Services</a></li>
                                        <li class="menu-item"><a href="/about">Our Mission &#038; Values</a></li>
                                        <li class="menu-item"><a href="/contact">Contact</a></li>
                                        {/* <li class="menu-item"><a href="#">Career</a></li> */}
                                        {/* <li class="menu-item"><a href="#">Blog</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div class="mediz-footer-column mediz-item-pdlr mediz-column-15">
                            <div id="nav_menu-2" class="widget widget_nav_menu mediz-widget">
                                <h3 class="mediz-widget-title">Our Services</h3><span class="clear"></span>
                                <div class="menu-our-services-container">
                                    <ul id="menu-our-services" class="menu">
                                        <li class="menu-item"><a href="#">Lung Diseases</a></li>
                                        <li class="menu-item"><a href="#">Orthopaedic</a></li>
                                        <li class="menu-item"><a href="#">Pharmacy</a></li>
                                        <li class="menu-item"><a href="#">Sport Injury</a></li>
                                        <li class="menu-item"><a href="#">Heart</a></li>
                                        <li class="menu-item"><a href="#">Dental Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <div class="mediz-footer-column mediz-item-pdlr mediz-column-15">
                            <div id="gdlr-core-opening-hour-widget-3" class="widget widget_gdlr-core-opening-hour-widget mediz-widget">
                                <h3 class="mediz-widget-title">Hospital Hours</h3><span class="clear"></span>
                                <div class="gdlr-core-opening-hour-widget" style={{color: '#17449e'}}>
                                    <div class="gdlr-core-opening-hour-widget-list clearfix"><span class="gdlr-core-head"><i class="icon-clock" ></i>Monday - Friday</span><span class="gdlr-core-tail">08:00 - 20:00</span></div>
                                    <div class="gdlr-core-opening-hour-widget-list clearfix"><span class="gdlr-core-head"><i class="icon-clock" ></i>Saturday</span><span class="gdlr-core-tail">09:00 - 18:00</span></div>
                                    <div class="gdlr-core-opening-hour-widget-list clearfix"><span class="gdlr-core-head"><i class="icon-clock" ></i>Sunday</span><span class="gdlr-core-tail">09:00 - 18:00</span></div>
                                </div>
                            </div>
                            <div id="text-9" class="widget widget_text mediz-widget">
                                <div class="textwidget">
                                    <p><span class="gdlr-core-space-shortcode" style={{marginTop : -23}}></span><a class="gdlr-core-button gdlr-core-button-shortcode  gdlr-core-button-solid gdlr-core-button-no-border emergency-24-hours-btn" href="/contact" target="_blank" rel="noopener noreferrer"><span class="gdlr-core-content" >Emergency : 24 hours</span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mediz-copyright-wrapper">
                    <div class="mediz-copyright-container mediz-container clearfix">
                        <div class="mediz-copyright-left mediz-item-pdlr">
                            <div class="gdlr-core-social-network-item gdlr-core-item-pdb  gdlr-core-none-align" style={{paddingBottom:0}}><a href="#url" target="_blank" class="gdlr-core-social-network-icon" title="facebook" style={{fontSize: 17, color: '#17449E'}}><i class="fa fa-facebook" ></i></a><a href="#" target="_blank" class="gdlr-core-social-network-icon" title="linkedin" style={{fontSize: 17, color: '#17449E'}}><i class="fa fa-linkedin" ></i></a><a href="#" target="_blank" class="gdlr-core-social-network-icon" title="skype" style={{fontSize: 17, color: '#17449E'}}><i class="fa fa-skype" ></i></a><a href="#url" target="_blank" class="gdlr-core-social-network-icon" title="twitter" style={{fontSize: 17, color: '#17449E'}}><i class="fa fa-twitter" ></i></a></div>
                        </div>
                        <div class="mediz-copyright-right mediz-item-pdlr">Copyright 2019 Mediz, All Right Reserved</div>
                    </div>
                </div>
            </footer>
    )
}

export default FooterSection
