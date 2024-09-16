// Получаем элементы
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementsByClassName("close")[0];

// Открытие модального окна при клике на кнопку
openModalBtn.onclick = function() {
    modal.style.display = "flex";  // Используем flex для центрирования
    document.body.classList.add("no-scroll");  // Отключаем прокрутку
}

// Закрытие модального окна при клике на "X"
closeModalBtn.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");  // Включаем прокрутку
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");  // Включаем прокрутку
    }
}
