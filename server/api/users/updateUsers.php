<?php
require_once('./../../database/config.php');
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['phone']) && isset($_POST['nid']) && isset($_POST['role']) && isset($_POST['id'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
    $nid = $_POST['nid'];
    $role = $_POST['role'];
    $id = $_POST['id'];




    if (isset($_FILES['image'])) {
        $photo = $_FILES['image']['name'];
        $photoTempName = $_FILES['image']['tmp_name'];
        $imageName = 'user_' . time() . '_' . rand(100000, 10000000) . '.' . pathinfo($photo, PATHINFO_EXTENSION);
        move_uploaded_file($photoTempName, './../../img/' . $imageName);

        $sql = "UPDATE users SET user_name='$name', user_email='$email', user_username='$username', user_password='$password', user_phone='$phone', user_nid='$nid', role_id='$role', user_photo='$imageName' WHERE user_id = $id";
    } else {
        $sql = "UPDATE users SET user_name='$name', user_email='$email', user_username='$username', user_password='$password', user_phone='$phone', user_nid='$nid', role_id='$role' WHERE user_id = $id";
    }



    $query = $con->query($sql);
    if ($query) {
        echo "User Updated Successfully";
    }
} else {
    echo "Please input all the required field";
}


?>