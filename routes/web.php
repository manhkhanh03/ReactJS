<?php

use App\Http\Controllers\Admin\AdminNavbarController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\MenuAdminController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProductController as ControllersProductController;
use App\Models\Navbar;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        "navs" => Navbar::where('status', true)->get(),
    ]);
})->middleware('auth');

Route::get('admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


// Begin Admin
Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('menu/all', [MenuAdminController::class, 'getMenus'])->name('menu.getMenus');
    Route::resource('menu', MenuAdminController::class);
});

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::resource('/product', ProductController::class);
});

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('user/current', [UserController::class, 'currentUser'])->name('user.current');
    Route::resource('/user', UserController::class);
});

Route::middleware('auth')->get('admin/navbar', [AdminNavbarController::class, "index"])->name('navbar.admin');

// End Admin

// Start Users
Route::get('/home', [Controller::class, 'index']);
Route::get('/navbar', [Controller::class, 'navbar']);

Route::prefix('product')->group(function () {
    Route::get('/', [ControllersProductController::class, 'product'])->name('user.product.index');
    Route::get('/name/{product}/{name_product}', [ControllersProductController::class, 'edit'])->name('user.product.edit');
    Route::get('/category/{category}', [ControllersProductController::class, 'category']);
});
Route::get('/cart', [CartController::class, 'index']);
