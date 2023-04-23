<?php

namespace App\Models;

use App\ModelFilters\PostFilter;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;
    use Filterable;
    protected $guarded = [];

    public function category() : BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
     
    public function modelFilter()
    {
        return $this->provideFilter(PostFilter::class);
    }
    
}
