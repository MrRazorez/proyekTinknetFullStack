<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tabel_barang', function (Blueprint $table) {
            $table->id("id_barang");
            $table->string("nama_perangkat");
            $table->string("jenis");
            $table->string("jumlah");
            $table->string("status");
            $table->string("kondisi");
            $table->string("lokasi");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tabel_barang');
    }
};
