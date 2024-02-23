<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $fillable = [
        'name',
        'price',
        'vendor_id',
        'description',
        'status',
        'category'
    ];

    protected function user() : BelongsTo {
        return $this->belongsTo(User::class, 'vendor_id');
    }

    protected function imageProduct() : HasMany {
        return $this->hasMany(ImageProduct::class);
    }

    protected function extendProduct() : HasMany {
        return $this->hasMany(ExtendProduct::class);
    }
}
