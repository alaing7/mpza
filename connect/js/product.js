function scTop(e, t) {
    window.scrollBy(e, t)
 }
 
 function openCity(e, t) {
    var a, s, l;
    for (a = 0, s = document.getElementsByClassName("tabcontentExp"); a < s.length; a++) s[a].style.display = "none";
    for (a = 0, l = document.getElementsByClassName("tablinksExp"); a < l.length; a++) l[a].className = l[a].className.replace(" active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
 }
 
 function sddActiveClass() {
    document.getElementById("defaultOpen").click()
 }
 
 function openCitySide(e, t) {
    var a, s, l;
    for (a = 0, s = document.getElementsByClassName("tabcontent-side"); a < s.length; a++) s[a].style.display = "block";
    for (a = 0, l = document.getElementsByClassName("tablinks-side"); a < l.length; a++) l[a].className = l[a].className.replace(" active", "");
    try {
       document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
    } catch (c) {}
 }
 
 function AssociatedApi(e, t) {
    var a, s, l;
    for (a = 0, s = document.getElementsByClassName("tabcontent-apiside"); a < s.length; a++) s[a].style.display = "block";
    for (a = 0, l = document.getElementsByClassName("tablinks-apiside"); a < l.length; a++) l[a].className = l[a].className.replace(" active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
 }
 $(document).ready(function () {
    $(".nav-tabs a").click(function () {
       $(this).tab("show")
    })
 }), window.addEventListener("load", () => {
    scTop(0, -9e3);
    let e = Array.from(document.querySelectorAll("section[id]")),
       t = e => e.forEach(e => {
          let t = e.target,
             a = t.id,
             s = document.querySelector(`a[href="#${a}"]`);
          try {
             e.intersectionRatio > 0 ? (t.classList.add("active"), s.classList.add("active")) : (t.classList.remove("active"), s.classList.remove("active"))
          } catch (l) {}
       }),
       a = new IntersectionObserver(t);
    e.forEach(e => a.observe(e))
 }), document.getElementById("defaultOpen").click(), document.getElementById("defaultOpenSide").click();