$(document).ready(function () {
    $(".nav-tabs a").click(function () {
      $(this).tab('show');
    });

    try{
        $('.customer-logos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        rtl: true,
        cssEase: 'linear',

        pauseOnHover: false,
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
        }]
        });
    } catch(e){}
  });

  window.addEventListener("load", () => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const scrollHandler = entries =>
      entries.forEach(entry => {
        const section = entry.target;
        const sectionId = section.id;
        const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (entry.intersectionRatio > 0) {
          section.classList.add("active");
          try{
            sectionLink.classList.add("active");
          } catch(e){}
        } else {
          section.classList.remove("active");
          try{
            sectionLink.classList.remove("active");
          } catch(e){}
        }
      });
    const observer = new IntersectionObserver(scrollHandler);
    sections.forEach(section => observer.observe(section));
  });

  function openConnects(evt, cityName) {
    //console.log("openConnects function called with cityName:", cityName);


    var i, tabcontentMain, tablinksMain;

    // Add the SVGs for active and inactive tabs here
    var activeAPI = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M12.1899 15.7802C14.1599 15.7802 15.7499 14.1902 15.7499 12.2202C15.7499 10.2502 14.1599 8.66016 12.1899 8.66016C10.2199 8.66016 8.62988 10.2502 8.62988 12.2202C8.62988 12.8802 8.80988 13.5002 9.11988 14.0302" stroke="black" stroke-width="1.4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.54 23.45L10.86 20.29C11.32 20.37 11.78 20.43 12.24 20.43C12.7 20.43 13.15 20.37 13.6 20.3L14.91 23.46L18.29 22.07L16.99 18.91C17.33 18.67 17.65 18.41 17.94 18.13C17.99 18.08 18.04 18.04 18.09 18C18.4 17.69 18.69 17.36 18.95 16.99L22.09 18.3L23.49 14.93L20.33 13.61C20.49 12.7 20.49 11.78 20.33 10.88L23.5 9.57L22.1 6.19L18.96 7.49C18.69 7.1 18.38 6.75 18.04 6.42C18.02 6.4 17.99 6.38 17.97 6.36C17.67 6.07 17.35 5.8 17 5.56L18.31 2.4L14.93 1L13.62 4.16C12.71 4 11.79 4 10.88 4.16L9.57 1L6.19 2.39L7.5 5.55C6.74 6.09 6.1 6.75 5.57 7.49L2.4 6.17L1 9.55L4.17 10.87C4.02 11.76 4 12.68 4.16 13.6L1 14.9L2.39 18.28L5.55 16.98C6.08 17.73 6.73 18.38 7.48 18.92L6.17 22.08L9.54 23.48V23.45Z" stroke="black" stroke-width="1.4" stroke-linejoin="round"/></svg>';
    var activeWhiteLabel = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M21.18 11.3V1H3.31V14.02L1 18.02H23.48L21.18 14.02H3.31" stroke="black" stroke-width="1.4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0799 3.62988C12.0799 3.62988 10.8899 5.21988 8.91992 5.19988C9.29992 10.1399 12.0799 11.1099 12.0799 11.1099C12.0799 11.1099 14.8499 10.1299 15.2399 5.19988C13.2799 5.21988 12.0799 3.62988 12.0799 3.62988Z" stroke="black" stroke-width="1.4" stroke-linejoin="round"/></svg>';
    var activeSDK = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M4.48047 9.24965L6.27047 11.1296L9.85047 7.63965" stroke="black" stroke-width="1.4" stroke-linejoin="round"/><path d="M0 23.53H13.6V1H0.72V20.81" stroke="black" stroke-width="1.4" stroke-linejoin="round"/><path d="M7.80992 21.0703H6.41992" stroke="black" stroke-width="1.4" stroke-linejoin="round"/><path d="M0.719727 18.3799H13.7697" stroke="black" stroke-width="1.4" stroke-linejoin="round"/></svg>';

    var inactiveSVGAPI = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M12.1899 15.7802C14.1599 15.7802 15.7499 14.1902 15.7499 12.2202C15.7499 10.2502 14.1599 8.66016 12.1899 8.66016C10.2199 8.66016 8.62988 10.2502 8.62988 12.2202C8.62988 12.8802 8.80988 13.5002 9.11988 14.0302" stroke="black" stroke-width="1.4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.54 23.45L10.86 20.29C11.32 20.37 11.78 20.43 12.24 20.43C12.7 20.43 13.15 20.37 13.6 20.3L14.91 23.46L18.29 22.07L16.99 18.91C17.33 18.67 17.65 18.41 17.94 18.13C17.99 18.08 18.04 18.04 18.09 18C18.4 17.69 18.69 17.36 18.95 16.99L22.09 18.3L23.49 14.93L20.33 13.61C20.49 12.7 20.49 11.78 20.33 10.88L23.5 9.57L22.1 6.19L18.96 7.49C18.69 7.1 18.38 6.75 18.04 6.42C18.02 6.4 17.99 6.38 17.97 6.36C17.67 6.07 17.35 5.8 17 5.56L18.31 2.4L14.93 1L13.62 4.16C12.71 4 11.79 4 10.88 4.16L9.57 1L6.19 2.39L7.5 5.55C6.74 6.09 6.1 6.75 5.57 7.49L2.4 6.17L1 9.55L4.17 10.87C4.02 11.76 4 12.68 4.16 13.6L1 14.9L2.39 18.28L5.55 16.98C6.08 17.73 6.73 18.38 7.48 18.92L6.17 22.08L9.54 23.48V23.45Z" stroke="black" stroke-width="1.4" stroke-linejoin="round"/></svg>';
    var inactiveSVGWhiteLabel = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M21.18 11.3V1H3.31V14.02L1 18.02H23.48L21.18 14.02H3.31" stroke="black" stroke-width="1.4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0799 3.62988C12.0799 3.62988 10.8899 5.21988 8.91992 5.19988C9.29992 10.1399 12.0799 11.1099 12.0799 11.1099C12.0799 11.1099 14.8499 10.1299 15.2399 5.19988C13.2799 5.21988 12.0799 3.62988 12.0799 3.62988Z" stroke="black" stroke-width="1.4" stroke-linejoin="round"/></svg>';
    var inactiveSVGSDK = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M4.48047 9.24965L6.27047 11.1296L9.85047 7.63965" stroke="black" stroke-width="1.4" stroke-linejoin="round"/><path d="M0 23.53H13.6V1H0.72V20.81" stroke="black" stroke-width="1.4" stroke-linejoin="round"/><path d="M7.80992 21.0703H6.41992" stroke="black" stroke-width="1.4" stroke-linejoin="round"/><path d="M0.719727 18.3799H13.7697" stroke="black" stroke-width="1.4" stroke-linejoin="round"/></svg>';



    tabcontentMain = document.getElementsByClassName("integration-tabcontent");
    for (i = 0; i < tabcontentMain.length; i++) {
      tabcontentMain[i].style.display = "none";
    }
    tablinksMain = document.getElementsByClassName("tablinksExp");
    for (i = 0; i < tablinksMain.length; i++) {
      tablinksMain[i].className = tablinksMain[i].className.replace(" active", "");
    }

    // Show the content for the current tab
    document.getElementById(cityName).style.display = "block";

    // Add the new block of code here
    var apiTab = document.getElementById("the-api-tab");
    var whiteLabelTab = document.getElementById("the-whitelabel-tab");
    var sdkTab = document.getElementById("the-SDK-tab");


    apiTab.style.display = "block";
    whiteLabelTab.style.display = "block";
    sdkTab.style.display = "block";


    if (cityName === "WhiteLabel") {
      apiTab.style.display = "none";
      sdkTab.style.display = "none";
    } else if (cityName === "Onboarding") {
      whiteLabelTab.style.display = "none";
      sdkTab.style.display = "none";
    } else if (cityName === "SDK") {
      apiTab.style.display = "none";
      whiteLabelTab.style.display = "none";
    }

    var apiSvgContainer = document.querySelector("#apic .inter-btn-svgs");
    var sdkSvgContainer = document.querySelector("#sd .inter-btn-svgs");
    var whiteLabelSvgContainer = document.querySelector("#whit .inter-btn-svgs");

    function setSVG(container, svgString) {
      const svgNode = new DOMParser().parseFromString(svgString, 'image/svg+xml').documentElement;
      container.replaceChildren(document.adoptNode(svgNode));
    }

    // Reset all SVGs to inactive
    setSVG(apiSvgContainer, inactiveSVGAPI);
    setSVG(sdkSvgContainer, inactiveSVGSDK);
    setSVG(whiteLabelSvgContainer, inactiveSVGWhiteLabel);

    // Update the SVG based on the active tab
    if (cityName === "WhiteLabel") {
      setSVG(whiteLabelSvgContainer, activeWhiteLabel);
    } else if (cityName === "Onboarding") {
      setSVG(apiSvgContainer, activeAPI);
    } else if (cityName === "SDK") {
      setSVG(sdkSvgContainer, activeSDK);
    }

    if (evt.currentTarget.className == "Int_button_api" || evt.currentTarget.className == "int-api-button") {

      document.getElementById("whit").classList.remove("apic");
      document.getElementById("sd").classList.remove("apic");
      document.getElementById("apic").classList.add("apic");

    } else if (evt.currentTarget.className == "Int_button_white" || evt.currentTarget.className == "int-white-button") {

      document.getElementById("apic").classList.remove("apic");
      document.getElementById("sd").classList.remove("apic");
      document.getElementById("whit").classList.add("apic");

    } else if (evt.currentTarget.className == "Int_button_sdk" || evt.currentTarget.className == "int-sdk-button") {

      document.getElementById("apic").classList.remove("apic");
      document.getElementById("whit").classList.remove("apic");
      document.getElementById("sd").classList.add("apic");

    } else {

      document.getElementById("apic").classList.remove("apic");
      document.getElementById("whit").classList.remove("apic");
      document.getElementById("sd").classList.remove("apic");
      evt.currentTarget.className += " active";
    }

    //console.log("End of openConnects function");
  }

  document.getElementById("apic").click();
  // Read the stored value from session storage
    let indexHtmlScrollActive = sessionStorage.getItem("indexHtmlScrollActive") === "true";
    let anchorClicked = false;

    // Listen for clicks on anchor tags and set a flag
    document.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            anchorClicked = true;
        }
    });


    setTimeout(function () {
        if (!indexHtmlScrollActive && !anchorClicked) {
            window.scrollTo(0, 0);
        }
        // Reset both flags
        indexHtmlScrollActive = false;
        anchorClicked = false;
        sessionStorage.setItem("indexHtmlScrollActive", indexHtmlScrollActive);
        //console.log(indexHtmlScrollActive);
    }, 50);

    // Add this function to your integration.html page
    window.addEventListener('DOMContentLoaded', (event) => {
      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');

      if (section) {
        const sectionMap = {
          'api': '#apic',
          'sdk': '#sd',
          'wlm': '#whit'
        };

        const elementToScrollTo = document.querySelector(sectionMap[section]);
        const cityNameMap = {
          '#apic': 'Onboarding',
          '#sd': 'SDK',
          '#whit': 'WhiteLabel'
        };

        const cityName = cityNameMap[sectionMap[section]];

        if (elementToScrollTo) {
          elementToScrollTo.scrollIntoView({behavior: "smooth"});

          // Deactivate all tabs and contents
          document.querySelectorAll('.tablinksExp').forEach(tab => tab.classList.remove('active'));
          document.querySelectorAll('.integration-tabcontent').forEach(content => content.style.display = 'none');

          // Activate the clicked tab
          elementToScrollTo.classList.add('active');

          // Show the content corresponding to the active tab
          const apiTab = document.getElementById("the-api-tab");
          const whiteLabelTab = document.getElementById("the-whitelabel-tab");
          const sdkTab = document.getElementById("the-SDK-tab");

          apiTab.style.display = "block";
          whiteLabelTab.style.display = "block";
          sdkTab.style.display = "block";

          if (cityName === "WhiteLabel") {
            apiTab.style.display = "none";
            sdkTab.style.display = "none";
          } else if (cityName === "Onboarding") {
            whiteLabelTab.style.display = "none";
            sdkTab.style.display = "none";
          } else if (cityName === "SDK") {
            apiTab.style.display = "none";
            whiteLabelTab.style.display = "none";
          }

          document.getElementById(cityName).style.display = 'block';
        }
      }
    });




  //console.log("Clicked apic element")


  function setActiveTab(tabId) {
    // Remove 'active' class from all tab buttons
    var tablinks = document.getElementsByClassName("tablinksExp");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }

    // Add 'active' class to the clicked tab button
    var clickedTab = document.getElementById(tabId);
    if (clickedTab) {
      clickedTab.classList.add("active");
    }
  }


  function openCitySide(evt, cityName) {
    //console.log("Function called with:", cityName);

    var i, tabcontentSide, tablinksSide;
    tabcontentSide = document.getElementsByClassName("tabcontent-doc-side");
    for (i = 0; i < tabcontentSide.length; i++) {
      tabcontentSide[i].style.display = "block";
    }
    tablinksSide = document.getElementsByClassName("tablinks-side");
    for (i = 0; i < tablinksSide.length; i++) {
      tablinksSide[i].className = tablinksSide[i].className.replace(" active", "");
    }

    if (document.getElementById(cityName)) {
      document.getElementById(cityName).style.display = "block";
    }

    evt.currentTarget.className += " active";

  }
  // Get the element with id="defaultOpen" and click on it
  try{
    document.getElementById("defaultOpenSide").click();
  } catch(e){}

  function openCity(evt, cityName) {
    switch (cityName) {

      case "Life":
        document.getElementById("msJourney").classList.add("bg_micro_tab_life");
        document.getElementById("msJourney").classList.remove("bg_micro_tab_travel");
        document.getElementById("msJourney").classList.remove("bg_micro_tab_home");
        break;
      case "Travel":
        document.getElementById("msJourney").classList.add("bg_micro_tab_travel");
        document.getElementById("msJourney").classList.remove("bg_micro_tab_life");
        document.getElementById("msJourney").classList.remove("bg_micro_tab_home");
        break;
      case "Home":
        document.getElementById("msJourney").classList.add("bg_micro_tab_home");
        document.getElementById("msJourney").classList.remove("bg_micro_tab_travel");
        document.getElementById("msJourney").classList.remove("bg_micro_tab_life");
        break;
    }

    var i, tabcontentMain, tablinksMain;
    tabcontentMain = document.getElementsByClassName("microsite-tabcontent");
    for (i = 0; i < tabcontentMain.length; i++) {
      tabcontentMain[i].style.display = "none";
    }
    tablinksMain = document.getElementsByClassName("tablinksInte");
    for (i = 0; i < tablinksMain.length; i++) {
      tablinksMain[i].className = tablinksMain[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("micrositeOpen").click();

  function openUseCase(evt, insPolicy) {
    var i, tabcontentSdk, tablinksSdk;
    tabcontentSdk = document.getElementsByClassName("sdk-tabcontent");
    for (i = 0; i < tabcontentSdk.length; i++) {
      tabcontentSdk[i].style.display = "none";
    }
    tablinksSdk = document.getElementsByClassName("tablinkSdk");
    for (i = 0; i < tablinksSdk.length; i++) {
      tablinksSdk[i].className = tablinksSdk[i].className.replace(" activeInner", "");
    }
    document.getElementById(insPolicy).style.display = "block";
    evt.currentTarget.className += " activeInner";
    //console.log("selected")
  }
  document.getElementById("UseCaseOpenInner").click();



  if (window.location.search.includes("section=sdk")) {
    let ecom = document.querySelector('.sdk-section-trigger');

    ecom.click();


  }
  if (window.location.search.includes("section=wlm")) {
    let wlm = document.querySelector('.wlm-section-trigger');

    wlm.click();

  }
  if (window.location.search.includes("section=api")) {
    let api = document.querySelector('.api-section-trigger');

    api.click();

  }
