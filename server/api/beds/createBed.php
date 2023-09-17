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
        require_once('./../../database/config.php');
        if (isset($_POST['roomId']) && isset($_POST['bedTypeId']) && isset($_POST['bedCode'])) {
            $roomId = $_POST['roomId'];
            $bedTypeId = $_POST['bedTypeId'];
            $bedCode = $_POST['bedCode'];
            $sql = "INSERT INTO beds(bed_code, room_id, bed_type_id) VALUES( '$bedCode', $roomId, $bedTypeId)";
            $query = $con->query($sql);
            if ($query) {
                echo "Bed Added Successfully";
            }
        } else {
            echo "Please input all the required field";
        }
    } else {
        echo "Invalid Token";
    }
} else {
    echo "No Token";
}

?>