(function () {
  "use strict";

  var form = document.querySelector("[data-plan-form]");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = (form.querySelector('[name="name"]') || {}).value || "";
    var seat = (form.querySelector('[name="seat"]') || {}).value || "";
    var note = (form.querySelector('[name="note"]') || {}).value || "";
    var subject = encodeURIComponent("IU / Informatics plan seat · " + (seat || "open"));
    var body = encodeURIComponent(
      "Name: " + name + "\nSeat: " + seat + "\n\nNote:\n" + note + "\n"
    );
    window.location.href = "mailto:jlzhao@iu.edu?subject=" + subject + "&body=" + body;
  });
})();
