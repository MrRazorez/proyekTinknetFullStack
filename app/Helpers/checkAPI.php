<?php
namespace App\Helpers;

class checkAPI {
    protected static $response = [
        "msg" => null
    ];

    public static function createAPI($msg = null) {
        self::$response["msg"] = $msg;

        return response()->json(self::$response);
    }
}
?>