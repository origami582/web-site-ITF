const amy_number = document.getElementById("number")

function add(){
    amy_number.value = Number(amy_number.value) + 1
}
function printMessage() {
    const text = "Test"
    document.getElementById("message").value = text;
}