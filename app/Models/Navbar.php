<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Navbar extends Model
{
    use HasFactory;
    protected $table = "navbars";
    protected $fillable = ['name', 'parent_id', 'controller', 'area', 'action', 'link', 'position', 'icon', 'status'];
}
