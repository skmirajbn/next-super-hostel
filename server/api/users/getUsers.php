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
        $sql = "SELECT * FROM users ORDER BY user_id DESC";
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



// Broyelar platte

// require_once('./../../database/config.php');
// require_once('./../tokenValidateApi.php');
// $_Headers = getallheaders();

// if (isset($_Headers['Token'])) {
//     $token = $_Headers['Token'];
//     if (isTokenValid($token)) {
//         // api code
//     } else {
//         echo "Invalid Token";
//     }
// } else {
//     echo "No Token";
// }


?>