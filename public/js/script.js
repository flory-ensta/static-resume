function makeBarProgress(id, targetValue, intervalDuration, intervalStep) {
    var currentValue = 0;
    var progressBar = document.getElementById(id);
    var interval = setInterval(() => {
        currentValue += intervalStep;
        progressBar.style.width = currentValue + "%";
        progressBar.setAttribute("aria-valuenow", currentValue);
        if (currentValue >= targetValue) {
            clearInterval(interval);
        }
    }, intervalDuration);
}

function animateBars() {
    var elt = document.getElementById("parallax");
    var bounding = elt.getBoundingClientRect();
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        makeBarProgress("bar-html", 90, 100, 10);
        makeBarProgress("bar-css", 70, 100, 10);
        makeBarProgress("bar-js", 80, 70, 8);
        makeBarProgress("bar-vue", 80, 100, 10);
        makeBarProgress("bar-ng", 60, 70, 8);
        makeBarProgress("bar-node", 90, 100, 10);
        return true;
    } else {
        return false;
    }
}