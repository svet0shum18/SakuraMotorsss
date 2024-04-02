<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email_to = "svetoshum69@mail.ru"; // Адрес получателя
    $email_from = $_POST['email']; // Email отправителя
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email_from \r\n";
    $headers .= "Content-type: text/html \r\n";

    if (mail($email_to, $name, $phone, $headers)) {
        http_response_code(200);
        echo "Письмо успешно отправлено!";
    } else {
        http_response_code(500);
        echo "Ошибка при отправке письма.";
    }
}
?>
