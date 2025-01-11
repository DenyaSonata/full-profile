function dropdownFunc() {
    const dropdown = document.getElementById("dropdownID");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdownID");
    const button = document.querySelector(".dropbtn");

    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.style.display = "none";
    }
});