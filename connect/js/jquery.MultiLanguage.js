var language = localStorage.getItem("language"),
	default_lang = "en";

function setLanguage(e) {
	localStorage.setItem("language", e), language = localStorage.getItem("language"), document.getElementById("country_btn").textContent = language ?? "EN", getLanguage()
}

let regenv = 'sit';
let reg_env_check = (/studio.chubb.com/.test(window.location.href)) ? regenv = 'prod'
: (/studio-uat.chubb.com/.test(window.location.href)) ? regenv = 'uat'
: (/studio-sit.chubb.com/.test(window.location.href)) ? regenv = 'sit'
: regenv = 'local';


function getLanguage() {
  var urlData = `/assets/connect/${language.toLocaleLowerCase()}.json`;
  //if(window.location.href.indexOf("products") > -1) {urlData = "/locales/" + language.toLocaleLowerCase() + ".json"; }
  //console.log(urlData)
null == language && setLanguage(default_lang), $.ajax({
  url: urlData,
  dataType: "json",
  async: !0
}).done(function(e) {
  $("body").attr("lang", language), $.each(e, function(e, a) {
    "head" === e && $(document).attr("title", a.title), $(e).children().each(function() {
      $(this).text(a[$(this).attr("key")])
    })
  })
})
}
document.getElementById("country_btn").textContent = language ?? "EN", $(document).ready(function() {
null != language && language !== default_lang && getLanguage(language)
});



