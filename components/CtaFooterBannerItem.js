import React from 'react'

function CtaFooterBannerItem(props) {
    return (
        <div className="gdlr-core-pbf-column gdlr-core-column-20" id="gdlr-core-column-18977">
            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " style={{padding: '50px 0px 60px 60px'}} data-sync-height="col-features-hp-2" data-sync-height-center>
                <div className="gdlr-core-pbf-background-wrap">
                    <div className={`gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js ${props.className}`}  data-parallax-speed="0"></div>
                </div>
                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                    <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-with-caption gdlr-core-item-pdlr" style={{paddingBottom: 0 , paddingLeft: 0}}>
                            <div className="gdlr-core-column-service-media gdlr-core-media-image" style={{marginTop : 10}}><img src={props.icon} alt="" width="39" height="30" title="icon3" /></div>
                            <div className="gdlr-core-column-service-content-wrapper">
                                <div className="gdlr-core-column-service-title-wrap" style={{marginBottom : 0}}>
                                    <h3 className="gdlr-core-column-service-title gdlr-core-skin-title" style={{fontSize: 21, fontWeight: 500, letterSpacing: 0,textTransform: 'none', color : '#a6c4ff'}}>{props.title}</h3>
                                    <div className="gdlr-core-column-service-caption gdlr-core-info-font gdlr-core-skin-caption" style={{fontSize: 19, fontWeight: 600 ,fontStyle: 'italic', color : 'white'}}>{props.sub_title}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaFooterBannerItem
