<?php
namespace Auth;

require_once(__DIR__ . '/../vendor/autoload.php');
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Auth {
    private static $key = 'angularreactidbproject';
    private static $expiration_time = 3600;
    private static $jwt_encoding = 'HS256';

    public static function generateToken($user_id, $user_username, $user_email, $user_photo, $role_id) {
        $payload = array(
            "user_id" => $user_id,
            "user_username" => $user_username,
            "user_email" => $user_email,
            "user_photo" => $user_photo,
            "role_id" => $role_id,
            "exp" => time() + self::$expiration_time,
        );
        return JWT::encode($payload, self::$key, self::$jwt_encoding);
    }

    public static function validateToken($token) {
        try {
            $decoded = JWT::decode($token, new Key(self::$key, self::$jwt_encoding));
            return $decoded;
        } catch (Exception $e) {
            //Token Invalid Or expired
            return false;
        }
    }
}

?>