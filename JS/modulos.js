let tooltipDark = document.getElementById('#darkMTooltip');

window.onmousemove = function(e) {
    let x = e.clientX;
    let y = e.clientY;
    tooltipDark.style.top = (y - 10) + 'px';
    tooltipDark.style.left = (x + 10) + 'px';
}