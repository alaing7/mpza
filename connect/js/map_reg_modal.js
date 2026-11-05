const ALLOWED_REGIONS_RE = /^(NA|EMEA|APAC|LATAM)$/;
const ALLOWED_FILTER_RE = /^product_(na|emea|apac|latam)$/i;

//default setting up local storage
if (document.getElementById("region_btn")) {
    const regMatch = ALLOWED_REGIONS_RE.exec(String(localStorage.getItem("reg") ?? ''));
    document.getElementById("region_btn").textContent = regMatch ? regMatch[0] : 'NA';
}

if (document.getElementById("region_txt")) {
    const regMatch2 = ALLOWED_REGIONS_RE.exec(String(localStorage.getItem("reg") ?? ''));
    document.getElementById("region_txt").textContent = regMatch2 ? regMatch2[0] : 'NA';
}

//Passing country code to get theuser region
const init = async () => {

    function getLocationFromUser() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    resolve(position.coords);
                }, reject);
            } else {
                reject('Geolocation is not supported by this browser.');
            }
        });
    }

    const userGeoLocation = await getLocationFromUser();
    const countriesUrl = `/connect/assets/countries.json`;

    const userLocationUrl = '/api/location';

    const fetchFromApi = async (url) => {
        return await fetch(url)
            .then(res => res.json())
    }

    const fetchCountry = async (url) => {
        let options = {
            method: 'POST',
            credentials: 'omit',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ locationPoints: [{ latitude: `${userGeoLocation.latitude}`, longitude: `${userGeoLocation.longitude}` }] })
        }
        return new Promise((resolve, reject) => {
            fetch(userLocationUrl, options)
                .then(res => {
                    return fetch(userLocationUrl, options)
                        .then(res => { resolve(res.json()) })
                        .catch(err => {
                            reject(err.message);
                        })
                })
        })
    }

    const countries = await fetchFromApi(countriesUrl);
    const userLocation = await fetchCountry(userLocationUrl);
    const userCountry = userLocation.results[0]?.country;

    const rawRegion = (countries?.find((country) => country.id == userCountry?.toLowerCase()))?.region;
    const regionMatch = ALLOWED_REGIONS_RE.exec(String(rawRegion ?? ''));
    const region = regionMatch ? regionMatch[0] : 'NA';


    const rawFilter = localStorage.getItem("click_region");
    const filterMatch = ALLOWED_FILTER_RE.exec(String(rawFilter ?? ''));
    const ref_filter = filterMatch ? filterMatch[0] : `product_${region.toLowerCase()}`;

    if (window.filterSelection) {
        filterSelection(ref_filter);
    }

    localStorage.setItem("reg", region);
    localStorage.setItem("default_region", region);



    // JavaScript to handle dropdown item click
    $('.dropdown-item').click(function () {

        // Get the selected option's text
        var selectedOption = $(this).data('value');

        // Update the displayed selected option
        $('#region_btn').text(selectedOption);
        // Add 'active' class to the clicked item

        $('.dropdown-item').removeClass('active');
        $(this).addClass('active');
    });

}



const _storedFilter = localStorage.getItem("click_region");
const _filterMatch = ALLOWED_FILTER_RE.exec(String(_storedFilter ?? ''));
OnliadfilterSelection(_filterMatch ? _filterMatch[0] : 'product_na');

function filterSelection(c) {
    const safeC = ALLOWED_FILTER_RE.test(c) ? c : 'product_na';
    localStorage.setItem("click_region", safeC);
    let sL = safeC.split('_');
    $("#region_btn").text(sL.length > 1 ? sL[1].toUpperCase() : '')
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    for (i = 0; i < x.length; i++) {
        filterRemoveClass(x[i], "show");
        if (x[i].className.indexOf(safeC) > -1) filterAddClass(x[i], "show");
    }
}

function OnliadfilterSelection(c) {
    const safeC = ALLOWED_FILTER_RE.test(c) ? c : 'product_na';
    let sL = safeC.split('_');
    try { $("#region_btn").text(sL.length > 1 ? sL[1].toUpperCase() : '') } catch (f) { } var x, i;
    x = document.getElementsByClassName("filterDiv");
    for (i = 0; i < x.length; i++) {
        filterRemoveClass(x[i], "show");
        if (x[i].className.indexOf(safeC) > -1) filterAddClass(x[i], "show");
    }
}


function filterAddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function filterRemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

