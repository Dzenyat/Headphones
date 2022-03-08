
function anim(index) {
    console.log("click");
    let red = [document.getElementById('c1'), document.getElementById('c2'), document.getElementById('c3'), document.getElementById('c4'), document.getElementById('c5'), document.getElementById('c6')];
    for (let i = 0; i < red.length; i++) {
        if (red[i].classList.contains('grow')) {
            red[i].classList.remove('grow');
        }
        red[index].classList.add('grow');
    }




}
/*document.addEventListener("click", function (e) {
    console.log(e.target);
});*/