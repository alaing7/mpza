$(document).ready(function () {
    try {
        let e = new URLSearchParams(window.location.search),
            t = Object.fromEntries(e.entries());
        t.industry && openCity(",", t.industry), $(".nav-tabs a").click(function () {
            $(this).tab("show")
        })
    } catch (l) { }
});

const payments = e => {
    let t = document.querySelector("#industries");
    t.value = "Payments"
};

document.querySelector(".payments").addEventListener("click", payments);

    const banks = e => {
        let t = document.querySelector("#industries");
        try{
            t.value = "Banks"
        } catch(e){}
    };

document.querySelector(".banks").addEventListener("click", banks);

    const ecommerce = e => {
        let t = document.querySelector("#industries");
        try{
            t.value = "Ecommerce"
        } catch(e){}
    };

document.querySelector(".ecommerce").addEventListener("click", ecommerce);
const fintech = e => {
    let t = document.querySelector("#industries");
    t.value = "Fintech"
};
document.querySelector(".fintech").addEventListener("click", fintech);
const utilities = e => {
    let t = document.querySelector("#industries");
    t.value = "Utilities"
};
document.querySelector(".utilities").addEventListener("click", utilities);
const mnostelecos = e => {
    let t = document.querySelector("#industries");
    t.value = "Telcos"
};
document.querySelector(".mnostelecos").addEventListener("click", mnostelecos);
const travel = e => {
    let t = document.querySelector("#industries");
    t.value = "Travel"
};
document.querySelector(".travel").addEventListener("click", travel);
const gig = e => {
    let t = document.querySelector("#industries");
    t.value = "Gig"
};
document.querySelector(".gig").addEventListener("click", gig);
const luxury = e => {
    let t = document.querySelector("#industries");
    t.value = "Luxury"
};
document.querySelector(".luxury").addEventListener("click", luxury);
var i, coll = document.getElementsByClassName("PropCollapsible");
for (i = 0; i < coll.length; i++) coll[i].addEventListener("click", function () {
    this.classList.toggle("Propactive");
    var e = this.nextElementSibling;
    e.style.maxHeight ? (e.style.maxHeight = null, e.style.minHeight = null) : (e.style.maxHeight = -40 + e.scrollHeight + "px", e.style.minHeight = "447px")
});
setTimeout(() => {
    window.location.search.includes("banks") ?
    document.querySelectorAll('[data-id="tab-top_Banks"]')[0].click() :
     window.location.search.includes("Ecommerce") ? document.querySelectorAll('[data-id="tab-top_E-Commerce & Retails"]')[0].click()
     : window.location.search.includes("Gig") ? document.querySelectorAll('[data-id="tab-top_Gig"]')[0].click() :
     document.querySelectorAll('[data-id="tab-top_Banks"]')[0].click()
}, 100);
let desktopOpenTab = () => {
    window.location.search.includes("banks") && document.querySelectorAll('[data-id="tab-top_Banks"]')[0].click(), window.location.search.includes("Ecommerce") && document.querySelectorAll('[data-id="tab-top_E-Commerce & Retails"]')[0].click(), window.location.search.includes("Gig") && document.querySelectorAll('[data-id="tab-top_Gig"]')[0].click()
},
    mobileOpenTab = () => {
        setTimeout(() => {
            if (window.location.search.includes("Ecommerce")) {
                let e = document.querySelector(".dropdown-menu-propositions"),
                    t = document.querySelectorAll('.industry-choices-mobile [data-id="tab-top_E_Commerce_retails"]')[0];
                e.style.display = "block", t.click()
            }
            if (window.location.search.includes("Gig")) {
                let l = document.querySelector(".dropdown-menu-propositions"),
                    c = document.querySelectorAll('.industry-choices-mobile [data-id="tab-top_Gig"]')[0];
                l.style.display = "block", c.click()
            }
        }, 1000);
    };
