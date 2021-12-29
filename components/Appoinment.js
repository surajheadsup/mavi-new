const Appoinment = () => {
    return ( 
        <div className="gdlr-core-pbf-column gdlr-core-column-30" id="gdlr-core-column-25407">
            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js  gdlr-core-column-extend-right" style={{padding: '175px 0px 55px 60px'}}>
                <div className="gdlr-core-pbf-background-wrap">
                    <div className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js appoinment-form"  data-parallax-speed="0"></div>
                </div>
                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                    <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style={{paddingBottom:20}}>
                            <div className="gdlr-core-title-item-title-wrap ">
                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title appointment-form-title" >Make an appointment<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align gdlr-core-no-p-space" style={{paddingBottom : 40}}>
                            <div className="gdlr-core-text-box-item-content" style={{fontSize: 17, fontWeight: 400 ,letterSpacing: 0, textTransform: 'none',color: '#9ebeff' }}>
                                <p>We will send you a confirmation within 24 hours.
                                    <br /><strong><span style={{color : '#fff'}}>Emergency?</span></strong> Call 1-2554-2356-33</p>
                            </div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-contact-form-7-item gdlr-core-item-pdlr gdlr-core-item-pdb " style={{paddingBottom : 0}} >
                            <div role="form" className="wpcf7" id="wpcf7-f5826-p7684-o1" lang="en-US" dir="ltr">
                                <div className="screen-reader-response"></div>
                                <form action="#" method="post" className="wpcf7-form" noValidate="novalidate">
                                    <div style={{display: 'none'}}>
                                        <input type="hidden" name="_wpcf7" value="5826" />
                                        <input type="hidden" name="_wpcf7_version" value="5.1.6" />
                                        <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f5826-p7684-o1" />
                                        <input type="hidden" name="_wpcf7_container_post" value="7684" />
                                    </div>
                                    <div className="gdlr-core-input-wrap gdlr-core-large gdlr-core-full-width gdlr-core-with-column gdlr-core-no-border">
                                        <div className="gdlr-core-column-30"><span className="wpcf7-form-control-wrap your-name"><input type="email" name="your-name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Name*" /></span></div>
                                        <div className="gdlr-core-column-30"><span className="wpcf7-form-control-wrap your-phone"><input type="text" name="your-phone" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Phone*" /></span></div>
                                        <div className="clear"></div>
                                        <div className="gdlr-core-column-60"><span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email*" /></span></div>
                                        {/* <div className="gdlr-core-column-30"><span className="wpcf7-form-control-wrap your-department"><select name="your-department" className="wpcf7-form-control wpcf7-select" aria-invalid="false"><option value="Lung Diseases">Lung Diseases</option><option value="Heart Diseases">Heart Diseases</option><option value="Orthopaedic">Orthopaedic</option><option value="General Surgery">General Surgery</option><option value="Pharmacy">Pharmacy</option><option value="Sports Injury">Sports Injury</option><option value="Fever &amp; Flu">Fever &amp; Flu</option><option value="Dental Service">Dental Service</option><option value="Eye Care">Eye Care</option></select></span></div> */}
                                        <div className="clear"></div>
                                        {/* <div className="gdlr-core-column-30"><span className="wpcf7-form-control-wrap your-date"><input type="text" name="your-date" value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Date" /></span></div>
                                        <div className="gdlr-core-column-30"><span className="wpcf7-form-control-wrap your-time"><input type="text" name="your-time" value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Time" /></span></div>
                                        <div className="clear"></div> */}
                                        <div className="gdlr-core-column-60"><span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Message*"></textarea></span></div>
                                        <div className="clear"></div>
                                        <div className="gdlr-core-column-60 gdlr-core-left-align">
                                            <input type="submit" value="Submit Now" className="wpcf7-form-control wpcf7-submit gdlr-core-full" />
                                        </div>
                                    </div>
                                    <div className="wpcf7-response-output wpcf7-display-none"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Appoinment;