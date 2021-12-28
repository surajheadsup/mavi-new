import Image from 'next/image';
import React from 'react';
const SingleService = (props) => {
    return ( <>
        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " style={{margin: '0px 0px 0px 0px', padding: '0px 20px 20px 0px'}}>
            <div className="gdlr-core-pbf-background-wrap"></div>
            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                <div className="gdlr-core-pbf-element">
                    <div className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-top gdlr-core-no-caption gdlr-core-item-pdlr" style={{paddingBottom: 30, margin: '0px 0px 0px 0px'}}>
                        <div className="gdlr-core-column-service-media gdlr-core-media-image" style={{marginTop:0, textAlign: 'center'}}><Image src={props.src} layout={'fixed'} alt="" width={50} height={50} title="Column-icon6" /></div>
                        <div className="gdlr-core-column-service-content-wrapper">
                            <div className="gdlr-core-column-service-title-wrap" style={{marginBottom:20}}>
                                <h3 className="gdlr-core-column-service-title gdlr-core-skin-title" style={{fontSize: 16, fontWeight: 600, letterSpacing: 0, textTransform: 'none', textAlign : 'center'}}>{props.title}</h3></div>
                            <div className="gdlr-core-column-service-content" style={{fontWeight : 400, textTransform : 'none'}}>
                                <p>{props.shortDescription}</p>
                                {/* <a className="gdlr-core-column-service-read-more gdlr-core-info-font" href="#" target="_self" style={{fontSize: 16, fontWeight: 500 , fontStyle: 'normal' }}>Learn More<i className="arrow_right" style={{fontSize: 23}}  ></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
 
export default SingleService;