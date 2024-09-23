const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
    modal.style.display = "flex"; 
    document.body.classList.add("no-scroll");  
}

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
