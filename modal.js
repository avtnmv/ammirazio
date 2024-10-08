const modal = document.getElementById("myModal");
const openModalBtns = document.querySelectorAll('[id^="openModal"]');
const closeModalBtn = document.getElementsByClassName("close")[0];

openModalBtns.forEach(btn => {
    btn.onclick = function() {
        modal.style.display = "flex"; 
        document.body.classList.add("no-scroll");  
    }
});

closeModalBtn.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll"); 
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll"); 
    }
}