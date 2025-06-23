let err = document.getElementById("error");
let input = document.getElementById("mail");
let submit = document.getElementById("submit");
let success = document.getElementById("success");
let dismiss = document.getElementById("dis");
let contain = document.getElementById("container");
let winWidth = window.matchMedia("(max-width: 600,px)");
submit.addEventListener("click", function error() {
    if (input.value === "") {
        err.style.display = "block";
        input.style.borderColor = "red";
        input.style.backgroundColor = "#f8d7da";
       input.classList.add("errs");
    }else{
        err.style.display = "none";
        input.style.borderColor = "green";
        input.style.backgroundColor = "#d4edda";
        input.classList.remove("errs");
        success.style.display = "block";
        contain.style.display = "none";
        event.preventDefault();
    }
});
dismiss.addEventListener("click", function hide(e) {
    if (e.machtes) {
        contain.style.display = "grid";
        success.style.display = "none";
    }else{
        contain.style.display = "grid";
        success.style.display = "none";
    }});
   
   