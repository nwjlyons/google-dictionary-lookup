chrome.contextMenus.create(
    {
        "title": "Define \"%s\"",
        "contexts":["selection"],
        "onclick": function(info, tab){
            chrome.tabs.create(
                {url: "http://www.google.com/search?q=define" + encodeURIComponent(" " + info.selectionText).replace(/%20/g, "+"),
                index: tab.index + 1,
                openerTabId: tab.id
            });
        }
});
