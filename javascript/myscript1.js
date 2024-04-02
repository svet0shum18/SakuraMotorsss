

// ПОДПИСАТЬСЯ НА ПАБЛИК
function OpenPublcik() {
	window.open('https://vk.com/sokoshisutairu', '_blank');
}


// СКВОЗНОЕ МЕНЮ
const headerEl = document.getElementById("header")

window.addEventListener("scroll", function(){
	const scrollPos = this.window.scrollY

	if (scrollPos > 100) {
		headerEl.classList.add("header_mini")
	}
	else {
		headerEl.classList.remove("header_mini")
	}
})



// ЛОГОТИП КЛИКАБ
function ClickLogo() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}


// КНОПКА ПОЕХАЛИ

	document.addEventListener('DOMContentLoaded', function() {
    var scrollButton = document.getElementById('go-btn');

    scrollButton.addEventListener('click', function() {
        // Пролистываем до заголовка на странице
        var headerElement = document.getElementById('onas');
        headerElement.scrollIntoView({ behavior: 'smooth' });
    });
});



// СТРАНИЦА 404
document.addEventListener("DOMContentLoaded", function() {
	var link = document.getElementById("navissilki");

	link.addEventListener("click", function(event) {
			event.preventDefault(); // Отменяем стандартное действие перехода по ссылке

			var url = this.href; // Получаем URL из атрибута href ссылки

			// Выполняем AJAX-запрос
			var xhr = new XMLHttpRequest();
			xhr.open("GET", url);
			xhr.onload = function() {
					if (xhr.status === 404) {
							window.location.href = "404.html"; // Перенаправляем на страницу 404, если статус 404
					} else {
							// Если другой статус, перенаправляем на страницу по URL ссылки
							window.location.href = url;
					}
			};
			xhr.send();
	});
});




