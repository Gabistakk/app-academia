<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['nome','email', 'senha', 'exercicio1', 'exercicio2', 'exercicio3', 'exercicio4', 'exercicio5', 'cafeDaManha', 'almoco', 'cafeDaTarde', 'janta'];
    use HasFactory;
}
