<?php

$language = $_GET["language"];
$text = $_GET["text"];

 
$jsonurl = "https://www.googleapis.com/language/translate/v2?key=AIzaSyDrfb90K1a3s0RmzRieudCRV1b9_5gS6xM&q=".$text."&source=en&target=".$language;


$json = file_get_contents($jsonurl,0,null,null);

echo $json;

 
 ?>