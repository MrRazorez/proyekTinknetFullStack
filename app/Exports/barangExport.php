<?php

namespace App\Exports;

use App\crudTinknet;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class barangExport implements FromCollection, WithHeadings
{
    public function headings():array {
        return [
            "No",
            "Nama Perangkat",
            "Jenis",
            "Jumlah",
            "Status",
            "Kondisi",
            "Lokasi"
        ];
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $data = crudTinknet::all();
        if (count($data) > 0) {
            return collect($data);
        }
        else {
            $data = array(array(
                "id_barang" => 0,
                "nama_perangkat" => "Kosong",
                "jenis" => "Kosong",
                "jumlah" => "Kosong",
                "status" => "Kosong",
                "kondisi" => "Kosong",
                "lokasi" => "Kosong"
            ));

            return collect($data);
        }
    }
}
