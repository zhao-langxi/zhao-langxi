/**
 * Plain Disclosure - four-question privacy worksheet
 */
(function () {
  "use strict";

  function init() {
    var samples = {
      a: {
        text: "We collect your name, university email, and course selections to personalise your dashboard and send service notices. Data is stored on university systems and retained while you are enrolled. We do not sell personal data. Dashboard personalisation is optional. You may request corrections through the help desk.",
        out: {
          what: "Name, university email, and course selections.",
          why: "Dashboard personalisation and service notices.",
          where: "University systems while you are enrolled. Not sold.",
          no: "Personalisation is optional. Corrections through the help desk.",
          marks: ["personalise", "retained", "optional"]
        }
      },
      b: {
        text: "We may collect information to improve services and communicate with users as needed. Data is handled according to university policy.",
        out: {
          what: "\"Information\" ... too vague.",
          why: "Improve / communicate ... fuzzy.",
          where: "\"University policy\" ... fuzzy.",
          no: "Missing ... blurb never says.",
          marks: ["may collect", "as needed", "university policy"]
        }
      },
      c: {
        text: "We collect your name and email for account setup and store it on university systems while you are enrolled.",
        out: {
          what: "Name and email.",
          why: "Account setup.",
          where: "University systems while you are enrolled.",
          no: "Missing ... blurb never says.",
          marks: ["account setup", "while you are enrolled"]
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
        what: /name|email|data|information/.test(low)
          ? "Some data is mentioned ... check the wording."
          : "Missing ... blurb never says.",
        why: /\bfor |\bto [a-z]{4,}/.test(low)
          ? "A purpose is hinted ... may still be fuzzy."
          : "Missing ... blurb never says.",
        where: /store|stored|system|share|third/.test(low)
          ? "Storage or sharing is hinted ... check the detail."
          : "Missing ... blurb never says.",
        no: /optional|opt-out|opt out|delete|correct|refus/.test(low)
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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
