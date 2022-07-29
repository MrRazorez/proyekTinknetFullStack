<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userTinknetController;
use App\Http\Controllers\crudController;
use App\Helpers\checkAPI;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function () {
    return checkAPI::createAPI("BERHASIL!!!");
});

Route::post("usertinknet", [userTinknetController::class, "validAccount"]);
Route::get("usertinknet/show/{id}", [userTinknetController::class, "informasiAkun"]);
Route::get("usertinknet/show", [userTinknetController::class, "index"]);
Route::post("usertinknet/update/{id}", [userTinknetController::class, "ganti"]);
Route::post("usertinknet/store", [userTinknetController::class, "tambah"]);
Route::get("usertinknet/delete/{id}", [userTinknetController::class, "hapus"]);
Route::get("usertinknet/reset/{id}", [userTinknetController::class, "resetAkun"]);
Route::get("databarang", [crudController::class, "index"]);
Route::post("databarang/store", [crudController::class, "store"]);
Route::get("databarang/show/{id}", [crudController::class, "show"]);
Route::post("databarang/update/{id}", [crudController::class, "update"]);
Route::get("databarang/total", [crudController::class, "tampilTotal"]);
Route::get("dataexport", [crudController::class, "exportToXLSX"]);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
