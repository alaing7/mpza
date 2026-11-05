const Experiences = {
    inPath: "In-path", 
    microsite: "Chubb Studio Microsite"
};
const Products = {
    billProtect: "Bill Protect",
    homeContents: "Home Contents",
    mobilePhone: "Mobile Phone",
    remittancePA: "Remittance PA",
    smallBusiness: "Small Business"
};

const calcObj = {
    singapore: {
        microsite:{
            billProtect:{
                conversionRate: 0.004,
                nbMonthlyModeLapsedRate: 0.04,
                pyRenewalMonthlyModeLapsedRate: 0.02
            },
            homeContents:{
                conversionRate: 0.004,    
                nbMonthlyModeLapsedRate: 0.01,
                pyRenewalMonthlyModeLapsedRate: 0.01
            },
            mobilePhone:{
                conversionRate:0.004,
                nbMonthlyModeLapsedRate: 0.05,
                pyRenewalMonthlyModeLapsedRate: 0.05
            },
            remittancePA:{
                conversionRate: 0.004,
                nbMonthlyModeLapsedRate: 0.04,
                pyRenewalMonthlyModeLapsedRate: 0.02
            },
            smallBusiness:{
                conversionRate: 0.004,
                nbMonthlyModeLapsedRate: 0.02,
                pyRenewalMonthlyModeLapsedRate: 0.02
            }
        },
        inPath:{
            billProtect:{
                conversionRate: 0.15,
                nbMonthlyModeLapsedRate: 0.04,
                pyRenewalMonthlyModeLapsedRate: 0.02
            },
            homeContents:{
                conversionRate: 0.05,
                nbMonthlyModeLapsedRate: 0.01,
                pyRenewalMonthlyModeLapsedRate: 0.01
            },
            mobilePhone:{
                conversionRate: 0.02,
                nbMonthlyModeLapsedRate: 0.05,
                pyRenewalMonthlyModeLapsedRate: 0.05
            },
            remittancePA:{
                conversionRate: 0.2,
                nbMonthlyModeLapsedRate: 0.04,
                pyRenewalMonthlyModeLapsedRate: 0.02
            },
            smallBusiness:{
                conversionRate: 0.05,
                nbMonthlyModeLapsedRate: 0.02,
                pyRenewalMonthlyModeLapsedRate: 0.02
            }
        }
    }
};

function calculateValues(userInputs){
    const conversionRate = calcObj.singapore[userInputs.experience][userInputs.product].conversionRate;
    const monthlyPolicies = getMonthlyPolicies(userInputs, conversionRate);
    const monthlyTARP = monthlyPolicies*(userInputs.averageMonthlyPremium*12);
    const nbMonthlyModeLapsedRate = calcObj.singapore[userInputs.experience][userInputs.product].nbMonthlyModeLapsedRate;
    const year1GWP = getYear1GWP(monthlyTARP, nbMonthlyModeLapsedRate);
    const pyRenewalMonthlyModeLapsedRate = calcObj.singapore[userInputs.experience][userInputs.product].pyRenewalMonthlyModeLapsedRate;
    const year2GWP = getYear2GWP(monthlyTARP, pyRenewalMonthlyModeLapsedRate, nbMonthlyModeLapsedRate);
    const year3GWP = getYear3GWP(monthlyTARP, pyRenewalMonthlyModeLapsedRate, nbMonthlyModeLapsedRate);
    const total3YearGWPContribution = year1GWP + year2GWP + year3GWP;

    const resultValues = {
        aarp: userInputs.averageMonthlyPremium*12,
        conversionRate: conversionRate,
        monthlyPolicies: monthlyPolicies,
        annualisedPolicies: monthlyPolicies*12,
        policiesIssuedInCalenderYearOfLaunch:  monthlyPolicies*(12 - new Date().getMonth()),
        monthlyTARP: monthlyTARP,
        inYearGWP: Math.round(inYearGWP(monthlyTARP, nbMonthlyModeLapsedRate, year1GWP)),
        year1GWP: Math.round(year1GWP),
        year2GWP: Math.round(year2GWP),
        year3GWP: Math.round(year3GWP),
        total3YearGWPContribution: Math.round(total3YearGWPContribution),
        estimatedCommissionPaid3Years: Math.round(total3YearGWPContribution * userInputs.commissionRate)
    };

    return resultValues;
}