window.addEventListener("resize", function () {
    window.innerWidth >= 778 ? desktopOpenTab() : mobileOpenTab()
}), window.innerWidth >= 778 ? desktopOpenTab() : mobileOpenTab();

var langDynamicProp = {
  "Banks": {
    es: "Bancos propuestas",
    pt: "Bancos proposições",
    en: "Banks propositions"
  },
  "Ecommerce": {
    es: "Comercio ElectrÓnico Y Minorista propuestas",
    pt: "E-commerce & Varejo proposições",
    en: "E-commerce & Retail propositions"
  },
  "Fintech": {
    es: "Fintech propuestas",
    pt: "Fintech proposições",
    en: "Fintech propositions"
  },
  "Payments": {
    es: "Pagos propuestas",
    pt: "Pagamentos proposições",
    en: "Payments propositions"
  },
  "Telcos": {
    es: "Mnos Y Telcos propuestas",
    pt: "MNO e empresas de telecomunicações proposições",
    en: "MNOS & Telcos propositions"
  },
  "Utilities": {
    es: "Utilidades propuestas",
    pt: "Utilitários proposições",
    en: "Utilities propositions"
  },
  "Travel": {
    es: "Operadores de viajes propuestas",
    pt: "Operadores de viagem proposições",
    en: "Travel Operators propositions"
  },
  "Gig": {
    es: "Economía colaborativa y colaborativa propuestas",
    pt: "Economia de gig e compartilhamento proposições",
    en: "Gig & Sharing Economy propositions"
  },
  "Luxury": {
    es: "Lujo propuestas",
    pt: "Luxo proposições",
    en: "Luxury propositions"
  }
}

