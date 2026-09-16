/**
 * Plain Disclosure - cookie choice demo + four-question worksheet
 */
(function () {
  "use strict";

  function init() {
    var samples = {
      a: {
        text: "We use essential cookies to make this page work. We would like to set analytics cookies to see which pages you open, and preference cookies to remember a display setting. Analytics and preference cookies are optional. You can accept extras, keep essential cookies only, or reject extras. Essential cookies stay on.",
        out: {
          what: "Essential cookies, plus optional analytics and preference cookies.",
          why: "Make the page work; measure page use; remember a display setting.",
          where: "This site. Analytics would measure which pages you open.",
          no: "Reject extras or keep essential only. The page still works.",
          marks: ["optional", "reject extras", "Essential cookies stay on"]
        }
      },
      b: {
        text: "We use cookies to improve your experience and deliver relevant content. By continuing to browse you agree to our cookie policy.",
        out: {
          what: "\"Cookies\" ... too vague. Which ones?",
          why: "Improve / relevant ... fuzzy.",
          where: "Missing ... blurb never says.",
          no: "Missing ... \"by continuing\" is not a refuse path.",
          marks: ["improve your experience", "By continuing", "agree"]
        }
      },
      c: {
        text: "We set cookies, including analytics cookies from a measurement vendor, to understand how you use the site. Cookie settings are described in our policy.",
        out: {
          what: "Analytics cookies from a measurement vendor.",
          why: "Understand how you use the site.",
          where: "A measurement vendor ... third party is named only as \"vendor\".",
          no: "Missing ... blurb never says you can reject extras.",
          marks: ["analytics cookies", "measurement vendor", "policy"]
        }
      }
    };

    var sampleEl = document.getElementById("sample");
    var sourceEl = document.getElementById("source");
    var sourceView = document.getElementById("sourceView");
    var confusedBtn = document.getElementById("confused");
    var answersEl = document.getElementById("answers");
    var runBtn =
      document.getElementById("pd-run") || document.getElementById("run");
    if (!sampleEl || !sourceEl || !runBtn) return;

    var confusedOn = false;
    var freshTimer = 0;

    function isGap(text) {
      return /missing|too vague|fuzzy/i.test(text);
    }

    function setSlot(name, text) {
      var el = document.querySelector('[data-slot="' + name + '"]');
      if (!el) return;
      el.textContent = text;
      if (el.parentElement) {
        el.parentElement.classList.toggle("gap", isGap(text));
      }
    }

    function render(out, text) {
      setSlot("what", out.what);
      setSlot("why", out.why);
      setSlot("where", out.where);
      setSlot("no", out.no);

      if (answersEl) {
        answersEl.classList.remove("is-fresh");
        void answersEl.offsetWidth;
        answersEl.classList.add("is-fresh");
        window.clearTimeout(freshTimer);
        freshTimer = window.setTimeout(function () {
          answersEl.classList.remove("is-fresh");
        }, 700);
      }

      if (confusedOn && out.marks && out.marks.length && sourceView) {
        var html = text;
        out.marks.forEach(function (m) {
          html = html.replace(m, "<mark class=\"pd-confused\">" + m + "</mark>");
        });
        sourceView.innerHTML = html;
        sourceView.classList.add("on");
      } else if (sourceView) {
        sourceView.classList.remove("on");
        sourceView.textContent = "";
      }
    }

    function loadSampleText(key) {
      if (!samples[key]) return;
      sourceEl.value = samples[key].text;
    }

    function runFour() {
      var t = sourceEl.value.trim();
      var mapped = null;
      Object.keys(samples).forEach(function (k) {
        if (samples[k].text === t) mapped = samples[k];
      });
      if (mapped) {
        render(mapped.out, mapped.text);
        return;
      }
      var low = t.toLowerCase();
      var out = {
        what: /cookie|analytics|preference|essential/.test(low)
          ? "Some cookies are mentioned ... check which kinds."
          : "Missing ... blurb never says.",
        why: /\bfor |\bto [a-z]{4,}|measure|remember|improve/.test(low)
          ? "A purpose is hinted ... may still be fuzzy."
          : "Missing ... blurb never says.",
        where: /store|stored|vendor|third|google|this site/.test(low)
          ? "Storage or a vendor is hinted ... check the detail."
          : "Missing ... blurb never says.",
        no: /optional|opt-out|opt out|reject|essential only|refus/.test(low)
          ? "Some choice language appears."
          : "Missing ... blurb never says.",
        marks: []
      };
      render(out, t);
    }

    sampleEl.addEventListener("change", function () {
      loadSampleText(sampleEl.value);
    });
    runBtn.addEventListener("click", function (event) {
      event.preventDefault();
      runFour();
    });
    if (confusedBtn) {
      confusedBtn.addEventListener("click", function (event) {
        event.preventDefault();
        confusedOn = !confusedOn;
        confusedBtn.setAttribute("aria-pressed", confusedOn ? "true" : "false");
        runFour();
      });
    }

    loadSampleText("a");
    runFour();
    initCookieDemo();
  }

  function initCookieDemo() {
    var acceptBtn = document.getElementById("pd-accept");
    var essentialBtn = document.getElementById("pd-essential");
    var rejectBtn = document.getElementById("pd-reject");
    var optionsBtn = document.getElementById("pd-options");
    var optionsPanel = document.getElementById("pd-options-panel");
    var saveBtn = document.getElementById("pd-save");
    var analyticsEl = document.getElementById("pd-analytics");
    var prefsEl = document.getElementById("pd-prefs");
    var setEl = document.getElementById("pd-set");
    if (!acceptBtn || !setEl || !analyticsEl || !prefsEl) return;

    var KEY = "pdCookieChoice";

    function choiceFromStorage() {
      try {
        var raw = sessionStorage.getItem(KEY);
        if (!raw) return { analytics: false, prefs: false, label: "nothing yet" };
        return JSON.parse(raw);
      } catch (err) {
        return { analytics: false, prefs: false, label: "nothing yet" };
      }
    }

    function saveChoice(next) {
      try {
        sessionStorage.setItem(KEY, JSON.stringify(next));
      } catch (err) {
        /* private mode may block storage; the table still updates */
      }
      analyticsEl.checked = !!next.analytics;
      prefsEl.checked = !!next.prefs;
      renderSet(next);
    }

    function renderSet(next) {
      var rows = [
        ["pd_essential", "On", "Remembers this demo choice in the tab. Strictly necessary for the worksheet."],
        [
          "pd_analytics",
          next.analytics ? "On (demo flag only)" : "Off",
          "Would measure page use. Not actually set on this site."
        ],
        [
          "pd_prefs",
          next.prefs ? "On (demo flag only)" : "Off",
          "Would remember a display setting. Not actually set on this site."
        ]
      ];
      var html =
        "<p><strong>What was set</strong> ... " +
        (next.label || "custom options") +
        ".</p><table><thead><tr><th scope=\"col\">Cookie</th><th scope=\"col\">State</th><th scope=\"col\">What it would do</th></tr></thead><tbody>";
      rows.forEach(function (row) {
        html +=
          "<tr><td>" +
          row[0] +
          "</td><td>" +
          row[1] +
          "</td><td>" +
          row[2] +
          "</td></tr>";
      });
      html += "</tbody></table>";
      setEl.innerHTML = html;
    }

    acceptBtn.addEventListener("click", function () {
      saveChoice({ analytics: true, prefs: true, label: "Accept extras" });
    });
    if (essentialBtn) {
      essentialBtn.addEventListener("click", function () {
        saveChoice({ analytics: false, prefs: false, label: "Essential only" });
      });
    }
    if (rejectBtn) {
      rejectBtn.addEventListener("click", function () {
        saveChoice({ analytics: false, prefs: false, label: "Reject extras" });
      });
    }
    if (optionsBtn && optionsPanel) {
      optionsBtn.addEventListener("click", function () {
        var open = optionsPanel.hidden;
        optionsPanel.hidden = !open;
        optionsBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    if (saveBtn) {
      saveBtn.addEventListener("click", function () {
        saveChoice({
          analytics: analyticsEl.checked,
          prefs: prefsEl.checked,
          label: "Saved options"
        });
      });
    }

    var stored = choiceFromStorage();
    analyticsEl.checked = !!stored.analytics;
    prefsEl.checked = !!stored.prefs;
    if (stored.label && stored.label !== "nothing yet") {
      renderSet(stored);
    } else {
      renderSet({ analytics: false, prefs: false, label: "no extras until you choose" });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
