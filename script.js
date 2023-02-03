const dropdownBtn = document.getElementById("btn");

const dropdownMenu = document.getElementById("dropdown");

const toggleArrow = document.getElementById("arrow");

const toggleDropdown = funtion () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", funtion (e) {
    e.stopPropagation();
    toggleDropdown();
});