import React from 'react'
import ContactItem from '../components/ContactItem'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import PageHeader from '../components/PageHeader'

function contact() {
    return (
        <>
            <Navbar/>
                <PageHeader title={`Contact us`} className={`about-header-bg`}/>
                <div className="mediz-page-wrapper" id="mediz-page-wrapper">
                <div className="gdlr-core-pbf-wrapper " style={{padding: '90px 0px 20px 0px'}}>
                        <div className="gdlr-core-pbf-background-wrap" style={{backgroundColor: '#f3f3f3'}}></div>
                        <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                            <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first" data-skin="White Input" id="gdlr-core-column-34122">
                                    <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                        <div className="gdlr-core-pbf-background-wrap"></div>
                                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js " style={{maxWidth:760}}>
                                            <div className="gdlr-core-pbf-element">
                                                <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style={{paddingBottom : 60}}>
                                                    <div className="gdlr-core-title-item-title-wrap ">
                                                        <h3 className="gdlr-core-title-item-title gdlr-core-skin-title " style={{fontSize: 39,letterSpacing: 0,textTransform: 'none'}}>Leave us your info <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3>
                                                    </div>
                                                    <span className="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize:19, fontStyle : 'normal'}}>and we will get back to you.</span></div>
                                            </div>
                                            <div className="gdlr-core-pbf-element">
                                                <div className="gdlr-core-contact-form-7-item gdlr-core-item-pdlr gdlr-core-item-pdb ">
                                                    <div role="form" className="wpcf7" id="wpcf7-f1979-p1964-o1" lang="en-US" dir="ltr">
                                                        <div className="screen-reader-response"></div>
                                                            <form className="quform" action="#" method="post" encType="multipart/form-data">

                                                                <div className="quform-elements">
                                                                    <div className="quform-element">
                                                                        
                                                                            <br/>
                                                                            <span className="wpcf7-form-control-wrap your-name">
                                                                                <input id="name" type="text" name="name" size="40" className="input1" aria-required="true" aria-invalid="false" placeholder="Name*"/>
                                                                            </span> 
                                                                        
                                                                    </div>
                                                                    <div className="quform-element">
                                                                        
                                                                            <br/>
                                                                            <span className="wpcf7-form-control-wrap your-email">
                                                                                <input id="email" type="text" name="email" size="40" className="input1" aria-required="true" aria-invalid="false" placeholder="Email*"/>
                                                                            </span> 
                                                                        
                                                                    </div>
                                                                    <div className="quform-element">
                                                                        
                                                                            <br/>
                                                                            <span className="wpcf7-form-control-wrap your-message">
                                                                                <textarea  id="message" name="message" cols="40" rows="10" className="input1" aria-invalid="false" placeholder="Message*"></textarea>
                                                                            </span>
                                                                        
                                                                    </div>
                                                                    
                                                                    <div className="quform-submit">
                                                                        <div className="quform-submit-inner">
                                                                            <button type="submit" className="submit-button"><span>Send</span></button>
                                                                        </div>
                                                                        <div className="quform-loading-wrap"><span className="quform-loading"></span></div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            <Footer/>
        </>
    )
}

export default contact
