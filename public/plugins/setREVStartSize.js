function setREVStartSize(t) {
    try {
        var h, e = document.getElementById(t.c).parentNode.offsetWidth;
        if (e = 0 === e || isNaN(e) ? window.innerWidth : e, t.tabw = void 0 === t.tabw ? 0 : parseInt(t.tabw), t.thumbw = void 0 === t.thumbw ? 0 : parseInt(t.thumbw), t.tabh = void 0 === t.tabh ? 0 : parseInt(t.tabh), t.thumbh = void 0 === t.thumbh ? 0 : parseInt(t.thumbh), t.tabhide = void 0 === t.tabhide ? 0 : parseInt(t.tabhide), t.thumbhide = void 0 === t.thumbhide ? 0 : parseInt(t.thumbhide), t.mh = void 0 === t.mh || "" == t.mh || "auto" === t.mh ? 0 : parseInt(t.mh, 0), "fullscreen" === t.layout || "fullscreen" === t.l) h = Math.max(t.mh, window.innerHeight);
        else {
            for (var i in t.gw = Array.isArray(t.gw) ? t.gw : [t.gw], t.rl) void 0 !== t.gw[i] && 0 !== t.gw[i] || (t.gw[i] = t.gw[i - 1]);
            for (var i in t.gh = void 0 === t.el || "" === t.el || Array.isArray(t.el) && 0 == t.el.length ? t.gh : t.el, t.gh = Array.isArray(t.gh) ? t.gh : [t.gh], t.rl) void 0 !== t.gh[i] && 0 !== t.gh[i] || (t.gh[i] = t.gh[i - 1]);
            var r, a = new Array(t.rl.length),
                n = 0;
            for (var i in t.tabw = t.tabhide >= e ? 0 : t.tabw, t.thumbw = t.thumbhide >= e ? 0 : t.thumbw, t.tabh = t.tabhide >= e ? 0 : t.tabh, t.thumbh = t.thumbhide >= e ? 0 : t.thumbh, t.rl) a[i] = t.rl[i] < window.innerWidth ? 0 : t.rl[i];
            for (var i in r = a[0], a) r > a[i] && 0 < a[i] && (r = a[i], n = i);
            var d = e > t.gw[n] + t.tabw + t.thumbw ? 1 : (e - (t.tabw + t.thumbw)) / t.gw[n];
            h = t.gh[n] * d + (t.tabh + t.thumbh)
        }
        void 0 === window.rs_init_css && (window.rs_init_css = document.head.appendChild(document.createElement("style"))), document.getElementById(t.c).height = h, window.rs_init_css.innerHTML += "#" + t.c + "_wrapper { height: " + h + "px }"
    } catch (t) {
        console.log("Failure at Presize of Slider:" + t)
    }
};


if (typeof revslider_showDoubleJqueryError === "undefined") {
    function revslider_showDoubleJqueryError(sliderID) {
        var err = "<div class='rs_error_message_box'>";
        err += "<div class='rs_error_message_oops'>Oops...</div>";
        err += "<div class='rs_error_message_content'>";
        err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
        err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
        err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
        err += "</div>";
        err += "</div>";
        jQuery(sliderID).show().html(err);
    }
}


var gdlr_core_pbf = {
    "admin": "",
    "video": {
        "width": "640",
        "height": "360"
    },
    "ajax_url": "#"
};


setREVStartSize({
    c: 'rev_slider_2_1',
    rl: [1240, 1240, 1240, 480],
    el: [700, 700, 700, 500],
    gw: [1280, 1280, 1280, 480],
    gh: [700, 700, 700, 500],
    layout: 'fullwidth',
    mh: "0"
});
var revapi2,
    tpj;
