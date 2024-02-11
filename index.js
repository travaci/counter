let c = 0;
function count() {
    c += 1;
    document.getElementById("counter").innerText = c;
}

function save() {
    document.getElementById("saved").textContent += c + " - "
    c = 0;
    document.getElementById("counter").innerText = c;
}