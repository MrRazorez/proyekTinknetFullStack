<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\crudTinknet;
use App\Helpers\validData;
use App\Exports\barangExport;
use Exception;
use Excel;

class crudController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = crudTinknet::all();

        if (count($data) > 0) {
            return array("barang" => $data, "jumlah_data" => count($data));
        }
        else {
            $hasil = array(array(
                "id_barang" => 0,
                "nama_perangkat" => "Kosong",
                "jenis" => "Kosong",
                "jumlah" => "Kosong",
                "status" => "Kosong",
                "kondisi" => "Kosong",
                "lokasi" => "Kosong"
            ));
            return array("barang" => $hasil, "jumlah_data" => count($data));
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                "nama_perangkat" => "required",
                "jenis" => "required",
                "jumlah" => "required",
                "status" => "required",
                "kondisi" => "required",
                "lokasi" => "required"
            ]);

            $data = crudTinknet::all();

            $olah = crudTinknet::create([
                "id_barang" => (count($data)+1),
                "nama_perangkat" => $request->nama_perangkat,
                "jenis" => $request->jenis,
                "jumlah" => $request->jumlah,
                "status" => $request->status,
                "kondisi" => $request->kondisi,
                "lokasi" => $request->lokasi
            ]);
    
            $msg = crudTinknet::where("id_barang", "=", $olah->id_barang)->get();

            return validData::createAPI("Data Telah Masuk!!!", $msg);
        } catch (Exception $error) {
            return validData::createAPI("Data Gagal Masuk!!!", $error);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = crudTinknet::where("id_barang", "=", $id)->get();

        return $data[0];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                "nama_perangkat" => "required",
                "jenis" => "required",
                "jumlah" => "required",
                "status" => "required",
                "kondisi" => "required",
                "lokasi" => "required"
            ]);

            $olah = crudTinknet::findOrFail($id);

            $olah->update([
                "id_barang" => $id,
                "nama_perangkat" => $request->nama_perangkat,
                "jenis" => $request->jenis,
                "jumlah" => $request->jumlah,
                "status" => $request->status,
                "kondisi" => $request->kondisi,
                "lokasi" => $request->lokasi
            ]);
    
            $msg = crudTinknet::where("id_barang", "=", $olah->id_barang)->get();

            return validData::createAPI("Data Telah Disunting!!!", $msg);
        } catch (Exception $error) {
            return validData::createAPI("Data Gagal Disunting!!!", $error);
        }
    }

    public function exportToXLSX()
    {
        return Excel::download(new barangExport, "data_barang.xlsx");
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function tampilTotal()
    {
        $data = DB::table("tabel_barang")->select(DB::raw("SUM(jumlah) as total"))->where("kondisi", "=", "Bagus")->get();

        return $data[0];
    }
}
