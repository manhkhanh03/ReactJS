<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuAdmin extends Model
{
    use HasFactory;
    protected $table = "admin_menu";
    protected $fillable = ['name', 'parent_id', 'controller', 'area', 'action', 'link', 'position', 'icon', 'status'];
}