function getYear1GWP(monthlyTARP, nbMonthlyModeLapsedRate){
    const baseVal = monthlyTARP/12;
    const remUser = 1-nbMonthlyModeLapsedRate;
    let sum = baseVal;
    for(let i=2; i<=12; i++){
        sum = sum + baseVal*(Math.pow(remUser,i) - 1) / (remUser - 1);  //Sum of Geometric Progressions
    }
    return sum;
}

function inYearGWP(monthlyTARP, nbMonthlyModeLapsedRate, year1GWP){
    let baseVal = monthlyTARP/12;
    const remUser = 1-nbMonthlyModeLapsedRate;
    const currentMonth = new Date().getMonth();
    let result = 0;
    for(let i=1; i <= (currentMonth); i++){
        result = result + baseVal*(Math.pow(remUser,i)-1) / (remUser - 1);
    }
    return year1GWP - result;
}

function getYear2GWP(monthlyTARP, pyRenewalMonthlyModeLapsedRate, nbMonthlyModeLapsedRate){
    const baseVal = monthlyTARP/12;
    const remUser = 1-pyRenewalMonthlyModeLapsedRate;

    const a1 = baseVal;  //a1-a12 values at end of 1st year
    const a2 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),2-1));
    const a3 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),3-1));
    const a4 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),4-1));
    const a5 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),5-1));
    const a6 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),6-1));
    const a7 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),7-1));
    const a8 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),8-1));
    const a9 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),9-1));
    const a10 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),10-1));
    const a11 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),11-1));
    const a12 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),12-1));

    //b1-b13 values at start of 2nd year
    const [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13] = [a1, a1*remUser, a2*remUser, a3*remUser, a4*remUser, a5*remUser, a6*remUser, a7*remUser, a8*remUser, a9*remUser, a10*remUser, a11*remUser, a12*remUser];

    const s1 = b13*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s2 = b12*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s3 = b11*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s4 = b10*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s5 = b9*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s6 = b8*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s7 = b7*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s8 = b6*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s9 = b5*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s10 = b4*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s11 = b3*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s12 = b2*(Math.pow(remUser,12) - 1) / (remUser - 1);
    const s13 = b1*(Math.pow(remUser,12) - 1) / (remUser - 1);

    let sumOfRemainingMonths = baseVal;
    for(let i=2; i<12;i++){
        sumOfRemainingMonths = sumOfRemainingMonths + baseVal*(Math.pow(remUser,i) - 1) / (remUser - 1);
    }

    const sum = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+sumOfRemainingMonths;
    return sum;
}

function getYear3GWP(monthlyTARP, pyRenewalMonthlyModeLapsedRate, nbMonthlyModeLapsedRate){
    const baseVal = monthlyTARP/12;
    const remUser = 1-pyRenewalMonthlyModeLapsedRate;

    let a12 = baseVal;
    let a11 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),2-1)); //nth term of Geometric Progressions
    let a10 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),3-1));
    let a9 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),4-1));
    let a8 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),5-1));
    let a7 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),6-1));
    let a6 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),7-1));
    let a5 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),8-1));
    let a4 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),9-1));
    let a3 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),10-1));
    let a2 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),11-1));
    let a1 = baseVal*(Math.pow((1-nbMonthlyModeLapsedRate),12-1));

    let c12 = a12*Math.pow(remUser,14-1);
    let c11 = a11*Math.pow(remUser,14-1);
    let c10 = a10*Math.pow(remUser,14-1);
    let c9 = a9*Math.pow(remUser,14-1);
    let c8 = a8*Math.pow(remUser,14-1);
    let c7 = a7*Math.pow(remUser,14-1);
    let c6 = a6*Math.pow(remUser,14-1);
    let c5 = a5*Math.pow(remUser,14-1);
    let c4 = a4*Math.pow(remUser,14-1);
    let c3 = a3*Math.pow(remUser,14-1);
    let c2 = a2*Math.pow(remUser,14-1);
    let c1 = a1*Math.pow(remUser,14-1);

    let s1 = c12*(Math.pow(remUser,12) - 1) / (remUser - 1);
    let s2 = c11*(Math.pow(remUser,12) - 1) / (remUser - 1);
    let s3 = c10*(Math.pow(remUser,12) - 1) / (remUser - 1);
    let s4 = c9*(Math.pow(remUser,12) - 1) / (remUser - 1);
    let s5 = c8*(Math.pow(remUser,12) - 1) / (remUser - 1);
    let s6 = c7*(Math.pow(remUser,12) - 1) / (remUser - 1);
    let s7 = c6*(Math.pow(remUser,12) - 1) / (remUser - 1);
    let s8 = c5*(Math.pow(remUser,12) - 1) / (remUser - 1);
    let s9 = c4*(Math.pow(remUser,12) - 1) / (remUser - 1);
    let s10 = c3*(Math.pow(remUser,12) - 1) / (remUser - 1);
    let s11 = c2*(Math.pow(remUser,12) - 1) / (remUser - 1);
    let s12 = c1*(Math.pow(remUser,12) - 1) / (remUser - 1);

    let sumOfMonth13toMonth24 = 0;  //s13 to s24
    for(let i=2; i<=13;i++){
        sumOfMonth13toMonth24 = sumOfMonth13toMonth24 + (baseVal*(Math.pow(remUser, i-1)))*(Math.pow(remUser,12) - 1) / (remUser - 1);
    }

    let sumOfRemainingMonths = 0;  //s25 to s36
    for(let i=1; i<=12; i++){
        sumOfRemainingMonths = sumOfRemainingMonths + baseVal*(Math.pow(remUser,i) - 1) / (remUser - 1);
    }

    const sum = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+sumOfMonth13toMonth24+sumOfRemainingMonths;
    return sum;

}

