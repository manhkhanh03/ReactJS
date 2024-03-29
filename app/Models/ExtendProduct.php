<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ExtendProduct extends Model
{
    use HasFactory;
    protected $table = 'extend_products';
    protected $fillable = [
        'name',
        'product_id',
        'quantity',
        'type'
    ];

    protected function product() : BelongsTo {
        return $this->belongsTo(Product::class);
    }
}
