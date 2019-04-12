/**
 * Site-wide Google Tag Manager JS
 */
var googletag;
googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

(function() {
  var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
  var useSSL = 'https:' === document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') +
    '//www.googletagservices.com/tag/js/gpt.js';
  var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();

/**
 * Ad slot definitions.
 */
googletag.cmd.push(function() {
    googletag.defineSlot('344101295/SI/www.silive.com/news/index.ssf', [728, 90], 'gpt-leaderboard-ad').addService(googletag.pubads());
    googletag.defineSlot('344101295/SI/www.silive.com/news/index.ssf', [300, 250], 'gpt-ad-landing-mpu-1').addService(googletag.pubads());
  googletag.pubads().enableSingleRequest();
    googletag.enableServices();
});

// Lotame Audience Tag 
function attachLotameScript() {// eslint-disable-line no-unused-vars
var lotame = document.createElement('script');
lotame.async = true;
lotame.src = '//ad.crwdcntrl.net/5/c=931/pe=y/var=ccauds';

    googletag.cmd.push(function() {
        var dartCC, lpid, ltpid, cci, audience, ccauds;
        if (typeof(ccauds) != 'undefined' && ccauds.Profile) {
            dartCC = [];
            lpid = (typeof(ccauds.Profile.pid) != 'undefined') ? ccauds.Profile.pid : "";
            ltpid = (typeof(ccauds.Profile.tpid) != 'undefined') ? ccauds.Profile.tpid : "";
            audience = ((ccauds.Profile.Audiences || {}).Audience) || [];
            for (cci = 0; cci < audience.length; cci++) {
                dartCC.push(audience[cci].abbr);
            }
            console.log(ccauds.Profile.pid)
            googletag.pubads().setTargeting("lpid", lpid).setTargeting("ltpid", ltpid).setTargeting("lseg", dartCC);
        }
    });
};