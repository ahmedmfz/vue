<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class PostController extends Controller
{
    
    public function index(Request $request){
        return PostResource::collection(Post::filter($request->all())->orderBy('id', 'DESC')->paginate(10));
    }

    public function store(StorePostRequest $storePostRequest){
        $post = Post::create(Arr::except($storePostRequest->validated() ,'image'));
        $post->storeFile($storePostRequest->image);
        return new PostResource($post);
    }

    public function show(Post $post){
        return new PostResource($post);
    }

    public function update(UpdatePostRequest $updatePostRequest , Post $post){
        $post->update(Arr::except($updatePostRequest->validated() ,'image'));
        if($updatePostRequest->image && is_file($updatePostRequest->image))  {
            $post->updateFile($updatePostRequest->image);
        }
        return new PostResource($post);
    }

    public function destroy(Post $post){
        $post->delete();
        return response()->noContent();
    }
    
}
