<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreExtendProductRequest;
use App\Http\Requests\UpdateExtendProductRequest;
use App\Models\ExtendProduct;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

class ExtendProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreExtendProductRequest $request)
    {
        try {
            $extend = ExtendProduct::create($request->query());
            return $extend;
        } catch (Exception $e) {
            return response($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(ExtendProduct $extendProduct)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ExtendProduct $extendProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ExtendProduct $extendProduct)
    {
        try {
            $request->validate([
                'quantity' => ['numeric']
            ]);
            $extendProduct->update($request->query());
            return response();
        } catch (Exception $e) {
            return response($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ExtendProduct $extendProduct)
    {
        try {
            $extendProduct->delete();
            return response();
        } catch (Exception $e) {
            return response($e);
        }
    }

    public function handleDataNewProduct(Request $request, Product $product)
    {
        try {
            $quantity = 0;
            $listId = [];

            if ($request->sizeId !== null) {
                foreach ($request->sizeId as $key => $id) {
                    if ($id !== null) {
                        $this->update(new Request([
                            'name' => $request->size[$key],
                            'quantity' => $request->quantity[$key],
                        ]), ExtendProduct::find($id));
                        array_push($listId, $id);
                    } else {
                        $extend = $this->store(new StoreExtendProductRequest([
                            'name' => $request->size[$key],
                            'quantity' => $request->quantity[$key],
                            'product_id' => $product->id,
                            'type' => 'size',
                        ]));
                        array_push($listId, $extend->id);
                    }
                }
            } else ++$quantity;

            if ($request->newSizes !== null) {
                foreach ($request->newSizes as $key => $newSize) {
                    $extend = $this->store(new StoreExtendProductRequest([
                        'name' => $newSize,
                        'quantity' => $request->newQuantitys[$key],
                        'product_id' => $product->id,
                        'type' => 'size',
                    ]));
                    array_push($listId, $extend->id);
                }
            } else ++$quantity;

            if ($quantity == 2) {
                return redirect()->back()->with('message', "Size và Số lượng không được trống");
            } else {
                $remaining = ExtendProduct::where('product_id', $product->id)->where('type', 'size')->whereNotIn("id", $listId)->get();

                foreach ($remaining as $item) {
                    $this->destroy($item);
                }
            }
            $this->handleColor(new Request(['colors' => $request->color]), $product);

            return response();
        } catch (Exception $e) {
            return response($e);
        }
    }

    private function handleColor(Request $request, Product $product)
    {
        if ($request->colors !== null) {
            $this->deleteAllColorById($product);
            foreach ($request->colors as $color) {
                $this->store(new StoreExtendProductRequest([
                    'name' => $color,
                    'product_id' => $product->id,
                    'type' => 'color'
                ]));
            }
            return response();
        }
        return redirect()->back()->with('errorColor', 'Màu không được để trống');
    }

    private function deleteAllColorById(Product $product)
    {
        $extends = ExtendProduct::where([
            'product_id' => $product->id,
            'type' => 'color'
        ])->delete();
        return response();
    }
}
