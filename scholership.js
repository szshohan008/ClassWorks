function showResult() {
    if (sscGpa < 4.80 || hscGpa < 4.80) {
        Massage('Sorry, you are not Eligible due to SSC result/HSC result/ current SGPA', 'text-danger')
    } else {
        Massage('MashaAlalh, you are eligible for scholarshiop', 'text-success')
    }
}

function Massage(msg, color) {
    const result = ` <p class="${color}"> <b>${msg}</b></p>`;

    document.getElementById("result").innerHTML = result;
}

function checkSSC() {
    let sscGpa = document.getElementById("ssc").value;
    return sscGpa;
}

function checkHSC() {
    let hscGpa = document.getElementById("hsc").value;
    return hscGpa;
}

function checkScholarship() {

    sscGpa = checkSSC();
    hscGpa = checkHSC();

    showResult();

}