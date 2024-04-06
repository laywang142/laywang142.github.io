

// Calculating the items required
function filltbl() {

    // Initial values needed based on radio buttons
    var form = document.getElementById("myForm");
    var selectedOption = document.querySelector('input[name="gridRadios"]:checked').value;

    var startVals = {}
    if (selectedOption === "option1") {
        startVals.boss = 0;
        startVals.matlow = 0;
        startVals.matmed = 0;
        startVals.mathigh = 0;
        startVals.regsp = 0;
        startVals.sliver = 0;
        startVals.fragment = 0;
        startVals.chunk = 0;
        startVals.gem = 0;
    } else if (selectedOption === "option2") {
        startVals.boss = 0;
        startVals.matlow = 3;
        startVals.matmed = 0;
        startVals.mathigh = 0;
        startVals.regsp = 3;
        startVals.sliver = 1;
        startVals.fragment = 0;
        startVals.chunk = 0;
        startVals.gem = 0;
    } else if (selectedOption === "option3") {
        startVals.boss = 2;
        startVals.matlow = 18;
        startVals.matmed = 0;
        startVals.mathigh = 0;
        startVals.regsp = 13;
        startVals.sliver = 1;
        startVals.fragment = 3;
        startVals.chunk = 0;
        startVals.gem = 0;
    } else if (selectedOption === "option4") {
        startVals.boss = 6;
        startVals.matlow = 18;
        startVals.matmed = 12;
        startVals.mathigh = 0;
        startVals.regsp = 33;
        startVals.sliver = 1;
        startVals.fragment = 9;
        startVals.chunk = 0;
        startVals.gem = 0;
    } else if (selectedOption === "option5") {
        startVals.boss = 14;
        startVals.matlow = 18;
        startVals.matmed = 30;
        startVals.mathigh = 0;
        startVals.regsp = 63;
        startVals.sliver = 1;
        startVals.fragment = 9;
        startVals.chunk = 3;
        startVals.gem = 0;
    } else if (selectedOption === "option6") {
        startVals.boss = 26;
        startVals.matlow = 18;
        startVals.matmed = 30;
        startVals.mathigh = 12;
        startVals.regsp = 108;
        startVals.sliver = 1;
        startVals.fragment = 9;
        startVals.chunk = 9;
        startVals.gem = 0;
    } else if (selectedOption === "option7") {
        startVals.boss = 46;
        startVals.matlow = 18;
        startVals.matmed = 30;
        startVals.mathigh = 36;
        startVals.regsp = 168;
        startVals.sliver = 1;
        startVals.fragment = 9;
        startVals.chunk = 9;
        startVals.gem = 6;
    }

    // Defning the starting values
    let bossinput = parseInt(document.getElementById('inputBoss').value);
    let matlow = parseInt(document.getElementById('inputLvlmat1').value);
    let matmed = parseInt(document.getElementById('inputLvlmat2').value);
    let mathigh = parseInt(document.getElementById('inputLvlmat3').value);
    let regsp = parseInt(document.getElementById('inputRegSpec').value);
    let sliver = parseInt(document.getElementById('inputSliver').value);
    let fragment = parseInt(document.getElementById('inputFragment').value);
    let chunk = parseInt(document.getElementById('inputChunk').value);
    let gem = parseInt(document.getElementById('inputGem').value);

    // Get remainders
    var rem = {}

    // boss materials
    if ( startVals.boss - bossinput < 0) {
        rem.boss = 0;
    } else {
        rem.boss = startVals.boss - bossinput;
    }

    // regional materials 
    if (startVals.regsp - regsp < 0) {
        rem.regsp = 0;
    } else {
        rem.regsp = startVals.regsp - regsp;
    }

    // common materials
    if (startVals.matlow - matlow < 0) {
        rem.matlow = 0 ;

        let extralow = matlow - startVals.matlow;
        // pass extra to matmed? 

        let newmatmed = Math.floor(extralow / 3) + matmed;

        // calculate rem.matmed

        if(startVals.matmed - newmatmed < 0 ) {
            rem.matmed = 0;

            let extramed = newmatmed - startVals.matmed;

            let newmathigh = Math.floor(extramed/3) + mathigh;

            if(startVals.mathigh - newmathigh < 0) {
                rem.mathigh = 0;
            } else {
                rem.mathigh = startVals.mathigh - newmathigh;
            }
        } else {
            rem.matmed = startVals.matmed - newmatmed;
            
            if(startVals.mathigh - mathigh < 0) {
                rem.mathigh = 0;
            } else {
                rem.mathigh = startVals.mathigh - mathigh;
            }

        }

    } else {
        rem.matlow = startVals.matlow - matlow;

        if(startVals.matmed - matmed < 0 ) {
            rem.matmed = 0;

            let extramed = matmed - startVals.matmed;

            let newmathigh = Math.floor(extramed/3) + mathigh;

            if(startVals.mathigh - newmathigh < 0) {
                rem.mathigh = 0;
            } else {
                rem.mathigh = startVals.mathigh - newmathigh;
            }
        } else {
            rem.matmed = startVals.matmed - matmed;
            
            if(startVals.mathigh - mathigh < 0) {
                rem.mathigh = 0;
            } else {
                rem.mathigh = startVals.mathigh - mathigh;
            }

    }
}
    
    document.getElementById('boss').textContent = rem.boss;
    document.getElementById('low').textContent = rem.matlow;
    document.getElementById('med').textContent = rem.matmed;
    document.getElementById('high').textContent = rem.mathigh;
    document.getElementById('reg').textContent = rem.regsp;

}




// Fill table with initial values
window.onload = filltbl;