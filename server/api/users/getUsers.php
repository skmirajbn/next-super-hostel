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
        u.user_id,
        u.user_name,
        u.user_username,
        u.user_email,
        u.user_password,
        u.user_phone,
        u.user_nid,
        u.user_photo,
        r.role_name
      FROM users u
      LEFT JOIN roles r ON u.role_id = r.role_id ORDER BY user_id DESC";
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