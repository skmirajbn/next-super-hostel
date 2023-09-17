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
        if (isset($_POST['branchName']) && isset($_POST['branchAddress'])) {
            $branchName = $_POST['branchName'];
            $branchAddress = $_POST['branchAddress'];

            if (isset($_FILES['image'])) {
                $photo = $_FILES['image']['name'];
                $photoTempName = $_FILES['image']['tmp_name'];
                $imageName = 'user_' . time() . '_' . rand(100000, 10000000) . '.' . pathinfo($photo, PATHINFO_EXTENSION);
                move_uploaded_file($photoTempName, './../../img/' . $imageName);

                $sql = "INSERT INTO branches(branch_name, branch_address, branch_image) VALUES('$branchName', '$branchAddress', '$imageName')";
            } else {
                $sql = "INSERT INTO branches(branch_name, branch_address) VALUES('$branchName', '$branchAddress')";
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