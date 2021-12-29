import React from 'react';
import Script from 'next/script'
import Head from 'next/head';


const Header = () => {
    return (<>
        <Script src="plugins/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossOrigin="anonymous"></Script>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Mavie</title>
            <link rel='stylesheet' href='plugins/goodlayers-core/plugins/fontawesome/font-awesome.css' type='text/css' media='all' />
            <link rel='stylesheet' href='plugins/goodlayers-core/plugins/fa5/fa5.css' type='text/css' media='all' />
            <link rel='stylesheet' href='plugins/goodlayers-core/plugins/elegant/elegant-font.css' type='text/css' media='all' />
            <link rel='stylesheet' href='plugins/goodlayers-core/plugins/ionicons/ionicons.css' type='text/css' media='all' />
            <link rel='stylesheet' href='plugins/goodlayers-core/plugins/simpleline/simpleline.css' type='text/css' media='all' />
            <link rel='stylesheet' href='plugins/goodlayers-core/plugins/style.css' type='text/css' media='all' />
            <link rel='stylesheet' href='plugins/goodlayers-core/include/css/page-builder.css' type='text/css' media='all' />
            <link rel='stylesheet' href='plugins/revslider/public/assets/css/rs6.css' type='text/css' media='all' />
            <link rel='stylesheet' href='plugins/google-map-plugin/assets/css/frontend.css' type='text/css' media='all' />
            <link rel='stylesheet' href='css/style-core.css' type='text/css' media='all' />
            <link rel='stylesheet' href='css/mediz-style-custom.css' type='text/css' media='all' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Poppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMontserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMerriweather%3A300%2C300italic%2Cregular%2Citalic%2C700%2C700italic%2C900%2C900italic&amp;subset=latin-ext%2Cdevanagari%2Clatin%2Cvietnamese%2Ccyrillic%2Ccyrillic-ext&amp;display=optional&amp;ver=5.3.2' type='text/css' media='all' />
            <link href="https://fonts.googleapis.com/css?family=Roboto:400" rel="stylesheet" property="stylesheet" media="all" type="text/css"></link>
        </Head>
        
    </>
    );
}
 
export default Header;