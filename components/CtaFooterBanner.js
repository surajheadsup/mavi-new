import React from 'react'
import CtaFooterBannerItem from './CtaFooterBannerItem'

function CtaFooterBanner() {
    return (
        <div class="gdlr-core-pbf-wrapper" style={{padding : 0}} data-skin="Mediz A1 Column SVC">
            <div class="gdlr-core-pbf-background-wrap"></div>
            <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space">
                    <CtaFooterBannerItem title={'Get directions'} sub_title={'Find us on map'} className={'footer-cta-bg-1'} icon={'upload/icon-1-1.png'}/>
                    <CtaFooterBannerItem title={'Contact & Appointment'} sub_title={'Send us an email'}  className={'footer-cta-bg-2'} icon={'upload/icon2.png'}/>
                    <CtaFooterBannerItem title={'Emergency Service'} sub_title={'Call : +1-2345-3455-33'}  className={'footer-cta-bg-3'} icon={'upload/icon3.png'}/>
                </div>
            </div>
        </div>
    )
}

export default CtaFooterBanner
