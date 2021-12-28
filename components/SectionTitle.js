import React from 'react';
const SectionTitle = (props) => {
    return ( 
        <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first" id="gdlr-core-column-92705">
            <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " style={{paddingRight: 0, paddingBottom: 55, paddingLeft: 0}}>
                <div className="gdlr-core-pbf-background-wrap"></div>
                <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                    <div className="gdlr-core-pbf-element">
                        <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style={{paddingBottom :0}}>
                            <div className="gdlr-core-title-item-title-wrap ">
                                <h3 className="gdlr-core-title-item-title gdlr-core-skin-title " style={{fontSize: 36, fontWeight: 700 , textTransform: 'none', color: '#1c4ca5'}}>{props.title}
                                <span className="gdlr-core-title-item-title-side-border gdlr-core-style-lower gdlr-core-style-lower-custom ${props.clasName}" ></span><span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SectionTitle;