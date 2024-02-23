<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ImageProduct;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageProductController extends Controller
{
    public function store(Request $request, Product $product) {
        try {
            foreach($request->file('image') as $image) {
                $path = Storage::disk('public')->put("/products", $image);
                ImageProduct::create([
                    'url' => "/$path",
                    'product_id' => $product->id,
                ]);
            }
            return response();
        }catch (Exception $e) {
            return response($e);
        }
    }

    public function handleUpdateProduct(Request $request, Product $product) {
        return response()->json($request->file('image'), 200);
        try {
            if ($request->file('image') !== null) {
                $this->store(new Request([], [], [], [], [
                    'image' => $request->file('image'),
                ]), $product);
            }
            $idDelete = $request->query('idImgDelete');
            if ($idDelete !== null) {
                foreach ($idDelete as $id) {
                    $this->destroy(ImageProduct::find($id));
                }
            }
            return response();
        } catch(Exception $e) {
            return response($e);
        }
    }

    public function destroy(ImageProduct $imageProduct) {
        try {
            Storage::disk('public')->delete($imageProduct->url);
            $imageProduct->delete();
            return response();
        }catch(Exception $e) {
            return response($e);
        }
    }
}