let currentChart;
function loadChart(calculatedValues){
    const ctx = document.getElementById('myChart');
    Chart.defaults.font.family = "'Lato', 'sans-serif'";
    Chart.defaults.color = "#222222";
    Chart.defaults.elements.point.radius = 4;
    if(currentChart){
        currentChart.destroy();
    }
    currentChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['In-Year GWP', 'Year 1 GWP', 'Year 2 GWP', 'Year 3 GWP'],
        datasets: [{
        label: 'Gross Written Premium (GWP)',
        data: [calculatedValues.inYearGWP, 
            calculatedValues.year1GWP, 
            calculatedValues.year2GWP, 
            calculatedValues.year3GWP
        ],
        borderWidth: 3,
        borderColor: '#9056D2',
        pointRadius: 6
        }]
    },
    options: {
        backgroundColor: "#9056D2",
        scales: {
        y: {
            beginAtZero: true,
            ticks: {
                callback: function(value, index, ticks) {
                    return formatNumber(value);
                },
                count: 4
            }
        }
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true
                },
                position: "bottom",
                onClick: null
            },
            tooltip: {
                usePointStyle: true,
                callbacks: {
                    label: function(context) {
                        return $(window).width() < 576 ? "GWP: USD "+formatNumber(context.parsed.y): "GWP: USD "+ context.parsed.y.toLocaleString('en');
                    }
                }
            }
        },
        responsive: true,
        aspectRatio: $(window).width() < 576 ? 1: 2,
        elements: {
            line: {
                tension: 0.2
            },
            point: {
                radius: 6,
                hoverRadius: 6
            }
        }
    }
    });
}

//handles upto 30 digit numbers
function formatNumber(number) {
    const suffixes = ['', 'K', 'M', 'B', 'T', 'Q', 'S', 'O', 'N', 'D', 'UD', 'DD', 'TD', 'QD', 'SD', 'OD', 'ND', 'VD', 'UVD', 'DVD', 'TDV', 'QDV', 'SDV', 'ODV', 'NDV', 'VT', 'UVT', 'DVT', 'TVT', 'QVT', 'SVT', 'OVT']; // Updated suffixes
    // Calculate the number of digits
    const numDigits = Math.floor(Math.log10(Math.abs(number))) + 1;
    // Calculate the appropriate suffix index
    const suffixIndex = Math.max(0, Math.floor((numDigits - 1) / 3));
    // Calculate the divisor based on the suffix index
    const divisor = Math.pow(10, suffixIndex * 3);
    // Calculate the formatted number by dividing the input number
    // by the divisor and rounding it to 1 decimal place
    const formattedNumber = (number / divisor).toFixed(1);
    // Append the suffix to the formatted number
    const result = formattedNumber + suffixes[suffixIndex];
    return result;
}