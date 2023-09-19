<?php
require_once('./../../database/config.php');
require_once('./../../authetication/JWTAuthentication.php');
use Auth\Auth;

$_Headers = getallheaders();

function isTokenValid($token) {
    try {
        if (Auth::validateToken($token)) {
            return true;
        } else {
            return false;
        }
    } catch (Exception $e) {
        return false;
    }
}

if (isset($_Headers['Token'])) {
    $token = $_Headers['Token'];
    if (isTokenValid($token)) {

        if (isset($_POST['branchId'])) {
            $branchId = $_POST['branchId'];
            $sql = "SELECT * FROM rooms WHERE branch_id = $branchId ORDER BY room_id DESC";
            $result = $con->query($sql);
            $dataArr = [];
            while ($data = $result->fetch_assoc()) {
                $dataArr[] = $data;
            }
            $dataArr = json_encode($dataArr);
            echo $dataArr;
        }

    } else {
        echo "Please input all the required field";
    }
} else {
    echo "No Token";
}

?>