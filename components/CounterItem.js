import React from 'react';
const CounterItem = (props) => {
    return ( <>
        <div className="gdlr-core-pbf-column-content-margin gdlr-core-js ">
            <div className="gdlr-core-pbf-background-wrap"></div>
            <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                <div className="gdlr-core-pbf-element">
                    <div className="gdlr-core-counter-item gdlr-core-item-pdlr gdlr-core-item-pdb  gdlr-core-center-align" style={{padding : 0}}>
                        <div className="gdlr-core-counter-item-number gdlr-core-skin-title gdlr-core-title-font"  style={{fontSize: 39 ,fontWeight: 700 }}><span className="gdlr-core-counter-item-count gdlr-core-js" data-duration="" data-counter-start="0" data-counter-end="200">{props.count}</span></div>
                        <div className="gdlr-core-counter-item-bottom-text gdlr-core-skin-content" style={{fontSize: 20, fontWeight: 500 , textTransform: 'none' }}>{props.title}</div>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
 
export default CounterItem;