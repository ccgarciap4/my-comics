<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');

$_POST = json_decode(file_get_contents("php://input"), true);
$numero = $_POST['numberComic'];
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://xkcd.com/'.$numero.'/info.0.json',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);
curl_close($curl);
flush();
echo ($response);
