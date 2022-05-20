<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
        'description',
        'slug'
    ];

    public function realState()
    {
        // passando o nome da tabela pivot após chamar a classe para o laravel não se perder ao procurar a tabela
        return $this->belongsToMany(RealState::class, 'real_state_categories');
    }
}
