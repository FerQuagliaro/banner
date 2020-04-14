// Enabler Initialization
// If true, start function. If false, listen for INIT.
window.onload = function() {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }
}

function enablerInitHandler() {
    console.log(“dentro!”);
}
//Polite Load
if (Enabler.isInitialized()) {
    init();
} else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
}
// Runs when Enabler is ready.
function init() {
    if (Enabler.isPageLoaded()) {
        politeInit();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
    }
};
// Runs when the page is completely loaded.
function politeInit() {
    // Add your code to hide any loading image or animation and load creative
    // assets or begin creative animation.
};
