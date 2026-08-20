/**
 * zhao-langxi · quiet door cross-links
 * Rivet-appropriate: console hint, typed sequences, fishing photo double-click.
 */
(function () {
  "use strict";

  var CRIMSON = "#990000";
  var BUFFER_MAX = 24;
  var buffer = "";
  var fired = {};
  var reduce = false;

  try {
    reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (_e) {
    /* ignore */
  }

  console.log(
    "%c赵郎溪 · zhao-langxi · essays behind the ships",
    "color:" + CRIMSON + ";font-size:13px;font-weight:600"
  );
  console.log(
    "%cside doors: type matcha · dragon · duck (keyboard, not in a text field)",
    "color:" + CRIMSON + ";font-size:11px"
  );

  var DOORS = {
    matcha: {
      label: "Cookie classroom",
      url: "https://matchaxmoxie.github.io/matchaxmoxie/",
    },
    dragon: {
      label: "SWE proof · jadewowgreen",
      url: "https://jadexzhao.github.io/jadexzhao/",
    },
    duck: {
      label: "Duck farm sandbox",
      url: "https://jadexzhao.github.io/jadexzhao/duck-farm/",
    },
  };

  function ensureToast() {
    var el = document.getElementById("door-egg-toast");
    if (el) return el;
    el = document.createElement("p");
    el.id = "door-egg-toast";
    el.className = "door-egg-toast";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    el.hidden = true;
    document.body.appendChild(el);
    return el;
  }

  function showDoorToast(doorKey) {
    var door = DOORS[doorKey];
    if (!door) return;
    var el = ensureToast();
    el.innerHTML =
      door.label +
      ' · <a href="' +
      door.url +
      '" rel="noopener noreferrer">' +
      door.url.replace(/^https:\/\//, "") +
      "</a>";
    el.hidden = false;
    el.classList.add("is-visible");
    window.setTimeout(function () {
      el.classList.remove("is-visible");
      window.setTimeout(function () {
        el.hidden = true;
      }, reduce ? 0 : 280);
    }, 3200);
  }

  function fireOnce(key) {
    if (fired[key]) return;
    fired[key] = true;
    showDoorToast(key);
    window.setTimeout(function () {
      fired[key] = false;
    }, 4000);
  }

  function isTypingContext(target) {
    if (!target || !target.tagName) return false;
    var tag = target.tagName.toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return true;
    if (target.isContentEditable) return true;
    return false;
  }

  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (isTypingContext(e.target)) return;
    if (e.key.length !== 1) return;
    buffer = (buffer + e.key.toLowerCase()).slice(-BUFFER_MAX);
    Object.keys(DOORS).forEach(function (word) {
      if (buffer.endsWith(word)) fireOnce(word);
    });
  });

  var fishing = document.querySelector(".hero-visual img, main figure img[src*='fishing']");
  if (fishing) {
    fishing.classList.add("egg-fishing");
    fishing.setAttribute("title", "Caught something? Double-click for the classroom.");
    var lastTap = 0;
    fishing.addEventListener("click", function () {
      var now = Date.now();
      if (now - lastTap < 420) fireOnce("matcha");
      lastTap = now;
    });
  }

  var phoenix = document.querySelector(".egg-phoenix");
  if (phoenix) {
    phoenix.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        fireOnce("dragon");
      }
    });
  }
})();
