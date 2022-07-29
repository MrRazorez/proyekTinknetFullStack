<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class crudTinknet extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = "id_barang";

    protected $table = "tabel_barang";
    protected $fillable = [
        "id_barang",
        "nama_perangkat",
        "jenis",
        "jumlah",
        "status",
        "kondisi",
        "lokasi"
    ];

    protected $hidden = [];
}
