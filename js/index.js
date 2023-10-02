// ----------------------------------
// uk.co.mbfrias.cookieclick
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


    cookie = document.getElementById("clickme");
    shopButton = document.getElementById("nyanBtn");

    cookie.onclick = function() {
        score++;
        document.getElementById("scoreNum").innerHTML = score;
        const d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        document.cookie = "score=" + score + "; expires=" + d.toUTCString();
    }

    shopItems = document.getElementsByClassName("shopItem");

    for (const item of shopItems) {
        
    }

    shopButton.onclick = function() {
        if (score >= 100) {
            score = score - 100;
            document.getElementById("scoreNum").innerHTML = score;
            // cookie to expire in 1 day
            const d = new Date();
            d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
            document.cookie = "score=" + score + "; expires=" + d.toUTCString();
        } else {
            window.alert("You don't have enough points!");
        }
    }

}