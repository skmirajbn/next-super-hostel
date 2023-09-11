<?php
// Importing DB Config File
require_once('./../database/config.php');
require_once('./../authetication/JWTAuthentication.php');
use Auth\Auth;

if (isset($_POST['username'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE user_username = ?";
    $smtp = $con->prepare($query);
    $smtp->bind_param('s', $username);
    $smtp->execute();

    // Get the result
    $result = $smtp->get_result();
    //Fetch the user data
    $user = $result->fetch_assoc();
    // $dbHashedPass = password_hash($user['user_password'], PASSWORD_DEFAULT);
    if ($user && $password == $user['user_password']) {
        $user_id = $user['user_id'];
        $user_name = $user['user_name'];
        $user_username = $user['user_username'];
        $user_email = $user['user_email'];
        $user_photo = $user['user_photo'];
        $role_id = $user['role_id'];
        $token = Auth::generateToken($user_id, $user_username, $user_email, $user_photo, $role_id);

        $userData = array(
            'login' => 'Success',
            'token' => $token,
            'role_id' => $role_id,
            'user_id' => $user_id,
            'user_photo' => $user_photo,
            'user_name' => $user_name,
        );
        $userData = json_encode($userData);
        echo $userData;

    } else {
        $data = array("login" => "Failed");
        $data = json_encode($data);
        echo $data;
    }
} else {
    $data = array("login" => "Post Failed");
    $data = json_encode($data);
    echo $data;
}




?>