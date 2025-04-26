const nTotal = document.getElementById("nTotal").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
    document.getElementById("numero").textContent =  document.getElementById("nTotal").value;
};
});

document.addEventListener("keydown", function(event) {
    let e = document.getElementById("numero").textContent;
    let total = document.getElementById("total").textContent = parseInt(document.getElementById("1").textContent) + parseInt(document.getElementById("2").textContent) + parseInt(document.getElementById("3").textContent) + parseInt(document.getElementById("4").textContent) + parseInt(document.getElementById("5").textContent);
    if (total >= e) {
        alert("contagem finalizada");
        return;
    }
    switch (event.key) {
        case "f":
            document.getElementById("1").textContent = parseInt(document.getElementById("1").textContent) + 1;
            break;
        case "g":
            document.getElementById("2").textContent = parseInt(document.getElementById("2").textContent) + 1;
            break;
        case "h":
            document.getElementById("3").textContent = parseInt(document.getElementById("3").textContent) + 1;
            break;

        case "j":
            document.getElementById("4").textContent = parseInt(document.getElementById("4").textContent) + 1;
            break;

        case "k":
            document.getElementById("5").textContent = parseInt(document.getElementById("5").textContent) + 1;
            break;

        default:
            break;
    }
});