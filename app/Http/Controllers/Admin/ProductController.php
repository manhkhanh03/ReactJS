<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\ExtendProductController;
use App\Http\Controllers\Admin\ImageProductController;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\ImageProduct;
use App\Models\Product;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $products = $user->isAdmin ? Product::where('status', "!=", "deleted")->get() : $user->products->where('status', "!=", "deleted");
        for ($i = 0; $i < count($products); $i++) {
            $products[$i]->imageProduct;
            $products[$i]->user = User::find($products[$i]->vendor_id);
        }
        return Inertia::render('Admin/Product/Index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Product/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        // dd($request);
        $product = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'vendor_id' => auth()->user()->id,
        ]);

        if ($request->hasFile('imgs')) {
            $image = new ImageProductController();
            $image->store(new Request([], [], [], [], [
                "image" => $request->file('imgs'),
            ]), $product);
        }

        $extend = new ExtendProductController();
        $extend->handleDataNewProduct(new Request([
            'newSizes' => $request->sizes,
            'newQuantitys' => $request->quantitys,
            'colors' => $request->colors,

        ]), $product);
        return redirect(route('product.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $product->imageProduct;
        $product->extendProduct;
        return Inertia::render('Admin/Product/Delete', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $product->imageProduct;
        $product->extendProduct;
        return Inertia::render('Admin/Product/Edit', [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        if ($request->idImageDelete !== null) {
            $totalId = count($request->oldImgs);
            if ($totalId == 0 && count($request->imgs) == 0) {
                $request->validate([
                    'image' => ['required']
                ]);
            }
        }
        try {
            $extend = new ExtendProductController();
            $extend->handleDataNewProduct(new Request(
                [
                    'size'  => $request->sizes,
                    'quantity' => $request->quantitys,
                    'sizeId' => $request->sizeIds,
                    'color' => $request->colors,
                ]
            ), $product);

            $image = new ImageProductController();
            // if ($request->idImageDelete !== null) {
            //     $image->handleUpdateProduct(new Request(
            //         ['idImgDelete' => $request->idImageDelete]
            //     ), $product);
            // }
            if ($request->file('imgs') !== null) {
                $image->handleUpdateProduct(new Request(
                    [],
                    [],
                    [],
                    [],
                    ['newImg' => $request->file('image')]
                ), $product);
            }
            $product->update($request->except(['sizes', 'quantitys', 'sizeIds', 'imgs', 'colors']));
            return redirect()->back()->with('status', 'Cập nhật thành công!');
        } catch (Exception $e) {
            return response($e);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->update([
            'status' => 'deleted',
        ]);
        return redirect(route('product.index'));
    }
}
