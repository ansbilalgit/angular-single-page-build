(function () {

    var rootPath = 'http://192.168.1.158:30/'

    function loadData() {
        // if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.12.4') {
        var link = document.createElement('style');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', rootPath + 'styles.css');
        document.getElementsByTagName('head')[0].appendChild(link);

        document.getElementById('myDiv').innerHTML = '<app-root></app-root>';
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", rootPath + "es2015-polyfills.js");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);

        script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", rootPath + "main.js");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);


        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    scriptLoadHandler();
                }
            };
        } else {
            script_tag.onload = scriptLoadHandler;
        }

        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    }

    loadData();
    function scriptLoadHandler() {
        // jQuery = window.jQuery.noConflict(true);

        main();
    }

    function main() {
    }
})();