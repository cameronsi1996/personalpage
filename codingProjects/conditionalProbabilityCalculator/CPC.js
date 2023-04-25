/*function paramDropdown() {
    document.getElementById("param1").classList.toggle("show")
    return
}*/

function getV(x) {
    return(document.getElementById(x).value) 
}

function print(id, message) {
    return document.getElementById(id).innerHTML = message
}

function imgFeed(id, link) {
    return document.getElementById(id).src = link, document.getElementById(id).style = "visibility: visible;"
}

function calculate() {
    //variables setup
    let pA = getV("pA");
    let pB = getV("pB");

    console.log("pA " + pA);
    console.log("pB " + pB);

    let AgB = "";
    let BgA = "";
    conditionalPGiven = getV("conditionalPGiven");
    if (conditionalPGiven == "AgB") {
        AgB = getV("cPG");

    } else if (conditionalPGiven == "BgA") {
        BgA = getV("cPG");
    }
    console.log("AgB " + AgB);
    console.log("BgA " + BgA);
    
    let AnB = "";
    let ACnBC = "";
    let pAnd = getV("pAnd");
    if (pAnd == "AnB") {
        AnB = getV("and");
    } else if (pAnd == "ACnBC") {
        ACnBC = getV("and");
    };

    let AuB = "";
    let ACuBC = "";
    let pOr = getV("pOr");
    if (pOr == "AuB") {
        AuB = getV("or");
    } else if (pOr == "ACuBC") {
        ACuBC = getV("or");
    };

    console.log("AnB " + AnB);
    console.log("ACnBC " + ACnBC);
    console.log("AuB " + AuB);
    console.log("ACuBC " + ACuBC);

    //Calc
    function handlingNegativeP(id, ) {
        let message = "Found probability that is > 1 or < 0, i.e. very likely to be erroneous.";
        for (let i = 1; i < arguments.length; i++) {
            console.log(arguments[i]);
            if (arguments[i] < 0 || arguments[i] > 1) {
                return print(id, message);
            }
        } 
        return print(id, "")
    }

    
    if ((AgB != "" || BgA != "") && pA != "" && pB != "" && AnB == "" && ACnBC == "") {
        if (Number(pA).toFixed(4) == Number(AgB).toFixed(4)) {
            let resultAnB = Number(pA * pB).toFixed(4);
            let resultAnBC = (Number(pA) - Number(resultAnB)).toFixed(4);
            let resultACnB = (Number(pB) - Number(resultAnB)).toFixed(4);
            let resultACnBC = (1- Number(resultAnBC) - Number(resultAnB) - Number(resultACnB)).toFixed(4);
            let resultAuB = (Number(resultACnB) + Number(resultAnB) + Number(resultAnBC)).toFixed(4);
            return (
                print(
                    "results", 
                    "P(A) and P(B) are <b>independent variables!</b><br>\
                    P(A∩B) = P(A) * P(B) = " + resultAnB + "<br>\
                    P(A∩B') = P(A) - P(A∩B) = " +  resultAnBC + "<br>\
                    P(A'∩B) = P(B) - P(A∩B) = " + resultACnB + "<br>\
                    P(A'UB') = 1 - P(A∩B') - P(A∩B) - P(A'∩B) = " + resultACnBC + "<br>\
                    P(AUB) = P(A∩B) + P(A∩B') + P(A'∩B) = " + resultAuB
                ),
                handlingNegativeP("probabilityErrorMessage", resultAnB, resultAnBC, resultACnB, resultACnBC, resultAuB),  
                imgFeed("anb", "./figures/anb.png")
                )
            } else if (Number(pB).toFixed(4) == Number(BgA).toFixed(4)) {
                let resultAnB = Number(pA * pB).toFixed(4);
                let resultAnBC = (Number(pA) - Number(resultAnB)).toFixed(4);
                let resultACnB = (Number(pB) - Number(resultAnB)).toFixed(4);
                let resultACnBC = (1- Number(resultAnBC) - Number(resultAnB) - Number(resultACnB)).toFixed(4);
            let resultAuB = (Number(resultACnB) + Number(resultAnB) + Number(resultAnBC)).toFixed(4);
                return (
                    print(
                        "results", 
                        "P(A) and P(B) are <b>independent variables!</b><br>\
                        P(A∩B) = P(A) * P(B) = " + resultAnB + "<br>\
                        P(A∩B') = P(A) - P(A∩B) = " +  resultAnBC + "<br>\
                        P(A'∩B) = P(B) - P(A∩B) = " + resultACnB + "<br>\
                        P(A'UB') = 1 - P(A∩B') - P(A∩B) - P(A'∩B) = " + resultACnBC + "<br>\
                        P(AUB) = P(A∩B) + P(A∩B') + P(A'∩B) = " + resultAuB
                    ),
                    handlingNegativeP("probabilityErrorMessage", resultAnB, resultAnBC, resultACnB, resultACnBC, resultAuB),
                    imgFeed("anb", "./figures/anb.png")
                )
            } else if (AgB != "" && (Number(pA*pB).toFixed(4) != Number(AnB).toFixed(4))) {
                let resultAnB = Number(pB * AgB).toFixed(4);
                let resultAnBC = (Number(pA) - Number(resultAnB)).toFixed(4);
                let resultACnB = (Number(pB) - Number(resultAnB)).toFixed(4);
                let resultACnBC = (1- Number(resultAnBC) - Number(resultAnB) - Number(resultACnB)).toFixed(4);
            let resultAuB = (Number(resultACnB) + Number(resultAnB) + Number(resultAnBC)).toFixed(4);
                return (
                    print(
                        "results",
                        "P(A) and P(B) are <b>dependent variables!</b><br>P(A∩B) = P(A|B) * P(B) = " + resultAnB + "<br>\
                        P(A∩B') = P(A) - P(A∩B) = " +  resultAnBC + "<br>\
                        P(A'∩B) = P(B) - P(A∩B) = " + resultACnB + "<br>\
                        P(A'UB') = 1 - P(A∩B') - P(A∩B) - P(A'∩B) = " + resultACnBC + "<br>\
                        P(AUB) = P(A∩B) + P(A∩B') + P(A'∩B) = " + resultAuB
                    ),
                    handlingNegativeP("probabilityErrorMessage", resultAnB, resultAnBC, resultACnB, resultACnBC, resultAuB),
                    imgFeed("anb", "./figures/anb.png")
                )
            } else if (BgA != "" && (Number(pA*pB).toFixed(4) != Number(AnB).toFixed(4))) {
                let resultAnB = Number(pA * BgA).toFixed(4);
                let resultAnBC = (Number(pA) - Number(resultAnB)).toFixed(4);
                let resultACnB = (Number(pB) - Number(resultAnB)).toFixed(4);
                let resultACnBC = (1- Number(resultAnBC) - Number(resultAnB) - Number(resultACnB)).toFixed(4);
                let resultAuB = (Number(resultACnB) + Number(resultAnB) + Number(resultAnBC)).toFixed(4);
                return (
                    print(
                    "results", 
                    "P(A) and P(B) are <b>dependent variables!</b><br>P(A∩B) = P(B|A) * P(A) = " + resultAnB + "<br>\
                    P(A∩B') = P(A) - P(A∩B) = " +  resultAnBC + "<br>\
                    P(A'∩B) = P(B) - P(A∩B) = " + resultACnB + "<br>\
                    P(A'UB') = 1 - P(A∩B') - P(A∩B) - P(A'∩B) = " + resultACnBC + "<br>\
                    P(AUB) = P(A∩B) + P(A∩B') + P(A'∩B) = " + resultAuB
                    ),
                    handlingNegativeP("probabilityErrorMessage", resultAnB, resultAnBC, resultACnB, resultACnBC, resultAuB),
                    imgFeed("anb", "./figures/anb.png")
                )
            }
    }
    return 0
}




