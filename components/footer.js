import React from 'react';
import Script from 'next/script';
import parse from 'html-react-parser';
import CtaFooterBanner from './CtaFooterBanner';
import FooterSection from './FooterSection';

const Footer = () => {

    return ( <>
        <CtaFooterBanner/>
        <FooterSection/>
        <Script type='text/javascript' src='js/jquery/jquery-migrate.min.js'></Script>
        <Script type='text/javascript' src='plugins/revslider/public/assets/js/revolution.tools.min.js'></Script>
        <Script type='text/javascript' src='plugins/revslider/public/assets/js/rs6.min.js'></Script>
        <Script type='text/javascript' src='plugins/zeno-font-resizer/js/js.cookie.js'></Script>
        <Script type='text/javascript' src='plugins/zeno-font-resizer/js/jquery.fontsize.js'></Script>
        <Script type='text/javascript' src='plugins/google-map-plugin/assets/js/maps.js'></Script>
        <Script type='text/javascript' src='js/jquery/ui/effect.min.js'></Script>
        <Script type='text/javascript' src='js/jquery.mmenu.js'></Script>
        <Script type='text/javascript' src='js/jquery.superfish.js'></Script>
        <Script type='text/javascript' src='js/plugins.min.js'></Script>
        <Script type='text/javascript' src='plugins/setREVStartSize.js'></Script>

    </> );
}
 
export default Footer;