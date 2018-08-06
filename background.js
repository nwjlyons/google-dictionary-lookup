chrome.contextMenus.create(
    {
        "title": "Define \"%s\"",
        "contexts":["selection"],
        "onclick": function(info, tab){
            chrome.tabs.create(
                {url: "http://www.google.com/search?q=define:" + info.selectionText
            });
        }
});
