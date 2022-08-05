document.addEventListener("DOMContentLoaded", function() {
    var script = document.getElementById('be7ccb04abb22b2d16fc36cbaeefaab139c5a92c');

    var par = script.parentNode;
    script.parentNode.style.overflow = 'hidden';

    var iframe = document.createElement('iframe');
    iframe.src = 'https://learn-cryptonclub.ru/pl/lite/widget/widget'
        + "?" + window.location.search.substring(1)
        + "&id=714520"
        + "&ref=" + encodeURIComponent(document.referrer)
        + "&loc=" + encodeURIComponent(document.location.href);
    iframe.style.width = '100%';
    iframe.style.height = '0px';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.setAttribute('allowfullscreen', 'allowfullscreen');
    iframe.className = '176';
    iframe.id = '71bd5a622872f63cac12429d6acdf6679fe7997e' + '_' + iframe.className;
    // name можно получить изнутри iframe
    iframe.name = iframe.className;

    var iframeId = iframe.id;

    var gcEmbedOnMessage = function(e) {
        var insertedIframe = document.getElementById(iframeId);
        if (!insertedIframe) {
            return;
        }

        if (e.data.uniqName == 'be7ccb04abb22b2d16fc36cbaeefaab139c5a92c') {
            if (e.data.height) {
                if (e.data.iframeName) {
                    if (e.data.iframeName == iframe.name) {
                        par.style.height = ( e.data.height ) + "px";
                        insertedIframe.style.height = (e.data.height) + "px";
                    }
                } else {
                    par.style.height = ( e.data.height ) + "px";
                    insertedIframe.style.height = (e.data.height) + "px";
                }
            }
        }
    };

    if (window.addEventListener) {
        window.addEventListener("message", gcEmbedOnMessage, false);
    }  else if (window.attachEvent) {
        window.attachEvent('onmessage', gcEmbedOnMessage)
    } else {
        window['onmessage'] = gcEmbedOnMessage
    }

    script.parentNode.insertBefore(iframe, script);
    par.removeChild( script )
});

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

var currentScript = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
})();

var domain = ( (getLocation( currentScript.src )).hostname );
