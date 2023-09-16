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
        if (isset($_POST['id'])) {
            $id = $_POST['id'];
            $sql = "DELETE FROM rooms WHERE room_id = $id";
            $query = $con->query($sql);
            if ($query) {
                echo "room Deleted";
            }
        } else {
            echo "No Delete ID";
        }
    } else {
        echo "Invalid Token";
    }
} else {
    echo "No Token";
}



?>