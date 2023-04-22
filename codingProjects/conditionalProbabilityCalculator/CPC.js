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
