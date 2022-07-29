<?php
namespace App\Helpers;

class validAPI {
    protected static $response = [
        "acc" => null,
        "token" => null
    ];

    public static function createAPI($acc = null, $token = null) {
        self::$response["acc"] = $acc;
        self::$response["token"] = $token;

        return response()->json(self::$response);
    }
}
?>