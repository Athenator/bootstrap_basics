var myButton = document.getElementById("scroll_top");

// Показываем кнопку, когда пользователь прокручивает страницу вниз
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// Прокручиваем страницу вверх при нажатии на кнопку
myButton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});