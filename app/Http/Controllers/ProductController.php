<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }
    public function product(Request $request)
    {
        $page = $request->p ? $request->p : 1;
        $perPage = $request->pp ? $request->pp : 32;
        $user = auth()->user();
        $products = $user->isAdmin ? Product::where('status', 'active')->skip(($page - 1) * $perPage)->take($perPage)->get() : $user->products->where('status', 'active')->skip(0)->take(30);
        foreach ($products as $product) {
            $product->imageProduct;
        }
        return Inertia::render('PageProducts', [
            "products" => $products,
            'currentPage' => $page,
            'perPage' => $perPage,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $product->imageProduct;
        $product->extendProduct;
        return Inertia::render("Product", [
            "product" => $product,
        ]);
    }

    public function category(Request $request)
    {
        $products = Product::where('category', $request->category)->inRandomOrder()->take(4)->get();
        foreach ($products as $product) {
            $product->imageProduct;
        }
        return response()->json($products, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
