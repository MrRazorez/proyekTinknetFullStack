<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userTinknet extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "user_tinknet";
    protected $fillable = [
        "id",
        "username",
        "role",
        "password"
    ];

    protected $hidden = [];
}
