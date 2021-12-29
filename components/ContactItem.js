import React from 'react'

function ContactItem() {
    return (
        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " style={{padding: '50px 20px 0px 20px'}}>
            <div className="gdlr-core-pbf-background-wrap"></div>
            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js " data-gdlr-animation="fadeInUp" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8">
                <div className="gdlr-core-pbf-element">
                    <div className="gdlr-core-icon-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"><i className=" gdlr-core-icon-item-icon fa fa-phone" style={{color: '#ffffff' , fontSize: 40, minWidth: 40, minHeight: 40}}></i></div>
                </div>
                <div className="gdlr-core-pbf-element">
                    <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom : 25}}>
                        <div className="gdlr-core-title-item-title-wrap ">
                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title " style={{fontSize: 26, letterSpacing: 0, textTransform: 'none'}}>Phone<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                    </div>
                </div>
                <div className="gdlr-core-pbf-element">
                    <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" style={{paddingBottom : 0}}>
                        <div className="gdlr-core-text-box-item-content" style={{fontSize : 16}}>
                            <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
                        </div>
                    </div>
                </div>
                <div className="gdlr-core-pbf-element">
                    <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                        <div className="gdlr-core-text-box-item-content"  style={{fontSize : 16, textTransform : 'none'}}>
                            <p><a href="#">+1-2345-2345</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactItem
