import React from 'react'

function Expertise(props) {
    return (
        <div className="gdlr-core-pbf-element">
            <div className="gdlr-core-column-service-item gdlr-core-item-pdb  gdlr-core-left-align gdlr-core-column-service-icon-left gdlr-core-no-caption gdlr-core-item-pdlr" style={{paddingBottom : 0, marginBottom : 40}}>
                <div className="gdlr-core-column-service-media gdlr-core-media-image"><img src="upload/mediz-icon1.png" alt="" width="96" height="97" title="mediz-icon1" /></div>
                <div className="gdlr-core-column-service-content-wrapper">
                    <div className="gdlr-core-column-service-title-wrap" style={{marginBottom : 7}}>
                        <h3 className="gdlr-core-column-service-title gdlr-core-skin-title" style={{fontSize: 19,fontWeight: 600 ,letterSpacing: 0, textTransform: 'none' }}>Immune system</h3></div>
                    <div className="gdlr-core-column-service-content" style={{fontSize: 16, fontWeight: 400 , textTransform: 'none'}}>
                        <p className="p1">Drug discovery and drug development are complex and expensive endeavors undertaken</p>
                        <a className="gdlr-core-column-service-read-more gdlr-core-info-font" href="#" target="_self" style={{fontSize: 16, fontWeight: 500 ,fontStyle: 'normal'}}>Learn More<i className="arrow_right" style={{fontSize: 24}}  ></i></a></div>
                </div>
            </div>
        </div>
    )
}

export default Expertise
