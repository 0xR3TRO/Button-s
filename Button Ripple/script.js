let buttons = document.querySelectorAll(".button");

for (var i = 0; i < buttons.length; i++){
    e.preventDefault();

    let overlay = document.createElement('span');
    overlay.classList.add("overlay");

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    overlay.style.left = x + "px";
    overlay.style.top = x + "px";

    e.target.appendChild(overlay);

    setTimeout(()=>{
        overlay.remove();
    }, 500);
}