function openProposition(e, t) {
    var s, a, i;
    for ("Travel" === t, a = document.getElementsByClassName("doc-tabcontent"), s = 0; s < a.length; s++) a[s].style.display = "none";
    for (s = 0, i = document.getElementsByClassName("tablinksExp"); s < i.length; s++) i[s].className = i[s].className.replace(" active", "");
    try {
        if (document.getElementById(t).style.display = "block", void 0 == e.currentTarget && "Payments" == t ? (document.getElementById("payment").classList.add("active"), document.getElementById("ecommerce").classList.remove("active"), document.getElementById("banks").classList.remove("active"), document.getElementById("telcos").classList.remove("active"), document.getElementById("utilities").classList.remove("active"), document.getElementById("travel").classList.remove("active"), document.getElementById("gig").classList.remove("active"), document.getElementById("luxury").classList.remove("active")) : void 0 == e.currentTarget && "Ecommerce" == t ? (document.getElementById("ecommerce").classList.add("active"), document.getElementById("payment").classList.remove("active"), document.getElementById("banks").classList.remove("active"), document.getElementById("utilities").classList.remove("active"), document.getElementById("telcos").classList.remove("active"), document.getElementById("travel").classList.remove("active"), document.getElementById("gig").classList.remove("active"), document.getElementById("luxury").classList.remove("active")) : void 0 == e.currentTarget && "Fintech" == t ? (document.getElementById("ecommerce").classList.add("active"), document.getElementById("payment").classList.remove("active"), document.getElementById("banks").classList.remove("active"), document.getElementById("utilities").classList.remove("active"), document.getElementById("telcos").classList.remove("active"), document.getElementById("travel").classList.remove("active"), document.getElementById("gig").classList.remove("active"), document.getElementById("luxury").classList.remove("active")) : void 0 == e.currentTarget && "Utilities" == t ? (document.getElementById("utilities").classList.add("active"), document.getElementById("payment").classList.remove("active"), document.getElementById("banks").classList.remove("active"), document.getElementById("ecommerce").classList.remove("active"), document.getElementById("telcos").classList.remove("active"), document.getElementById("travel").classList.remove("active"), document.getElementById("gig").classList.remove("active"), document.getElementById("luxury").classList.remove("active")) : void 0 == e.currentTarget && "Telcos" == t ? (document.getElementById("telcos").classList.add("active"), document.getElementById("payment").classList.remove("active"), document.getElementById("banks").classList.remove("active"), document.getElementById("ecommerce").classList.remove("active"), document.getElementById("utilities").classList.remove("active"), document.getElementById("travel").classList.remove("active"), document.getElementById("gig").classList.remove("active"), document.getElementById("luxury").classList.remove("active")) : void 0 == e.currentTarget && "Banks" == t ? (document.getElementById("banks").classList.add("active"), document.getElementById("telcos").classList.remove("active"), document.getElementById("payment").classList.remove("active"), document.getElementById("ecommerce").classList.remove("active"), document.getElementById("utilities").classList.remove("active"), document.getElementById("travel").classList.remove("active"), document.getElementById("gig").classList.remove("active"), document.getElementById("luxury").classList.remove("active")) : void 0 == e.currentTarget && "Travel" == t ? (document.getElementById("travel").classList.add("active"), document.getElementById("telcos").classList.remove("active"), document.getElementById("payment").classList.remove("active"), document.getElementById("ecommerce").classList.remove("active"), document.getElementById("utilities").classList.remove("active"), document.getElementById("banks").classList.remove("active"), document.getElementById("gig").classList.remove("active"), document.getElementById("luxury").classList.remove("active")) : void 0 == e.currentTarget && "Gig" == t ? (document.getElementById("gig").classList.add("active"), document.getElementById("telcos").classList.remove("active"), document.getElementById("payment").classList.remove("active"), document.getElementById("ecommerce").classList.remove("active"), document.getElementById("utilities").classList.remove("active"), document.getElementById("banks").classList.remove("active"), document.getElementById("travel").classList.remove("active"), document.getElementById("luxury").classList.remove("active")) : void 0 == e.currentTarget && "Luxury" == t ? (document.getElementById("luxury").classList.add("active"), document.getElementById("telcos").classList.remove("active"), document.getElementById("payment").classList.remove("active"), document.getElementById("ecommerce").classList.remove("active"), document.getElementById("utilities").classList.remove("active"), document.getElementById("banks").classList.remove("active"), document.getElementById("travel").classList.remove("active"), document.getElementById("gig").classList.remove("active")) : e.currentTarget.className += " active", window.innerWidth <= 768) {
            let l = document.querySelector(".SDKs-h3s");
            let index = Object.keys(langDynamicProp).findIndex(x=>x === t);
            if(index !=-1){
             t = Object.values(langDynamicProp)[index][language.toLocaleLowerCase()]
            }
            // if(t=='Banks'){
            //   t=langDynamicProp[t][language.toLocaleLowerCase()]
            // }
            // if(t=='Ecommerce'){
            //   t=langDynamicProp[t][language.toLocaleLowerCase()]
            // }
            // if(t=='Fintech'){
            //   t=langDynamicProp[t][language.toLocaleLowerCase()]
            // }
            // if(t=='Payments'){
            //   t=langDynamicProp[t][language.toLocaleLowerCase()]
            // }
            // if(t=='Telcos'){
            //   t=langDynamicProp[t][language.toLocaleLowerCase()]
            // }
            // if(t=='Utilities'){
            //   t=langDynamicProp[t][language.toLocaleLowerCase()]
            // }
            // if(t=='Travel'){
            //   t=langDynamicProp[t][language.toLocaleLowerCase()]
            // }
            // if(t=='Gig'){
            //   t=langDynamicProp[t][language.toLocaleLowerCase()]
            // }
            // if(t=='Luxury'){
            //   t=langDynamicProp[t][language.toLocaleLowerCase()]
            // }
            if (l) { const b = document.createElement('b'); b.className = 'clr_black'; b.textContent = t; l.innerHTML = ''; l.appendChild(b); }
        }
    } catch (e) { }
}

//document.getElementById("banks") && document.getElementById("banks").click();

function goToProposition(id){
    $('html, body').animate({
        scrollTop: $("#"+id).offset().top
    }, 1000);
}



