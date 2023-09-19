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
        //    Code Here
        if (isset($_POST['branchId']) && isset($_POST['roomId']) && isset($_POST['bedId']) && isset($_POST['packageId']) && isset($_POST['userId'])) {
            $branchId = $_POST['branchId'];
            $roomId = $_POST['roomId'];
            $bedId = $_POST['bedId'];
            $packageId = $_POST['packageId'];
            $userId = $_POST['userId'];
            $sql = "INSERT INTO bookings(branch_id, room_id, bed_id, package_id, user_id) VALUES ($branchId, $roomId, $bedId, $packageId, $userId)";

            $query = $con->query($sql);
            if ($query) {
                echo "Booking Created Successfully";
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