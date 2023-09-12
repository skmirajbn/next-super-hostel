<?php
require_once('./../../database/config.php');
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['phone']) && isset($_POST['nid']) && isset($_POST['role'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
    $nid = $_POST['nid'];
    $role = $_POST['role'];




    if (isset($_FILES['image'])) {
        $photo = $_FILES['image']['name'];
        $photoTempName = $_FILES['image']['tmp_name'];
        $imageName = 'user_' . time() . '_' . rand(100000, 10000000) . '.' . pathinfo($photo, PATHINFO_EXTENSION);
        move_uploaded_file($photoTempName, './../../img/' . $imageName);

        $sql = "INSERT INTO users(user_name, user_email, user_username, user_password, user_phone, user_nid, user_photo, role_id) VALUES('$name', '$email', '$username', '$password', '$phone', '$nid', '$imageName', $role)";
    } else {
        $sql = "INSERT INTO users(user_name, user_email, user_username, user_password, user_phone, user_nid, role_id) VALUES('$name', '$email', '$username', '$password', '$phone', '$nid', $role)";
    }



    $query = $con->query($sql);
    if ($query) {
        echo "User Created Successfully";
    }
} else {
    echo "Please input all the required field";
}


?>