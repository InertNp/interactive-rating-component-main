const con1 = document.getElementById('container1')
const con2 = document.getElementById('container2')


// ratingTxt = text on thankyou page
//
const ratingTxt = document.getElementById("ratingTxt")
const rating = 0;
con2.style.display = "none";
function handleValue(e) {
    ratingTxt.innerHTML = `You selected ${e} out of 5`;
}
function handleSubmit() {
    con1.style.display = "none"
    con2.style.display = "flex"
}

