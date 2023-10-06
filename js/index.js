// ----------------------------------
// cookies.mbfr.app
// path: js/index.js
// smooth operator.... smoooooooth operatorrrrr
// ----------------------------------


// ----------------------------------
// use cookie button functionality
    function useCookie(cookiename, cookieDiv) {
        // ----------------------------------
        // set cookie image to the selected cookie
        if (document.getElementById(cookieDiv).classList.contains("unavailable")) {
            window.alert("not enough score bro");
        } else {
            document.getElementById('clickme').attributes[0].value = `./img/${cookiename}.png`;
            document.getElementsByClassName('activeCookie')[0].classList.remove("activeCookie");
            document.getElementById(cookieDiv).classList.add("activeCookie");   
        }
        // ----------------------------------
    }
// ----------------------------------

window.onload = function() {
    // ----------------------------------
    // restore score from cookie and unhide unavailable items
    score = 0;
    cookie = document.cookie;
    if (cookie != "") {
        score = cookie.split("=")[1];
        document.getElementById("scoreNum").innerHTML = score;
    } else {
        score = 0;
        document.getElementById("scoreNum").innerHTML = score;
    }
    // ----------------------------------

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
        // remove 'unavailable' class from shop items when score is equal to or greater than the cost
        prices = document.getElementsByClassName('priceNum');
        for (const price of prices) {
            if (score >= price.innerHTML) {
                price.parentElement.classList.remove("unavailable");
            }
        }
        // ----------------------------------
    }
    // ----------------------------------
}