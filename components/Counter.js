import React from 'react';
import CounterItem from './CounterItem';
const Counter = () => {
    return ( <>
        <div className="gdlr-core-pbf-wrapper counter"  data-skin="Mediz A2 Counter">
            <div className="gdlr-core-pbf-background-wrap">
                <div className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" data-parallax-speed="0"></div>
            </div>
            <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                    <div className="gdlr-core-pbf-column gdlr-core-column-15 gdlr-core-column-first" id="gdlr-core-column-38136">
                        <CounterItem title={'Doctors'} count={800}/>
                    </div>
                    <div className="gdlr-core-pbf-column gdlr-core-column-15" id="gdlr-core-column-86500">
                        <CounterItem title={'Happy Patients'} count={1200}/>
                    </div>
                    <div className="gdlr-core-pbf-column gdlr-core-column-15" id="gdlr-core-column-93525">
                        <CounterItem title={'Medical Beds'} count={1800}/>
                    </div>
                    <div className="gdlr-core-pbf-column gdlr-core-column-15">
                        <CounterItem title={'Winning Awards'} count={150}/>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
 
export default Counter;