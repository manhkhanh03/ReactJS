<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminNavbar;
use Illuminate\Http\Request;

class AdminNavbarController extends Controller
{
    public function index() {
        return response()->json(AdminNavbar::where('status', true)->get(), 200);
    }
}
