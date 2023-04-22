function calculate() {
    let initialAlcohol = Number(document.getElementById("initialAlcohol").value);
    let intendedAlcohol = Number(document.getElementById("intendedAlcohol").value);
    let intendedVol = Number(document.getElementById("intendedVol").value);
   
    let spirit = (intendedVol * intendedAlcohol / 100) / (initialAlcohol / 100);
    let water = intendedVol - spirit;
      
    function roundToDec(num, dec) {
      return +(Math.round(num + "e" + dec)  + "e-" + dec);
    }

    if (initialAlcohol < intendedAlcohol) {  
        
        return (
        document.getElementById("spirit").innerHTML = "<i><span style='color: red;'>Error - Initial alcohol must be higher than intended alcohol percentage</span></i>", 
        document.getElementById("water").innerHTML = "<i><span style='color: red;'>Error - Initial alcohol must be higher than intended alcohol percentage</span></i>",
      
        document.getElementById("enjoyBanner").innerHTML = 'Please Try Again!!! <i class="fa-solid fa-triangle-exclamation"></i>'
      )
      
    } else if (initialAlcohol == 0 && intendedAlcohol == 0) {

        return (
        document.getElementById("spirit").innerHTML = "<i><span style='color: red;'>Error - Please provide a percentage(%)</span></i>", 
        document.getElementById("water").innerHTML = "<i><span style='color: red;'>Error - Please provide a percentage(%)</span></i>",
      
        document.getElementById("enjoyBanner").innerHTML = 'Please Try Again!!! <i class="fa-solid fa-triangle-exclamation"></i>'
        )
    } else {  
      
      return (
        document.getElementById("spirit").innerHTML = roundToDec(spirit, 2) + "ml", 
        document.getElementById("water").innerHTML = roundToDec(water, 2) + "ml",

        document.getElementById("enjoyBanner").innerHTML = 'ENJOY!!! <i class="fa-regular fa-face-laugh-wink"></i>'
      )
        
    }  
  }  
  