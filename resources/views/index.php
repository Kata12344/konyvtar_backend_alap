<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content=<?php $token = csrf_token(); echo $token; ?>>
    <link rel="stylesheet" href="/../css/style.css">
    <script
  src="https://code.jquery.com/jquery-3.6.1.js"
  integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
  crossorigin="anonymous"></script>
    <script src="/../js/main.js" type="module"></script>
    <title>Szundi Kata</title>
</head>
<body>
  <nav>
    <ul>
      <li id="kosaram"><a href="#">Kosaram</a></li>
      <li id="pub"><a href="#">Publikus</a></li>
      <li id="admin"><a href="#">Admin</a></li>
    </ul>
  </nav>
    <main></main>
</body>
</html>