const passCodeElement = document.getElementById("pass-code");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function passGenerate() {
    let passCodes = '';
    for (i = 0; i < 8; i++) {
        let mm = String.fromCharCode(getRndInteger(48, 90));
        passCodes += mm
    }
    passCodeElement.innerHTML = passCodes;
};

function copyPass() {
    // passCodeElement.select();
    // passCodeElement.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(passCodeElement.innerHTML);

    // Alert the copied text
    alert("Copied the text: " + passCodeElement.innerHTML);
}


