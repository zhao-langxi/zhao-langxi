(function () {
  "use strict";

  var main = document.getElementById("main");
  var skip = document.querySelector(".skip-link");

  if (skip && main) {
    skip.addEventListener("click", function () {
      main.focus({ preventScroll: true });
    });
  }

  var path = window.location.pathname.replace(/\/$/, "") || "/zhao-langxi";
  if (path.endsWith("/index.html")) {
    path = path.replace(/\/index\.html$/, "") || "/zhao-langxi";
  }

  function isCurrent(href) {
    var target = (href || "").replace(/\/$/, "");
    if (!target || target.indexOf("http") === 0 || target.indexOf("mailto:") === 0) {
      return false;
    }
    if (target === path) return true;
    if (target === "/zhao-langxi" || target === "/zhao-langxi/") {
      return path === "/zhao-langxi" || path === "";
    }
    if (target === "/zhao-langxi/research") {
      return (
        path === "/zhao-langxi/research" ||
        (path.indexOf("/zhao-langxi/research/") === 0 &&
          path.indexOf("digital-humans-small-business") === -1)
      );
    }
    if (target === "/zhao-langxi/notes") {
      return path === "/zhao-langxi/notes" || path.indexOf("/zhao-langxi/notes/") === 0;
    }
    if (target.indexOf("/zhao-langxi/research/digital-humans-small-business") === 0) {
      return path.indexOf("digital-humans-small-business") !== -1;
    }
    if (target.indexOf("/zhao-langxi/work/digital-humans") === 0) {
      return path === "/zhao-langxi/work/digital-humans" || path.indexOf("/zhao-langxi/work/digital-humans.html") !== -1;
    }
    return false;
  }

  document.querySelectorAll(".site-nav a[href]").forEach(function (link) {
    var href = link.getAttribute("href") || "";
    if (isCurrent(href)) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  /* Calm reveal · skipped when reduced motion is requested */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  nodes.forEach(function (el) {
    observer.observe(el);
  });
})();
