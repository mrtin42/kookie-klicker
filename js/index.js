// ----------------------------------
// cookies.mbfr.app
// path: js/index.js
// ----------------------------------

window.onload = function() {
    // restore score from cookie
    cookie = document.cookie;
    if (cookie != "") {
        score = cookie.split("=")[1];
        document.getElementById("scoreNum").innerHTML = score;
    } else {
        score = 0;
        document.getElementById("scoreNum").innerHTML = score;
    }

    // ----------------------------------
    // scoring
    cookie = document.getElementById("clickme");
    shopButton = document.getElementById("nyanBtn");

    cookie.onclick = function() {
        // ----------------------------------
        // basic counting
        score++;
        document.getElementById("scoreNum").innerHTML = score;
        const d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        document.cookie = "score=" + score + "; expires=" + d.toUTCString();
        // ----------------------------------

        // ----------------------------------
        // shop eligibilty checker
        prices = document.getElementsByClassName('purchaseArea')
        for (const i of prices) {
            if (score >= i.getElementsByClassName('priceNum').innerHTML) {
                for (const x of i.getElementsByClassName('cookieBuyer')) {
                    x.classList.remove('unavailable')
                }
            }
        }
    }

}