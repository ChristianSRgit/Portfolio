

let bannerDashboard = document.getElementById('bannerDashboard');
let navDir = document.getElementById('navDir');
let DLMode = document.getElementById('DLMode')

bannerDashboard.addEventListener('click',showDropdown)


function showDropdown(){
    navDir.classList.toggle("hide");
    DLMode.classList.toggle("hide");
    bannerDashboard.classList.toggle('fixBorder');

}
