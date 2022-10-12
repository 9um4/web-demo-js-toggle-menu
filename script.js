function sideMenu() {
    let menu = document.querySelector(".menu");
    let side_menu = document.querySelector(".side-menu");
    // .menu 는 html 파일 내의 menu class를 의미함
    menu.classList.toggle("active");
    side_menu.classList.toggle("active");
}