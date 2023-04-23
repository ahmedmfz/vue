<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\PostResource;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    
    public function index(Request $request){
        return CategoryResource::collection(Category::filter($request->all())->paginate());
    }

    public function categorySelect(){
        return CategoryResource::collection(Category::get());
    }

}
