/**
 * CV research-stats workspace (editorial board)
 * Industry figures only · no personal metrics · UK English
 */
(function () {
  "use strict";

  /** @typedef {{
   *   id: string,
   *   theme: string,
   *   themeLabel: string,
   *   category: string,
   *   categoryTone: string,
   *   value: string,
   *   claim: string,
   *   what: string,
   *   citation: string,
   *   role: string,
   *   roleHref: string,
   *   whyMatters: string,
   *   whatToDo: string,
   *   keywords: string
   * }} Stat */

  /** @type {Stat[]} */
  var STATS = [
    {
      id: "dh-72",
      theme: "digital-humans",
      themeLabel: "Digital Humans",
      category: "Adoption",
      categoryTone: "amber",
      value: "72%",
      claim: "of organisations use AI in at least one business function",
      what: "72% of organisations reported using AI in at least one business function (McKinsey, early 2024).",
      citation: "McKinsey, 2024",
      role: "Digital Humans Project Lead",
      roleHref: "/zhao-langxi/work/digital-humans.html",
      whyMatters:
        "Adoption is the backdrop, not the proof. Person-like interfaces still fail on trust, disclosure, and post-demo usefulness. Core question: when AI looks and communicates like a person, what makes people trust it, use it, and keep using it?",
      whatToDo:
        "Cite this as market context for Digital Humans case studies and hire copy. Lead with trust, disclosure, and operational fit ... not another pilot slide.",
      keywords: "adoption AI business mckinsey scale digital humans"
    },
    {
      id: "dh-5",
      theme: "digital-humans",
      themeLabel: "Digital Humans",
      category: "Scale gap",
      categoryTone: "violet",
      value: "5%",
      claim: "of custom enterprise AI tools reach production",
      what: "Only about 5% of custom enterprise AI tools reach production (MIT NANDA, 2025).",
      citation: "MIT NANDA, 2025",
      role: "Digital Humans Project Lead",
      roleHref: "/zhao-langxi/work/digital-humans.html",
      whyMatters:
        "Wide use is not deep integration. The pilot-to-production gap is where human-centered business technology either sticks or dies. That is the unglamorous handoff after the demo.",
      whatToDo:
        "Frame next project work around operational fit: oversight, handoffs, and whether staff can keep the system without a specialist on retainer. Essay and case study angles live here.",
      keywords: "enterprise scale mit nanda production handoff"
    },
    {
      id: "dh-51",
      theme: "digital-humans",
      themeLabel: "Digital Humans",
      category: "Trust & perception",
      categoryTone: "teal",
      value: "51%",
      claim: "report at least one negative AI consequence, led by inaccuracy",
      what: "51% of respondents from organisations using AI reported at least one negative consequence, most often inaccuracy (McKinsey, 2025). Master of Code (2026) repeats the figure in an industry roundup.",
      citation: "McKinsey, 2025",
      role: "Digital Humans Project Lead",
      roleHref: "/zhao-langxi/work/digital-humans.html",
      whyMatters:
        "Failure modes are already visible. Accuracy and expectation-setting sit next to anthropomorphism. Looking human raises the bar for honesty, not lowers it.",
      whatToDo:
        "Design for visible uncertainty, clear disclosure, and easy override. Build demos that show recovery from wrong answers, not only fluent ones.",
      keywords: "negative consequences inaccuracy trust disclosure mckinsey"
    },
    {
      id: "pr-20",
      theme: "privacy",
      themeLabel: "Privacy",
      category: "Disclosure",
      categoryTone: "teal",
      value: "20%",
      claim: "of consumers say providers are very clear on data use",
      what: "Only 20% of consumers say providers are very clear on data use (Deloitte, 2025).",
      citation: "Deloitte, 2025",
      role: "Web Developer (NSF)",
      roleHref: "/zhao-langxi/about.html",
      whyMatters:
        "Clarity is rare. Privacy and trust work from NSF web experience feeds the same Digital Humans question: disclosure has to be usable, not buried.",
      whatToDo:
        "Draft plain-language data notices and interface copy you can reuse in product UX writeups. Keep framing at consumer / app trust ... no clinical material.",
      keywords: "clarity disclosure deloitte consumers privacy"
    },
    {
      id: "pr-828",
      theme: "privacy",
      themeLabel: "Privacy",
      category: "Data practices",
      categoryTone: "violet",
      value: "82.8%",
      claim: "of iOS apps track private data",
      what: "82.8% of iOS apps track private data (DataStackHub, 2025).",
      citation: "DataStackHub, 2025",
      role: "Web Developer (NSF)",
      roleHref: "/zhao-langxi/about.html",
      whyMatters:
        "Tracking is common. That is why privacy choices in shipped software matter before anyone talks about person-like AI. Trust is earned in the boring settings screens.",
      whatToDo:
        "Audit a small app or site for tracking surfaces and document the minimum data story. Practice for NDA-aware public writing: patterns, not internals.",
      keywords: "ios tracking data privacy nsf"
    },
    {
      id: "pr-82",
      theme: "privacy",
      themeLabel: "Privacy",
      category: "Trust & retention",
      categoryTone: "amber",
      value: "82%",
      claim: "of consumers abandoned a brand over data use",
      what: "82% of consumers abandoned a brand over data use (Thales, 2025).",
      citation: "Thales, 2025",
      role: "Web Developer (NSF)",
      roleHref: "/zhao-langxi/about.html",
      whyMatters:
        "Data use is a retention risk, not only a compliance checkbox. Family restaurant ops taught the same lesson earlier: a system either survives contact with a real customer or it does not.",
      whatToDo:
        "Treat privacy UX as business risk in portfolio stories. Pair with Serve IT accessibility instinct: partners need handoffs they can keep.",
      keywords: "abandon brand thales trust retention"
    },
    {
      id: "ux-91",
      theme: "ux-privacy",
      themeLabel: "UX",
      category: "Consent theatre",
      categoryTone: "amber",
      value: "91%",
      claim: "consent to terms without reading",
      what: "91% consent to terms without reading (Deloitte).",
      citation: "Deloitte",
      role: "User Experience Designer",
      roleHref: "/zhao-langxi/about.html",
      whyMatters:
        "Consent theatre is the default. UX work that assumes careful reading will fail. Digital Humans and privacy UX both need designs that work when people skip the fine print.",
      whatToDo:
        "Prototype progressive disclosure: short summary first, details on demand, never hide the override. Capture the pattern for case studies.",
      keywords: "consent terms deloitte ux"
    },
    {
      id: "ux-97",
      theme: "ux-privacy",
      themeLabel: "UX",
      category: "Consent theatre",
      categoryTone: "violet",
      value: "97%",
      claim: "among ages 18 to 34 consent without reading",
      what: "97% among ages 18 to 34 consent without reading (Deloitte).",
      citation: "Deloitte",
      role: "User Experience Designer",
      roleHref: "/zhao-langxi/about.html",
      whyMatters:
        "Younger adults are even less likely to read. Design cannot rely on careful policy reading as the safety net for trust or accountability.",
      whatToDo:
        "Test copy with peers who will not read the long version. Prefer interface affordances over longer notices.",
      keywords: "18 to 34 consent young adults"
    },
    {
      id: "ux-half",
      theme: "ux-privacy",
      themeLabel: "UX",
      category: "Comprehension",
      categoryTone: "teal",
      value: "Half+",
      claim: "still fail privacy comprehension after reading",
      what: "Over half still fail privacy comprehension after reading (UX privacy study, 2021).",
      citation: "UX privacy study, 2021",
      role: "User Experience Designer",
      roleHref: "/zhao-langxi/about.html",
      whyMatters:
        "Even when people read, comprehension fails. Plain language and structure matter more than volume. That is HCI applied to trust, not polish for its own sake.",
      whatToDo:
        "Rewrite one privacy notice into plain English and check comprehension with a short quiz. Keep the before/after for a UX research mini-case.",
      keywords: "comprehension fail reading ux privacy study"
    },
    {
      id: "np-92",
      theme: "nonprofit",
      themeLabel: "Nonprofit",
      category: "Strategy gap",
      categoryTone: "amber",
      value: "92% / 7%",
      claim: "use AI but only 7% call it strategic",
      what: "92% use AI but only 7% call it strategic (Virtuous, 2026).",
      citation: "Virtuous, 2026",
      role: "Business Technologist (PIT-UN)",
      roleHref: "/zhao-langxi/work/serve-ai.html",
      whyMatters:
        "Tools land before strategy. Serve-AI and PIT-UN work sit in that adoption gap for community organisations ... same instinct as Serve IT ships that must survive without a developer on call.",
      whatToDo:
        "Draft a one-page “what we will and will not automate” checklist for a nonprofit partner. Link it to staff-maintainable handoff notes on this site.",
      keywords: "nonprofit virtuous strategic pit-un serve-ai"
    },
    {
      id: "np-66",
      theme: "nonprofit",
      themeLabel: "Nonprofit",
      category: "Capacity gap",
      categoryTone: "violet",
      value: "66% vs 34%",
      claim: "larger orgs adopt AI nearly 2x smaller ones",
      what: "Larger organisations adopt AI nearly 2x smaller ones (66% vs 34%) (TechSoup, 2025).",
      citation: "TechSoup, 2025",
      role: "Business Technologist (PIT-UN)",
      roleHref: "/zhao-langxi/work/serve-ai.html",
      whyMatters:
        "Capacity gap. Smaller partners need simple handoffs, not enterprise stacks. That is human-centered business technology at clinic scale.",
      whatToDo:
        "Scope the smallest useful AI-adjacent improvement a small org can keep. Document assumptions and who owns overrides.",
      keywords: "techsoup larger smaller adopt capacity"
    },
    {
      id: "np-47",
      theme: "nonprofit",
      themeLabel: "Nonprofit",
      category: "Governance",
      categoryTone: "teal",
      value: "47%",
      claim: "lack an AI policy",
      what: "47% lack an AI policy (TechSoup, 2025).",
      citation: "TechSoup, 2025",
      role: "Business Technologist (PIT-UN)",
      roleHref: "/zhao-langxi/work/serve-ai.html",
      whyMatters:
        "Policy lag is part of responsible adoption. Accessibility and override still need to travel with the tools. True over impressive: many orgs are mid-adoption without a written bar.",
      whatToDo:
        "Write a short starter policy outline (disclosure, review, override, accessibility). Keep it portable under CC BY-SA where Serve-AI materials allow.",
      keywords: "policy techsoup governance"
    },
    {
      id: "rs-74",
      theme: "restaurant",
      themeLabel: "Restaurant",
      category: "Local discovery",
      categoryTone: "amber",
      value: "74%",
      claim: "of diners use social to decide where to eat",
      what: "74% of diners use social to decide where to eat (Restaurant Velocity, 2026).",
      citation: "Restaurant Velocity, 2026",
      role: "Restaurant Kid",
      roleHref: "/zhao-langxi/about.html",
      whyMatters:
        "Local discovery still runs through social. The restaurant-kid origin is not colour: it is the first system that either survived a real Friday night or did not. That instinct later shows up in Serve IT and Digital Humans.",
      whatToDo:
        "Map one local decision journey (search → social → visit) and note where trust breaks. Use it as origin story evidence, not invented growth metrics.",
      keywords: "diners social restaurant velocity family business"
    },
    {
      id: "rs-99",
      theme: "restaurant",
      themeLabel: "Restaurant",
      category: "Ops gap",
      categoryTone: "violet",
      value: "99% vs 69%",
      claim: "full-service restaurants have active social vs a functional website",
      what: "99% of full-service restaurants have active social vs 69% with a functional website (Restaurant Velocity, 2026).",
      citation: "Restaurant Velocity, 2026",
      role: "Restaurant Kid",
      roleHref: "/zhao-langxi/about.html",
      whyMatters:
        "Social presence outruns the website. Both still need to work when a customer is hungry and impatient. Ops and digital are one system on the floor.",
      whatToDo:
        "Prioritise the broken link between social promise and website reality in any small-business build. Jade🪴 work starts from that gap.",
      keywords: "social website full-service gap"
    },
    {
      id: "rs-99lift",
      theme: "restaurant",
      themeLabel: "Restaurant",
      category: "Consistency",
      categoryTone: "teal",
      value: "9.9%",
      claim: "direct-revenue lift tied to consistent social",
      what: "9.9% direct-revenue lift tied to consistent social (Deloitte Digital, 2025).",
      citation: "Deloitte Digital, 2025",
      role: "Restaurant Kid",
      roleHref: "/zhao-langxi/about.html",
      whyMatters:
        "Consistency compounds. This is market context for why routine digital ops matter ... not a personal revenue claim. The throughline ends in entrepreneurship longer term, starting from the family floor.",
      whatToDo:
        "Design a simple weekly content checklist a small restaurant can keep. Measure presence and reply quality, not vanity hype.",
      keywords: "revenue lift deloitte digital social consistency"
    }
  ];

  var THEMES = [
    {
      id: "digital-humans",
      label: "Digital Humans",
      foot: "Digital Humans throughline",
      role: "Digital Humans Project Lead",
      href: "/zhao-langxi/work/digital-humans.html",
      whyCluster:
        "Adoption is high; scale and trust are not. Hire-facing centre: person-like AI as a business interface problem.",
      projectIdea:
        "Next build: a disclosure + override pattern library for a Digital Humans demo, with a short after-the-demo handoff note."
    },
    {
      id: "privacy",
      label: "Privacy",
      foot: "Privacy / trust throughline",
      role: "Web Developer (NSF)",
      href: "/zhao-langxi/about.html",
      whyCluster:
        "Consumer trust in data use is weak. NSF web experience sits under the Digital Humans story as privacy / trust practice, NDA-aware and non-clinical.",
      projectIdea:
        "Next build: a plain-language data-use panel you can drop into any portfolio prototype, with abandon-risk framing."
    },
    {
      id: "ux-privacy",
      label: "UX",
      foot: "UX privacy throughline",
      role: "User Experience Designer",
      href: "/zhao-langxi/about.html",
      whyCluster:
        "People skip terms and still fail comprehension after reading. UX privacy is where trust meets interface design.",
      projectIdea:
        "Next build: a progressive-disclosure consent flow with a tiny comprehension check, then write the mini-case."
    },
    {
      id: "nonprofit",
      label: "Nonprofit",
      foot: "Nonprofit AI throughline",
      role: "Business Technologist (PIT-UN)",
      href: "/zhao-langxi/work/serve-ai.html",
      whyCluster:
        "Nonprofits use tools faster than they write strategy. Serve-AI / PIT-UN and Serve IT share the maintainable-handoff instinct.",
      projectIdea:
        "Next build: a one-page AI adoption checklist for a small nonprofit (policy stub + accessibility + override owner)."
    },
    {
      id: "restaurant",
      label: "Restaurant",
      foot: "Restaurant digital throughline",
      role: "Restaurant Kid",
      href: "/zhao-langxi/about.html",
      whyCluster:
        "Family business origin: digital either helps a real diner choose and show up, or it is theatre. Same spine as later clinic and Digital Humans work.",
      projectIdea:
        "Next build: a social ↔ website consistency audit template for a local restaurant (no invented sales numbers)."
    }
  ];

  var NOTES_KEY = "zhao-langxi-research-stats-notes";
  var LOCK_KEY = "zhao-langxi-research-stats-lock";
  var SELECT_KEY = "zhao-langxi-research-stats-select";
  var THEME_KEY = "zhao-langxi-research-stats-theme";
  var MAX_SELECT = 3;

  var state = {
    theme: "digital-humans",
    selectedIds: [],
    stepIndex: 0,
    locked: null
  };

  var grid = document.getElementById("stats-grid");
  var countEl = document.getElementById("rs-select-count");
  var hintEl = document.getElementById("rs-hint");
  var clusterWhy = document.getElementById("cluster-why");
  var tabs = document.querySelectorAll(".rs-tab");
  var stepper = document.getElementById("project-stepper");
  var stepperLabel = document.getElementById("stepper-label");
  var stepperIdea = document.getElementById("stepper-idea");
  var stepperPrev = document.getElementById("stepper-prev");
  var stepperNext = document.getElementById("stepper-next");
  var stepperLock = document.getElementById("stepper-lock");
  var lockedEl = document.getElementById("rs-locked");
  var lockedBody = document.getElementById("rs-locked-body");
  var lockedClear = document.getElementById("rs-locked-clear");
  var notesField = document.getElementById("stats-notes-field");
  var notesStatus = document.getElementById("stats-notes-status");
  var footTheme = document.getElementById("rs-foot-theme");
  var dateEl = document.getElementById("rs-date");

  if (!grid) return;

  if (dateEl) {
    try {
      var now = new Date();
      var months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      dateEl.textContent =
        now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear();
      dateEl.setAttribute(
        "datetime",
        now.getFullYear() +
          "-" +
          String(now.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(now.getDate()).padStart(2, "0")
      );
    } catch (e) { /* ignore */ }
  }

  try {
    var savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme && THEMES.some(function (t) { return t.id === savedTheme; })) {
      state.theme = savedTheme;
    }
    var savedSelect = localStorage.getItem(SELECT_KEY);
    if (savedSelect) {
      var parsed = JSON.parse(savedSelect);
      if (Array.isArray(parsed)) {
        state.selectedIds = parsed.filter(function (id) {
          return STATS.some(function (s) { return s.id === id; });
        }).slice(0, MAX_SELECT);
      }
    }
    var savedLock = localStorage.getItem(LOCK_KEY);
    if (savedLock) {
      state.locked = JSON.parse(savedLock);
    }
  } catch (e) { /* ignore */ }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function themeMeta(id) {
    return THEMES.find(function (t) { return t.id === id; }) || null;
  }

  function visibleStats() {
    return STATS.filter(function (s) { return s.theme === state.theme; });
  }

  function selectedStats() {
    return state.selectedIds
      .map(function (id) { return STATS.find(function (s) { return s.id === id; }); })
      .filter(Boolean);
  }

  function uniqueClustersFromSelection() {
    var seen = {};
    var out = [];
    selectedStats().forEach(function (s) {
      if (!seen[s.theme]) {
        seen[s.theme] = true;
        var t = themeMeta(s.theme);
        if (t) out.push(t);
      }
    });
    return out;
  }

  function persistSelect() {
    try {
      localStorage.setItem(SELECT_KEY, JSON.stringify(state.selectedIds));
    } catch (e) { /* ignore */ }
  }

  function persistTheme() {
    try {
      localStorage.setItem(THEME_KEY, state.theme);
    } catch (e) { /* ignore */ }
  }

  function persistLock() {
    try {
      if (state.locked) {
        localStorage.setItem(LOCK_KEY, JSON.stringify(state.locked));
      } else {
        localStorage.removeItem(LOCK_KEY);
      }
    } catch (e) { /* ignore */ }
  }

  function renderCount() {
    if (countEl) {
      countEl.textContent = state.selectedIds.length + " / " + MAX_SELECT + " selected";
    }
  }

  function renderClusterWhy() {
    var t = themeMeta(state.theme);
    if (!clusterWhy || !t) return;
    clusterWhy.innerHTML =
      "<strong>" + escapeHtml(t.label) + ".</strong> " + escapeHtml(t.whyCluster) +
      ' <a href="' + t.href + '">Related page</a>';
  }

  function renderTabs() {
    tabs.forEach(function (btn) {
      var on = btn.getAttribute("data-theme") === state.theme;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    if (footTheme) {
      var t = themeMeta(state.theme);
      if (t) footTheme.textContent = t.foot;
    }
  }

  function toggleSelect(id) {
    var idx = state.selectedIds.indexOf(id);
    if (idx >= 0) {
      state.selectedIds.splice(idx, 1);
    } else {
      if (state.selectedIds.length >= MAX_SELECT) {
        state.selectedIds.shift();
      }
      state.selectedIds.push(id);
    }
    persistSelect();
    renderAll();
  }

  function renderGrid() {
    var list = visibleStats();
    grid.innerHTML = list.map(function (s) {
      var selected = state.selectedIds.indexOf(s.id) !== -1;
      var clusterTag = selected
        ? '<span class="rs-card-cluster">' + escapeHtml(s.themeLabel) + "</span>"
        : "";
      return (
        '<button type="button" class="rs-card tone-' + escapeHtml(s.categoryTone) +
          (selected ? " is-selected" : "") +
          '" data-id="' + s.id + '" aria-pressed="' + (selected ? "true" : "false") + '">' +
          '<div class="rs-card-top">' +
            '<div class="rs-card-stat">' +
              '<span class="rs-card-value">' + escapeHtml(s.value) + "</span>" +
              '<span class="rs-card-claim">' + escapeHtml(s.claim) + "</span>" +
            "</div>" +
            '<span class="rs-card-cat">' + escapeHtml(s.category) + "</span>" +
          "</div>" +
          '<div class="rs-card-block">' +
            '<span class="rs-kicker">What</span>' +
            "<p>" + escapeHtml(s.what) + "</p>" +
          "</div>" +
          '<div class="rs-card-block rs-card-block--why">' +
            '<span class="rs-kicker">Why it matters</span>' +
            "<p>" + escapeHtml(s.whyMatters) + "</p>" +
          "</div>" +
          '<div class="rs-card-block rs-card-block--build">' +
            '<span class="rs-kicker">What to build</span>' +
            "<p>" + escapeHtml(s.whatToDo) + "</p>" +
          "</div>" +
          '<div class="rs-card-foot">' +
            '<span class="rs-card-cite">' + escapeHtml(s.citation) + " · " + escapeHtml(s.role) + "</span>" +
            clusterTag +
            '<span class="rs-card-dot" aria-hidden="true"></span>' +
          "</div>" +
        "</button>"
      );
    }).join("");

    grid.querySelectorAll(".rs-card").forEach(function (card) {
      card.addEventListener("click", function () {
        toggleSelect(card.getAttribute("data-id"));
        card.focus();
      });
    });
  }

  function renderStepper() {
    var clusters = uniqueClustersFromSelection();
    var active = state.selectedIds.length >= 2 && clusters.length > 0;

    if (hintEl) {
      if (state.selectedIds.length < 2) {
        hintEl.hidden = false;
        hintEl.textContent = "Select 2 to 3 cards to activate the cluster stepper.";
      } else {
        hintEl.hidden = true;
      }
    }

    if (!stepper) return;

    if (!active) {
      stepper.hidden = true;
      return;
    }

    stepper.hidden = false;
    if (state.stepIndex >= clusters.length) state.stepIndex = 0;
    var t = clusters[state.stepIndex];
    if (!t) return;

    if (stepperLabel) {
      stepperLabel.textContent =
        "Cluster " + (state.stepIndex + 1) + " of " + clusters.length + ": " + t.label;
    }
    if (stepperIdea) {
      stepperIdea.innerHTML =
        "<p>" + escapeHtml(t.whyCluster) + "</p>" +
        '<p class="rs-next-build"><strong>Next project idea.</strong> ' +
        escapeHtml(t.projectIdea) + "</p>" +
        '<p><a href="' + t.href + '">Open related page</a></p>';
    }
    if (stepperPrev) stepperPrev.disabled = state.stepIndex === 0;
    if (stepperNext) stepperNext.disabled = state.stepIndex >= clusters.length - 1;
  }

  function renderLocked() {
    if (!lockedEl || !lockedBody) return;
    if (!state.locked) {
      lockedEl.hidden = true;
      lockedBody.innerHTML = "";
      return;
    }
    lockedEl.hidden = false;
    lockedBody.innerHTML =
      "<p><strong>" + escapeHtml(state.locked.label) + "</strong></p>" +
      "<p>" + escapeHtml(state.locked.projectIdea) + "</p>";
  }

  function setTheme(theme) {
    if (!THEMES.some(function (t) { return t.id === theme; })) return;
    state.theme = theme;
    persistTheme();
    renderAll();
  }

  function renderAll() {
    renderTabs();
    renderClusterWhy();
    renderCount();
    renderGrid();
    renderStepper();
    renderLocked();
  }

  tabs.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setTheme(btn.getAttribute("data-theme"));
    });
  });

  if (stepperPrev) {
    stepperPrev.addEventListener("click", function () {
      if (state.stepIndex > 0) {
        state.stepIndex -= 1;
        renderStepper();
      }
    });
  }
  if (stepperNext) {
    stepperNext.addEventListener("click", function () {
      var clusters = uniqueClustersFromSelection();
      if (state.stepIndex < clusters.length - 1) {
        state.stepIndex += 1;
        renderStepper();
      }
    });
  }
  if (stepperLock) {
    stepperLock.addEventListener("click", function () {
      var clusters = uniqueClustersFromSelection();
      var t = clusters[state.stepIndex];
      if (!t) return;
      state.locked = {
        id: t.id,
        label: t.label,
        projectIdea: t.projectIdea
      };
      persistLock();
      renderLocked();
      if (lockedEl) lockedEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
  if (lockedClear) {
    lockedClear.addEventListener("click", function () {
      state.locked = null;
      persistLock();
      renderLocked();
    });
  }

  var notesTimer = null;
  if (notesField) {
    try {
      notesField.value = localStorage.getItem(NOTES_KEY) || "";
    } catch (e) { /* ignore */ }

    notesField.addEventListener("input", function () {
      if (notesStatus) notesStatus.textContent = "Saving...";
      if (notesTimer) clearTimeout(notesTimer);
      notesTimer = setTimeout(function () {
        try {
          localStorage.setItem(NOTES_KEY, notesField.value || "");
          if (notesStatus) notesStatus.textContent = "Saved to local storage automatically.";
        } catch (err) {
          if (notesStatus) notesStatus.textContent = "Could not save locally.";
        }
      }, 350);
    });
  }

  try {
    var params = new URLSearchParams(window.location.search);
    var themeParam = params.get("theme");
    if (themeParam && THEMES.some(function (t) { return t.id === themeParam; })) {
      state.theme = themeParam;
    }
    var statParam = params.get("stat");
    if (statParam && STATS.some(function (s) { return s.id === statParam; })) {
      if (state.selectedIds.indexOf(statParam) === -1) {
        state.selectedIds = [statParam].concat(state.selectedIds).slice(0, MAX_SELECT);
      }
      var hit = STATS.find(function (s) { return s.id === statParam; });
      if (hit) state.theme = hit.theme;
    }
  } catch (e) { /* ignore */ }

  renderAll();
})();
