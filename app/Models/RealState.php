<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RealState extends Model
{
    protected $table = 'real_state';
    protected $fillable = [
        'user_id', 'title', 'description', 'content', 'price',
        'bathrooms', 'bedrooms', 'property_area', 'total_property_area', 'slug'
    ];

    public function user()
    {
        return $this->belongsTo(User::class); //referencia o id da classe chamada quando não passar segundo parametro
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}

//obs: quando a importação das classes esta na mesma pasta, não precisar ter importação com use
