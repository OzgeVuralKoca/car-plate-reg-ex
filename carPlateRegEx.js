function checkPlate() {
    let plateInput = document.getElementById("plateInput");
    const result = document.getElementById("result");
    const regEx = /^(0[1-9]|[1-7][0-9]|8[01])(([A-Z])(\d{4,5})|([A-Z]{2})(\d{3,4})|([A-Z]{3})(\d{2,3}))$/;
    if (regEx.test(plateInput.value)) {
        result.style.border = "2px solid #f8d404";
        result.innerHTML = "Toplam Borcunuz:";
    } else {
        result.style.color = "#d61515";
        result.style.fontSize = "1.2em";
        result.innerHTML = "Plakayı doğru formatta giriniz.";
    };
    plateInput.value = "";
}