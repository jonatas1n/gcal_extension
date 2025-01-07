chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const newUrl = details.url.replace("/calendar/u/0/r", "/calendar/u/1/r");
        return { redirectUrl: newUrl };
    },
    {
        urls: ["*://calendar.google.com/calendar/u/0/r*"],
        types: ["main_frame"]
    },
    ["blocking"]
);

