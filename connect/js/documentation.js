function openCity(e, t) {
    var a, c, n;
    for (a = 0, c = document.getElementsByClassName("doc-tabcontent"); a < c.length; a++) c[a].style.display = "none";
    for (a = 0, n = document.getElementsByClassName("tablinksExp"); a < n.length; a++) n[a].className = n[a].className.replace(" active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
 }

 function openSchema(e, t) {
    var a, c, n;
    for (a = 0, c = document.getElementsByClassName("tabcontent-doc-side-schema"); a < c.length; a++) c[a].style.display = "none";
    for (a = 0, n = document.getElementsByClassName("tablinks-side-schema"); a < n.length; a++) n[a].className = n[a].className.replace(" active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active";
    let s = getBaseUrl() ?? "studio-sit.chubb.com";
    switch (url = `/assets/connect/discovery.yaml`, dom_id = "#Discovery_swagger", t) {
       case "Discovery_Schema":
          dom_id = "#Discovery_swagger", o(url = `/assets/connect/discovery.yaml`, dom_id);
          break;
       case "Pricing_Schema":
          dom_id = "#Pricing_swagger", o(url = `/assets/connect/offers.yaml`, dom_id)
          break;
       case "Sales_Schema":
          dom_id = "#Sales_swagger", o(url = `/assets/connect/sale.yaml`, dom_id)
          break;
       case "Payments_Schema":
          dom_id = "#Payments_swagger", o(url = `/assets/connect/payment.yaml`, dom_id)
          break;
       case "Claims_Schema":
          dom_id = "#Claims_swagger", o(url = `/assets/connect/claim.yaml`, dom_id)
          break;
       case "Servcing_Schema":
          dom_id = "#Servcing_swagger", o(url = `/assets/connect/servicing.yaml`, dom_id)
          break;
       case "Utilities_Schema":
          dom_id = "#Utilities_swagger", o(url = `/assets/connect/utility.yaml`, dom_id)
    }

    function o(e, t) {
       window.ui = SwaggerUIBundle({
          url: e,
          dom_id: t
       })
    }
 }

 function openCitySide(e, t) {
    var a, c, n;
    for (a = 0, c = document.getElementsByClassName("tabcontent-doc-side"); a < c.length; a++) c[a].style.display = "block";
    for (a = 0, n = document.getElementsByClassName("tablinks-side"); a < n.length; a++) n[a].className = n[a].className.replace(" active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
 }
 document.addEventListener("DOMContentLoaded", function () {
    function e() {
       document.querySelectorAll(".above-active").forEach(e => {
          e.classList.remove("above-active")
       });
       let e = document.querySelector(".tablinks-side-schema.active");
       e && e.previousElementSibling && e.previousElementSibling.classList.add("above-active")
    }
    e(), document.querySelectorAll(".tablinks-side-schema").forEach(t => {
       t.addEventListener("click", function (t) {
          document.querySelectorAll(".tablinks-side-schema").forEach(e => {
             e.classList.remove("active")
          }), t.currentTarget.classList.add("active"), e()
       })
    })
 }), $(document).ready(function () {
    $(".nav-tabs a").click(function () {
       $(this).tab("show")
    })
 }), $(document).ready(function () {
    $(".dropdown.mobile-api .tablinks-side-schema").click(function () {
       var e = $(this).text();
       $(".dropdown.mobile-api .icon-text").text(e)
    })
 }), document.getElementById("defaultOpen").click(), document.getElementById("defaultOpenSchema").click(), document.getElementById("defaultOpenSide").click();
 var horizontalAccordions = $(".accordion.width");
 horizontalAccordions.each(function () {
    var e = $(this),
       t = e.find(".collapse"),
       a = t.find("> *");
    e.height(e.height(550)), a.width(a.eq().width()), t.not(".show").each(function () {
       $(this).parent().find("[data-toggle='collapse']").addClass("collapsed")
    })
 });
