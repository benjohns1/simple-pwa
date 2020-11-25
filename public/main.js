window.onload = async () => {
    "use strict";

    if ("serviceWorker" in navigator) {
        await navigator.serviceWorker.register("./service-worker.js");
    }
}