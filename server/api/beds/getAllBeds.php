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
        $sql = "SELECT
        b.bed_id AS bed_id,
        r.room_id AS room_id,
        r.room_code AS room_code,
        bt.bed_type_id AS bed_type_id,
        bt.bed_type_description AS bed_type_description,
        bt.bed_type_button AS bed_type_button,
        bt.bed_type_image AS bed_type_image,
        bt.bed_type_name AS bed_type_name,
        b.bed_code AS bed_code,
        br.branch_name AS branch_name,
        br.branch_address AS branch_address
    FROM
        beds AS b
    JOIN
        rooms AS r ON b.room_id = r.room_id
    JOIN
        beds_type AS bt ON b.bed_type_id = bt.bed_type_id
    JOIN
        branches AS br ON r.branch_id = br.branch_id
    ORDER BY room_id DESC;
    ";
        $result = $con->query($sql);
        $dataArr = [];
        while ($data = $result->fetch_assoc()) {
            $dataArr[] = $data;
        }
        $dataArr = json_encode($dataArr);
        echo $dataArr;

    } else {
        echo "Invalid token";
    }
} else {
    echo "No Token";
}

?>