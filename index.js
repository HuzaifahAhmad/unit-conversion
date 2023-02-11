
const userInput = document.getElementById("input-from-user")
const inputBtn = document.getElementById("convert-btn")

let lengthEl = document.getElementById("length-section")
const volumeEl = document.getElementById("volume-section")
const massEl = document.getElementById("mass-section")



inputBtn.addEventListener("click", function() {
    const convertedUserInput = parseInt(userInput.value)

    lengthMeterFeet(convertedUserInput)
    volumeGallonsLiters(convertedUserInput)
    massKilogramsPounds(convertedUserInput)
})




function lengthMeterFeet(length) {
    let tempEl = ""
    tempEl = `${length} meters = ${(length * 3.281).toFixed(3)} feet | ${length} feet = ${(length / 3.281).toFixed(3)} meters`
    lengthEl.innerHTML = tempEl
}

function volumeGallonsLiters(volume) {
    let tempEl = ""
    tempEl = `${volume} liters = ${(volume * 0.264).toFixed(3)} gallons | ${volume} gallons = ${(volume / 0.264).toFixed(3)} liters`
    volumeEl.innerHTML = tempEl
}

function massKilogramsPounds(mass) {
    let tempEl = ""
    tempEl = `${mass} kilos = ${(mass * 2.204).toFixed(3)} pounds | ${mass} pounds = ${(mass / 2.204).toFixed(3)} kilos`
    massEl.innerHTML = tempEl
}

function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}


function myFunction() {
    var nameInput = document.getElementById('input-from-user').value;
    console.log(nameInput);
    if (nameInput === "") {
        document.getElementById('convert-btn').disabled = true;
    } else {
        document.getElementById('convert-btn').disabled = false;
    }
}