jQuery(function() {
    tpj = jQuery;
    if (tpj("#rev_slider_2_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_2_1");
    } else {
        revapi2 = tpj("#rev_slider_2_1").show().revolution({
            jsFileLocation: "plugins/revslider/public/assets/js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1240,1240,480",
            gridwidth: "1280,1280,1280,480",
            gridheight: "700,700,700,500",
            minHeight: "",
            editorheight: "700,768,960,500",
            responsiveLevels: "1240,1240,1240,480",
            disableProgressBar: "on",
            navigation: {
                onHoverStop: false,
                touch: {
                    touchenabled: true
                },
                arrows: {
                    enable: true,
                    style: "uranus",
                    hide_onmobile: true,
                    hide_under: "415px",
                    hide_onleave: true,
                    left: {
                        h_offset: 30
                    },
                    right: {
                        h_offset: 30
                    }
                },
                bullets: {
                    enable: true,
                    tmp: "<span class=\"tp-bullet-inner\"></span>",
                    style: "uranus",
                    hide_over: "416px",
                    v_offset: 37,
                    space: 6
                }
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }

});


var htmlDivCss = unescape("%40media%20only%20screen%20and%20%28max-width%3A%20767px%29%7B%0Ars-sbg%20%7B%0A%20%20%20%20opacity%3A%200.4%20%21important%3B%0A%09filter%3A%20alpha%28opacity%3D40%29%20%21important%3B%0A%7D%0A%7D");
        var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
        if (htmlDiv) {
            htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        } else {
            var htmlDiv = document.createElement('div');
            htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
            document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
        }



        var htmlDivCss = unescape("%23rev_slider_2_1_wrapper%20.uranus.tparrows%20%7B%0A%20%20width%3A50px%3B%0A%20%20height%3A50px%3B%0A%20%20background%3Argba%28255%2C255%2C255%2C0%29%3B%0A%20%7D%0A%20%23rev_slider_2_1_wrapper%20.uranus.tparrows%3Abefore%20%7B%0A%20width%3A50px%3B%0A%20height%3A50px%3B%0A%20line-height%3A50px%3B%0A%20font-size%3A40px%3B%0A%20transition%3Aall%200.3s%3B%0A-webkit-transition%3Aall%200.3s%3B%0A%20%7D%0A%20%0A%20%20%23rev_slider_2_1_wrapper%20.uranus.tparrows%3Ahover%3Abefore%20%7B%0A%20%20%20%20opacity%3A0.75%3B%0A%20%20%7D%0A%23rev_slider_2_1_wrapper%20.uranus%20.tp-bullet%7B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20box-shadow%3A%200%200%200%202px%20rgba%28255%2C255%2C255%2C0%29%3B%0A%20%20-webkit-transition%3A%20box-shadow%200.3s%20ease%3B%0A%20%20transition%3A%20box-shadow%200.3s%20ease%3B%0A%20%20background%3Atransparent%3B%0A%20%20width%3A15px%3B%0A%20%20height%3A15px%3B%0A%7D%0A%23rev_slider_2_1_wrapper%20.uranus%20.tp-bullet.selected%2C%0A%23rev_slider_2_1_wrapper%20.uranus%20.tp-bullet%3Ahover%20%7B%0A%20%20box-shadow%3A%200%200%200%202px%20rgba%28255%2C255%2C255%2C1%29%3B%0A%20%20border%3Anone%3B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20background%3Atransparent%3B%0A%7D%0A%0A%23rev_slider_2_1_wrapper%20.uranus%20.tp-bullet-inner%20%7B%0A%20%20-webkit-transition%3A%20background-color%200.3s%20ease%2C%20-webkit-transform%200.3s%20ease%3B%0A%20%20transition%3A%20background-color%200.3s%20ease%2C%20transform%200.3s%20ease%3B%0A%20%20top%3A%200%3B%0A%20%20left%3A%200%3B%0A%20%20width%3A%20100%25%3B%0A%20%20height%3A%20100%25%3B%0A%20%20outline%3A%20none%3B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20background-color%3A%20rgba%28255%2C255%2C255%2C0%29%3B%0A%20%20background-color%3A%20rgba%28255%2C255%2C255%2C0.3%29%3B%0A%20%20text-indent%3A%20-999em%3B%0A%20%20cursor%3A%20pointer%3B%0A%20%20position%3A%20absolute%3B%0A%7D%0A%0A%23rev_slider_2_1_wrapper%20.uranus%20.tp-bullet.selected%20.tp-bullet-inner%2C%0A%23rev_slider_2_1_wrapper%20.uranus%20.tp-bullet%3Ahover%20.tp-bullet-inner%7B%0A%20transform%3A%20scale%280.4%29%3B%0A%20-webkit-transform%3A%20scale%280.4%29%3B%0A%20background-color%3Argba%28255%2C255%2C255%2C1%29%3B%0A%7D%0A");
        var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
        if (htmlDiv) {
            htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        } else {
            var htmlDiv = document.createElement('div');
            htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
            document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
        }

        var htmlDivCss = unescape("%0A%0A%0A%0A");
        var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
        if (htmlDiv) {
            htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        } else {
            var htmlDiv = document.createElement('div');
            htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
            document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
        }