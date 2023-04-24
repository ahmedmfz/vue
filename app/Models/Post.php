<?php

namespace App\Models;

use App\ModelFilters\PostFilter;
use App\Traits\HandleUploadFile;
use EloquentFilter\Filterable;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Post extends Model implements HasMedia
{
    use HasFactory;
    use Filterable;
    use InteractsWithMedia;
    use HandleUploadFile;
    
    protected $guarded = [];

    public function category() : BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
     
    public function modelFilter()
    {
        return $this->provideFilter(PostFilter::class);
    }

    public function getImage(){
       return  $this->getFirstMediaUrl('posts') == null 
       ? 'https://recurpost.com/wp-content/webp-express/webp-images/uploads/2021/02/Google-My-Business-Post-Image-Size-in-2021.jpg.webp' 
       : $this->getFirstMediaUrl('posts');
    }
    
}
