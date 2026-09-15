(function () {
  "use strict";

  var main = document.getElementById("main");
  var skip = document.querySelector(".skip-link");

  if (skip && main) {
    skip.addEventListener("click", function () {
      main.focus({ preventScroll: true });
    });
  }

  var navLinks = document.querySelectorAll(".site-nav a[href^='/'], .site-nav a[href^='./']");
  if (!navLinks.length) return;

  var path = window.location.pathname.replace(/\/$/, "") || "/zhao-langxi";
  if (path.endsWith("/index.html")) {
    path = path.replace(/\/index\.html$/, "") || "/zhao-langxi";
  }

  function isCurrent(href) {
    var target = href.replace(/\/$/, "");
    if (target === path) return true;
    if (target === "/zhao-langxi/research") {
      return (
        path === "/zhao-langxi/research" ||
        path.indexOf("/zhao-langxi/research/") === 0 ||
        path === "/zhao-langxi/notes" ||
        path.indexOf("/zhao-langxi/notes/") === 0
      );
    }
    return false;
  }

  navLinks.forEach(function (link) {
    var href = link.getAttribute("href") || "";
    if (isCurrent(href)) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
})();
