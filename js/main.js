(function () {
  "use strict";

  var main = document.getElementById("main");
  var skip = document.querySelector(".skip-link");

  if (skip && main) {
    skip.addEventListener("click", function () {
      main.focus({ preventScroll: true });
    });
  }

  if ("IntersectionObserver" in window) {
    var navLinks = document.querySelectorAll(".site-nav a[href^='/'], .site-nav a[href^='./']");
    if (navLinks.length) {
      var path = window.location.pathname.replace(/\/$/, "") || "/zhao-langxi";
      navLinks.forEach(function (link) {
        var href = link.getAttribute("href").replace(/\/$/, "");
        if (href === path || (path.endsWith("/index.html") && href === path.replace(/\/index\.html$/, ""))) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }
  }
})();
