// When the DOM is ready,
$(function() {

    /**
     * Google Analytics event click tracking
     */

    $("#header-download").on("click", function() {
        ga("send", "event", "Header actions", "click", "Download");
    });

    $("#header-view").on("click", function() {
        ga("send", "event", "Header actions", "click", "GitHub Repo");
    });

    $("#header-changelog").on("click", function() {
        ga("send", "event", "Header actions", "click", "Changelog");
    });

    $("#header-readme").on("click", function() {
        ga("send", "event", "Header actions", "click", "Readme");
    });

    $("#footer-cbracco").on("click", function() {
        ga("send", "event", "Footer actions", "click", "cbracco.me");
    });

    /**
     * Request the latest version number from GitHub once a minute
     */

    setInterval(updateVersion(), 60 * 1000);

});
