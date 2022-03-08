function anim(id) {
    let a = [document.getElementById('a1'), document.getElementById('a2'), document.getElementById('a3'),document.getElementById('a4'),document.getElementById('a5'),document.getElementById('a6')];
    for (let i = 0; i < a.length; i++) {
       if (a[i].classList.contains("grow")) {
          a[i].classList.remove("grow");
       }
    }
    a[id].classList.add("grow");

}
document.addEventListener("click", function (e) {
   console.log(e.target);
});

   
    
