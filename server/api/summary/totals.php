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
        COUNT(DISTINCT users.user_id) AS total_users,
        COUNT(DISTINCT beds.bed_id) AS total_beds,
        COUNT(DISTINCT branches.branch_id) AS total_branches,
        COUNT(DISTINCT rooms.room_id) AS total_rooms
    FROM
        users,
        beds,
        branches,
        rooms;
    ";
        $result = $con->query($sql);

        $data = $result->fetch_assoc();
        $data = json_encode($data);
        echo $data;

    } else {
        echo "Invalid Token";
    }
} else {
    echo "No Token";
}

?>