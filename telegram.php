<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>telegram</title>
</head>
<body>
	<?php

	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$token = "964431459:AAGFmAq2Nh1ql3FB-Btt82D9WBTxWmIIAcA";
	$chat_id = "-357678444";
	// echo "name: " . $name . "<br>" . "phone: " . $phone;
	$arr = array(
		'имя пользователья: ' => $name,
		'телефон: ' => $phone
	);
	foreach ($arr as $key => $value) {
		$txt .= "<b>" . $key . "</b>" .$value. "%0A";
	}
	$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
	if ($sendToTelegram) {
	  echo "Thank you";
	} else {
	  echo "Error";
	}
	 ?>
</body>
</html>