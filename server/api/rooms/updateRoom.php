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
        if (isset($_POST['roomCode']) && isset($_POST['branchId']) && isset($_POST['id'])) {
            $id = isset($_POST['id']);
            $branchId = $_POST['branchId'];
            $roomCode = $_POST['roomCode'];
            $sql = "UPDATE rooms SET room_code ='$roomCode', branch_id= $branchId WHERE room_id = $id";
            $query = $con->query($sql);
            if ($query) {
                echo "Room Updated Successfully";
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