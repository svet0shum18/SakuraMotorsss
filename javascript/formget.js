/*jQuery(document).ready(function() {

$(".phone").mask("+7 (999) 999-9999");

jQuery('.send-form').click(function(){
	var form = jQuery(this).closest('form');

	if ( form.valid() ) {
		var acUrl = form.attr('action');

		jQuery.ajax({
			url: acUrl,
			type: 'post',
			dataType: 'html',
			data: form.serialize(),
			success: function(data) {
				form.find('.status').html('Форма отправлена!');
			},
			error: function() {
				form.find('.status').html('Ошибка сервера!')
			}
		})
	}
})

});*/



document.getElementById('form-zayavka').addEventListener('click', function(event) {
	event.preventDefault();
	var formData = new FormData(document.getElementById('emailForm'));
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'sender.php', true);
	xhr.onload = function() {
			if (xhr.status === 200) {
					alert('Письмо успешно отправлено!');
			} else {
					alert('Ошибка при отправке письма.');
			}
	};
	xhr.send(formData);
});