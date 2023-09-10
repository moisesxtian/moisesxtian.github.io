<?php

$name= $_POST['name'];
$adress= $_POST['adress'];
$subject= $_POST['subject'];
$message= $_POST['message'];
$mailheader="From: "$name."<".$email.">\r\n";
$recipient = "christiansmoises023@gmail.com";
mail($recipient,$subject,$message,$mailheader)
or die("Error!");
echo"Message Send";
?>