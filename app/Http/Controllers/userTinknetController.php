<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Exception;
use App\userTinknet;
use App\Helpers\validAPI;
use App\Helpers\validData;

class userTinknetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = DB::table("user_tinknet")->select("id", "username")->where("role", "=", "staff")->get();

        if (count($data) > 0) {
            return array("akun" => $data, "jumlah_data" => count($data));
        }
        else {
            $hasil = array(array(
                "id" => 0,
                "username" => "Kosong"
            ));
            return array("akun" => $hasil, "jumlah_data" => count($data));
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function validAccount(Request $request)
    {
        try {
            $request->validate([
                "username" => "required",
                "password" => "required"
            ]);

            $kand = array($request->username, $request->password);
            $data = userTinknet::orderBy("username", "asc")->get();

            for ($i = 0; $i < count($data); $i++) {
                if ($data[$i]["username"] == $kand[0] and Crypt::decryptString($data[$i]["password"]) == $kand[1]) {
                    return validAPI::createAPI($data[$i]["id"], hash("md5", $data[$i]["role"]));
                }
            }

            return validAPI::createAPI(0, "jangan_login");

        } catch (Exception $error) {
            return validAPI::createAPI(0, "undefined");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function informasiAkun($id)
    {
        $data = userTinknet::where("id", "=", $id)->get();
        $data[0]["password"] = Crypt::decryptString($data[0]["password"]);
        return $data[0];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function ganti(Request $request, $id)
    {
        try {
            $request->validate([
                "username" => "required",
                "password" => "required"
            ]);

            $data = userTinknet::where("id", "=", $id)->get();
            $olah = userTinknet::findOrFail($id);
            $olah->update([
                "id" => $data[0]["id"],
                "username" => $request->username,
                "role" => $data[0]["role"],
                "password" => Crypt::encryptString($request->password),
            ]);

            $msg = userTinknet::where("id", "=", $olah->id)->get();

            return validData::createAPI("Akun Telah Disunting!!!", $msg);
        } catch (Exception $error) {
            return validData::createAPI("Akun Gagal Disunting!!!", $error);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function tambah(Request $request)
    {
        try {
            $request->validate([
                "username" => "required"
            ]);

            $data = userTinknet::all();

            $olah = userTinknet::create([
                "id" => (count($data)+1),
                "username" => $request->username,
                "role" => "staff",
                "password" => Crypt::encryptString("tinknet123")
            ]);

            $msg = userTinknet::where("id", "=", $olah->id)->get();
            return validData::createAPI("Akun Telah Ditambah!!!", $msg);
        } catch (Exception $error) {
            return validData::createAPI("Akun Gagal Ditambah!!!", $error);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function hapus($id)
    {
        try {
            $olah = userTinknet::findOrFail($id);
            $msg = $olah->delete();

            $data = userTinknet::all();

            for ($i = 0; $i < count($data); $i++) {
                if ($data[$i]["id"] != $i+1) {
                    $atur = userTinknet::findOrFail($data[$i]["id"]);
                    $atur->update([
                        "id" => $i+1,
                        "username" => $data[$i]["username"],
                        "role" => $data[$i]["role"],
                        "password" => $data[$i]["password"]
                    ]);
                }
            }
            return validData::createAPI("Akun Telah Dihapus!!!");
        } catch(Exception $error) {
            return validData::createAPI("Akun Gagal Dihapus!!!");
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function resetAkun($id)
    {
        try {
            $data = userTinknet::where("id", "=", $id)->get();
            $olah = userTinknet::findOrFail($id);
            $olah->update([
                "id" => $data[0]["id"],
                "username" => $data[0]["username"],
                "role" => $data[0]["role"],
                "password" => Crypt::encryptString("tinknet123"),
            ]);

            $msg = userTinknet::where("id", "=", $olah->id)->get();

            return validData::createAPI("Akun Telah Direset!!!", $msg);
        } catch (Exception $error) {
            return validData::createAPI("Akun Gagal Direset!!!", $error);
        }
    }
}
