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
        //    Code Here
        if (isset($_POST['branchName']) && isset($_POST['branchAddress']) && isset($_POST['id'])) {
            $branchName = $_POST['branchName'];
            $branchAddress = $_POST['branchAddress'];
            $id = $_POST['id'];

            if (isset($_FILES['image'])) {
                $photo = $_FILES['image']['name'];
                $photoTempName = $_FILES['image']['tmp_name'];
                $imageName = 'user_' . time() . '_' . rand(100000, 10000000) . '.' . pathinfo($photo, PATHINFO_EXTENSION);
                move_uploaded_file($photoTempName, './../../img/' . $imageName);

                $sql = "UPDATE branches SET branch_name ='$branchName', branch_address = '$branchAddress' , branch_image ='$imageName' WHERE branch_id = $id";
            } else {
                $sql = "UPDATE branches SET branch_name ='$branchName', branch_address = '$branchAddress'  WHERE branch_id = $id";
            }
            $query = $con->query($sql);
            if ($query) {
                echo "Branch Created Successfully";
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