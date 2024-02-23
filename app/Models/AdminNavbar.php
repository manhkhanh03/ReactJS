<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminNavbar extends Model
{
    use HasFactory;

    protected $table = 'admin_navbar';
    protected $fillable = ['name', 'parent_id', 'area', 'controller', 'action', 'link', 'position', 'icon', 'status'];
    
}
