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
        $sql = "SELECT
            bookings.booking_id,
            bookings.status,
            rooms.room_code,
            beds.bed_code,
            packages.package_name,
            services.service_name,
            branches.branch_name,
            branches.branch_id,
            beds_type.bed_type_name AS bed_type_name
          FROM bookings
          LEFT JOIN beds ON bookings.bed_id = beds.bed_id
          LEFT JOIN rooms ON beds.room_id = rooms.room_id
          LEFT JOIN packages ON bookings.package_id = packages.package_id
          LEFT JOIN services ON bookings.service_id = services.service_id
          LEFT JOIN branches ON rooms.branch_id = branches.branch_id
          LEFT JOIN beds_type ON beds.bed_type_id = beds_type.bed_type_id";
        $result = $con->query($sql);
        $dataArr = [];
        while ($data = $result->fetch_assoc()) {
            $dataArr[] = $data;
        }
        $dataArr = json_encode($dataArr);
        echo $dataArr;
    } else {
        echo "Invalid Token";
    }
} else {
    echo "No Token";
}




?>