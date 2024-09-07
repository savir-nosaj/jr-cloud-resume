// Event Listeners
document.getElementById("navigation__btn").addEventListener("click", toggle);

// Variables
var mode = false;

// Functions
function toggle() {
    if (mode == false) {
        darkMode();
        mode = true;
    }
    else {
        lightMode();
        mode = false;
    }
}

function darkMode() { // Dark Mode
    document.querySelector("body").style.backgroundColor = "#242424";

    var icons = document.getElementsByClassName("icon");
    for (var i = 0; i < icons.length; i++) {
        icons[i].style.color = "#fff";
    }

    var toggles = document.getElementsByClassName("toggle-color");
    for (var i = 0; i < toggles.length; i++) {
        toggles[i].style.color = "#ff7f50";
    }

    var pTags = document.getElementsByTagName("p");
    for (var i = 0; i < pTags.length; i++) {
        pTags[i].style.color = "#fff";
    }

    var h1s = document.getElementsByTagName("h1");
    for (var i = 0; i < h1s.length; i++) {
        h1s[i].style.color = "#fff";
    }

    var h2s = document.getElementsByTagName("h2");
    for (var i = 0; i < h2s.length; i++) {
        h2s[i].style.color = "#fff";
    }

    var h3s = document.getElementsByTagName("h3");
    for (var i = 0; i < h3s.length; i++) {
        h3s[i].style.color = "#fff";
    }

    var lis = document.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.color = "#fff";
    }
}

function lightMode() {
    document.querySelector("body").style.backgroundColor = "#fff";

    var icons = document.getElementsByClassName("icon");
    for (var i = 0; i < icons.length; i++) {
        icons[i].style.color = "#000";
    }

    var toggles = document.getElementsByClassName("toggle-color");
    for (var i = 0; i < toggles.length; i++) {
        toggles[i].style.color = "#b54336";
    }

    var pTags = document.getElementsByTagName("p");
    for (var i = 0; i < pTags.length; i++) {
        pTags[i].style.color = "#000";
    }

    var h1s = document.getElementsByTagName("h1");
    for (var i = 0; i < h1s.length; i++) {
        h1s[i].style.color = "#000";
    }

    var h2s = document.getElementsByTagName("h2");
    for (var i = 0; i < h2s.length; i++) {
        h2s[i].style.color = "#000";
    }

    var h3s = document.getElementsByTagName("h3");
    for (var i = 0; i < h3s.length; i++) {
        h3s[i].style.color = "#000";
    }

    var lis = document.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.color = "#000";
    }
}

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

const nav_Links = document.querySelectorAll('.navigation__link');
const sectionElems = document.querySelectorAll('.section');

let currentSection = 'intro';
window.addEventListener('scroll', () => {
    sectionElems.forEach(section => {
        if (window.scrollY >= (section.offsetTop - section.clientHeight / 2)) {
            currentSection = section.id;
        }
    });

    nav_Links.forEach(navs => {
        if (navs.href.includes(currentSection)) {
            document.querySelector('.navigation__active').classList.remove('navigation__active');
            navs.classList.add('navigation__active');
        }
    });
});

let checkbox = document.getElementById("navi-toggle");
let nav = document.querySelector(".navigation");

temp = nav.style.height;

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        nav.style.height = "100vh";
    }
    else {
        nav.style.height = temp;
    }
});

// View Count Retrieval Function
const viewCount = document.querySelector('.section__view-counter');
async function updateCounter() {
    let response = await fetch('https://tkcynqhxlsefopkdtzs5j2ks4m0iaxfy.lambda-url.us-east-2.on.aws/');
    let data = await response.json();
    viewCount.innerHTML = `Views: ${data}`;
    viewCount.innerHTML = `<p class='theme-secondary'>Views: ${data}</p>`

}

updateCounter();
