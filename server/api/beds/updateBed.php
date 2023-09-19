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
        if (isset($_POST['roomId']) && isset($_POST['bedTypeId']) && isset($_POST['bedCode']) && isset($_POST['id']) && isset($_POST['isBedBooked'])) {
            $roomId = $_POST['roomId'];
            $bedTypeId = $_POST['bedTypeId'];
            $bedCode = $_POST['bedCode'];
            $id = $_POST['id'];
            $isBedBooked = $_POST['isBedBooked'];
            $sql = "UPDATE beds SET bed_code ='$bedCode' , room_id = $roomId, bed_type_id =  $bedTypeId, is_bed_booked = $isBedBooked WHERE bed_id = $id";
            $query = $con->query($sql);
            if ($query) {
                echo "Bed Updated Successfully";
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