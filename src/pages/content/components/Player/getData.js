function checkForVideo(node, parent, added) {
    // Only proceed with supposed removal if node is missing from DOM
    if (!added && document.body?.contains(node)) {
        return;
    }
    if (
        node.nodeName === "VIDEO" || (node.nodeName === "AUDIO" && tc.settings.audioBoolean)
    ) {
        if (added) {
            node.vsc = new tc.videoController(node, parent);
        } else {
            if (node.vsc) {
                node.vsc.remove();
            }
        }
    } else if (node.children != undefined) {
        for (var i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            checkForVideo(child, child.parentNode || parent, added);
        }
    }
}

var observer = new MutationObserver(function (mutations) {
    // Process the DOM nodes lazily
    requestIdleCallback(
        (_) => {
            mutations.forEach(function (mutation) {
                switch (mutation.type) {
                    case "childList":
                        mutation.addedNodes.forEach(function (node) {
                            if (typeof node === "function") return;
                            if (node === document.documentElement) {
                                // This happens on sites that use document.write, e.g. watch.sling.com
                                // When the document gets replaced, we lose all event handlers, so we need to reinitialize
                                log("Document was replaced, reinitializing", 5);
                                initializeWhenReady(document);
                                return;
                            }
                            checkForVideo(node, node.parentNode || mutation.target, true);
                        });
                        mutation.removedNodes.forEach(function (node) {
                            if (typeof node === "function") return;
                            checkForVideo(node, node.parentNode || mutation.target, false);
                        });
                        break;
                    case "attributes":
                        if (
                            (mutation.target.attributes["aria-hidden"] &&
                                mutation.target.attributes["aria-hidden"].value == "false")
                            || mutation.target.nodeName === 'APPLE-TV-PLUS-PLAYER'
                        ) {
                            var flattenedNodes = getShadow(document.body);
                            var nodes = flattenedNodes.filter(
                                (x) => x.tagName == "VIDEO"
                            );
                            for (let node of nodes) {
                                // only add vsc the first time for the apple-tv case (the attribute change is triggered every time you click the vsc)
                                if (node.vsc && mutation.target.nodeName === 'APPLE-TV-PLUS-PLAYER')
                                    continue;
                                if (node.vsc)
                                    node.vsc.remove();
                                checkForVideo(node, node.parentNode || mutation.target, true);
                            }
                        }
                        break;
                }
            });
        },
        { timeout: 1000 }
    );
});
/*
observer.observe(document, {
    attributeFilter: ["aria-hidden", "data-focus-method"],
    childList: true,
    subtree: true
});
*/
