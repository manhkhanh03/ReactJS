<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMenuAdminRequest;
use App\Http\Requests\StoreMenuRequest;
use App\Models\MenuAdmin;
use Illuminate\Http\Request;

class MenuAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $menus = MenuAdmin::where('')
        // return view('admin.pages.menu.index', [
        //     'title' => "Danh sách tuỳ chọn",
        //     'user' => auth()->user(),
        //     'menus' => MenuAdmin::all(),
        // ]);
    }

    public function getMenus() {
        $menus = MenuAdmin::where('status', true)->orderBy('position', "asc")->get();
        return response()->json($menus, 200);
    }

    public function create() {
        return view('admin.pages.menu.create', [
            'title' => "Thêm mới tuỳ chọn",
            'user' => auth()->user(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMenuAdminRequest $request)
    {
        // dd($request);
        MenuAdmin::create($request->validated());
        return redirect(route('menu.index'))->with('status', "Thêm mới tuỳ chọn '$request->name' thành công");
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuAdmin $menu)
    {
        return view('admin.pages.menu.delete', [
            'title' => "Xoá tuỳ chọn",
            'user' => auth()->user(),
            'menu'  => $menu,
        ]);
    }

    public function edit(MenuAdmin $menu) {
        return view('admin.pages.menu.edit', [
            'title' => "Chỉnh sửa tuỳ chọn",
            'user' => auth()->user(),
            'menu'  => $menu,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreMenuAdminRequest $request, MenuAdmin $menu)
    {
        $menu->update($request->validated());
        return redirect(route('menu.index'))->with('status', "Chỉnh sửa tuỳ chọn '$request->name' thành công");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuAdmin $menu)
    {
        $menu->delete();
        return redirect(route('menu.index'))->with('status', "Xoá tuỳ chọn '$menu->name' thành công");
    }
}
