<?php
namespace App\Helpers;

class validData {
    protected static $response = [
        "msg"   => null,
        "data" => null
    ];

    public static function createAPI($msg = null, $data = null) {
        self::$response["msg"] = $msg;
        self::$response["data"] = $data;

        return response()->json(self::$response);
    }
}
?>