function alcoholPrice() {

    function roundToDec(num, dec) {
    return +(Math.round(num + "e" + dec)  + "e-" + dec);
    }

    let cost = Number(document.getElementById("cost").value);
    let alcoholPercentage = Number(document.getElementById("alcoholPercentage").value);
    let vol = Number(document.getElementById("vol").value);
    
    let volAlcohol = vol * (alcoholPercentage / 100);
    let costOfAlcohol = cost / volAlcohol;
    /*console.log(costOfAlcohol);*/
    let totalcostOfOther = cost * ((100 - alcoholPercentage) / 100);
    /*console.log(cost);
    console.log(alcoholPercentage);
    console.log(totalcostOfOther);*/
    
    if (alcoholPercentage > 100) {
    return (
        document.getElementById("costOfAlcohol").innerHTML = "<i>Alcohol percentage entered incorrectly, please re-enter correct value.</i>",
        document.getElementById("totalcostOfOther").innerHTML = "<i>Alcohol percentage entered incorrectly, please re-enter correct value.</i>",
        document.getElementById("enjoyBanner").innerHTML = 'Please Try Again!!! <i class="fa-solid fa-triangle-exclamation"></i>'
    )
    } else {
    return (
        document.getElementById("costOfAlcohol").innerHTML = "<b>$" + roundToDec(costOfAlcohol, 2) + "</b> per ml of alcohol.",
        document.getElementById("totalcostOfOther").innerHTML = "<b>$" + totalcostOfOther + "</b> out of $" + cost + " paid towards non-alcoholic content.",
        document.getElementById("enjoyBanner").innerHTML = 'ENJOY!!! <i class="fa-regular fa-face-laugh-wink"></i>'
    )
    }
}  

