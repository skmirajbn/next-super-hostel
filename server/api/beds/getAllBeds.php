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
        $sql = "SELECT branches.branch_name, rooms.* FROM branches INNER JOIN rooms ON branches.branch_id = rooms.branch_id ORDER BY room_id DESC";
        $result = $con->query($sql);
        $dataArr = [];
        while ($data = $result->fetch_assoc()) {
            $dataArr[] = $data;
        }
        $dataArr = json_encode($dataArr);
        echo $dataArr;

    } else {
        echo "Please input all the required field";
    }
} else {
    echo "No Token";
}

?>