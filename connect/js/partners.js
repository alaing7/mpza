function openCity(e, t) {
    var l, s, a;
    for (l = 0, s = document.getElementsByClassName("partner-tabcontent"); l < s.length; l++) s[l].style.display = "none";
    for (l = 0, a = document.getElementsByClassName("tablinksExp"); l < a.length; l++) a[l].className = a[l].className.replace(" active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
}

function openApac(e, t) {
    var l, s, a;
    for (l = 0, s = document.getElementsByClassName("partner-apac"); l < s.length; l++) s[l].style.display = "none";
    for (l = 0, a = document.getElementsByClassName("tablinkApac"); l < a.length; l++) a[l].className = a[l].className.replace(" active", "");
    try{
        document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
    }catch(e){}

}

function openLatam(e, t) {
    var l, s, a;
    for (l = 0, s = document.getElementsByClassName("partner-latam"); l < s.length; l++) s[l].style.display = "none";
    for (l = 0, a = document.getElementsByClassName("tablinkLatam"); l < a.length; l++) a[l].className = a[l].className.replace(" active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
}

function handleExperienceChange(event){
    if(event.target.value !== "microsite") {
        $("#clickThroughRate").hide();
    }
    else $("#clickThroughRate").show();

}

function handleComissionRateChange(event) {
    setTimeout(() => {$("#commissionRateSliderVal").val(event.target.value+"%")},0);
}

function handleClickThroughRateChange(event) {
    setTimeout(() => {$("#clickThroughRateVal").val(event.target.value+"%")},0);
}

let modalDataSentSuccessfully;
function setModalDataSentFlag(flag){
    modalDataSentSuccessfully = flag;
}

let calculatedValues;
function handleCalculate(event){

    event.preventDefault();
    if(!modalDataSentSuccessfully) $('#modalLaunchButton').click();

    const userInputs = {
        companyName: event.target[0].value,
        product: event.target[1].value,
        experience: event.target[2].value,
        volume: event.target[3].value,
        commissionRate: event.target[4].value/100,
        subscriptionMethod: event.target[6].value,
        averageMonthlyPremium: event.target[7].value,
        clickThroughRate: event.target[8].value/100
    };

    calculatedValues = calculateValues(userInputs);

    if(modalDataSentSuccessfully && calculatedValues.total3YearGWPContribution){
        showForecast(calculatedValues);
    }
}

function handleModalSubmit(event){
    event.preventDefault();
    makeAPi({name: $("#inputName").val(), email: $("#email").val()});
}

function getMonthlyPolicies(userInputs, conversionRate){
    return userInputs.experience === "microsite" ? userInputs.volume*userInputs.clickThroughRate*conversionRate : userInputs.volume*conversionRate;
}

function showForecast(calculatedValues){
    $(".forecast-container").parent().attr("class","col-md-4 p-0 card1");
    $(".parentContainer").hide();
    $("#forecasted-growth").attr("class", "col-sm p-o");
    loadChart(calculatedValues);
    const total3YearGWPContribution = String(calculatedValues.total3YearGWPContribution).length > 9
        ? formatNumber(calculatedValues.total3YearGWPContribution) 
        : Number(calculatedValues.total3YearGWPContribution).toLocaleString('en');
    const estimatedCommissionPaid3Years = String(calculatedValues.estimatedCommissionPaid3Years).length > 9
        ? formatNumber(calculatedValues.estimatedCommissionPaid3Years) 
        : Number(calculatedValues.estimatedCommissionPaid3Years).toLocaleString('en');
    $("#year-GWP h2").text(`USD ${total3YearGWPContribution}`);
    $("#commission-paid h2").text(`USD ${estimatedCommissionPaid3Years}`);
    $("#calculate-button").text("Re-calculate");
}

$(document).ready(function() {
    $(".nav-tabs a").click(function() {
        $(this).tab("show")
    });
    try {
        $("#media").carousel({
            pause: !0,
            interval: !1
        })
    } catch (e) {
        $("#media").carousel({
            pause: !0,
            interval: !1
        })
    }

    function t(e) {
        l.forEach(function(e) {
            e.classList.remove("cat-act")
        }), e.classList.add("cat-act")
    }


    $(".customer-logos").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 1500,
        arrows: !0,
        dots: !1,
        pauseOnHover: !1,
        infinite: !1,
        prevArrow: $(".prev-partner"),
        nextArrow: $(".next-partner"),
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }],

    });

    $(".tabFilter").click(function(e) {
        $(".slick-track").css("transform","translate3d(0px, 0px, 0px)")
    });

    var l = document.querySelectorAll(".tabFilter .tablinkApac");
    l.length > 0 && t(l[0]), l.forEach(function(e) {
        e.addEventListener("click", function() {
            var l = this.getAttribute("data-filter");
            $(".customer-logos .slick-slide").addClass("filtered-out"), $(".customer-logos-mobile img").addClass("filtered-out");

            try {
              $(".customer-logos").slick("slickGoTo", 0)
            } catch (s) {}

            if ("all" !== l) {
                $(".customer-logos [data-category]").each(function() {
                    $(this).data("category").split(" ").includes(l) && $(this).closest(".slick-slide").removeClass("filtered-out")
                }), $(".customer-logos-mobile [data-category]").each(function() {
                    $(this).data("category").split(" ").includes(l) && $(this).closest("img").removeClass("filtered-out")
                });
                let a = document.querySelector(".customer-logos .slick-slide:not(.filtered-out)");
                if (a && a.click(), 992 > $(window).width()) {
                    let o = document.querySelector(".customer-logos-mobile img:not(.filtered-out)");
                    o ? $(o).trigger("click") : $(".added-content").empty()
                }
                $(".customer-logos .slick-slide:not(.filtered-out)")[0] ? $(".partner-apac").removeClass("d-none") : $(".partner-apac").addClass("d-none")
            } else $(".partner-apac").removeClass("d-none"), $(".customer-logos .slick-slide").removeClass("filtered-out"), $(".customer-logos .slick-slide").removeClass("active"), $(".customer-logos .slick-slide").eq(0).addClass("active"), $(".customer-logos-mobile img").removeClass("filtered-out"), $(".customer-logos-mobile img").removeClass("active"), $(".customer-logos-mobile img").eq(0).addClass("active");
            $(".customer-logos .slick-slide:not(.slick-cloned)").not(".filtered-out").length < 4 ? $(".prev-partner, .next-partner").addClass("d-none") : $(".prev-partner, .next-partner").removeClass("d-none"), t(e)
        })
    });
    let s = null,
        a = null;
    if ($(".mobile .tablinkApac").on("click", function() {
            if (this === a) {
                if (s) s.remove(), s = null;
                else {
                    let e = $(this).attr("data-content"),
                        t = e ? $(document.getElementById(e)) : $();
                    if (t.length) { const w = document.createElement('div'); w.className = 'added-content'; w.appendChild(t.clone()[0]); s = $(w); $(this).after(s); }
                }
                return
            }
            s && s.remove();
            let l = $(this).attr("data-content"),
                o = l ? $(document.getElementById(l)) : $();
            if (o.length) { const w = document.createElement('div'); w.className = 'added-content'; w.appendChild(o.clone()[0]); s = $(w); $(this).after(s); } a = this
        }), 992 > $(window).width()) {
        let o = document.querySelector(".customer-logos-mobile img");
        o && $(o).trigger("click")
    }

    Object.keys(Products).forEach(key =>
        $('<option>', { value: key, text: Products[key] }).appendTo('#inputProduct')
    );

    Object.keys(Experiences).forEach(key =>
        $('<option>', { value: key, text: Experiences[key] }).appendTo('#inputExperience')
    );

    $("#commissionRateSliderVal").val($("#commissionRate").val()+"%");
    $("#clickThroughRateVal").val($("#clickThroughRateSlider").val()+"%");

    $('#forecastModal').on('hide.bs.modal', function (event) {
        if(calculatedValues && calculatedValues.total3YearGWPContribution && modalDataSentSuccessfully){
            showForecast(calculatedValues);
        }
    })

}), document.getElementById("defaultOpen").click(), document.getElementById("apacOpen").click(), document.getElementById("latamOpen") && document.getElementById("latamOpen").click();
